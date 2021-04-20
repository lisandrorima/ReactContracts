import React, { Component } from "react";
import Rental2 from "./contracts/Rental2.json";
import ContractStruct from './components/ContractStruct'
import getWeb3 from "./getWeb3";
import * as Utils from 'web3-utils';
import UserComponent from './components/UserComponent';
import RealEstateComp from './components/RealEstateComp';


import "./App.css";
import AltaPropiedadComp from "./components/AltaPropiedadComp";

class App extends Component {
  state = { contratos: [], storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      const contratos = [];
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Rental2.networks[networkId];
      const instance = new web3.eth.Contract(
        Rental2.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ contratos, web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract, contratos } = this.state;

    //trato de cargar un contrato
    /*await contract.methods.GenerateAlquiler ('0xE97b00b5f056ee53E46AB6eBE300AA6e5D655452',
    '0xE97b00b5f056ee53E46AB6eBE300AA6e5D655452',
     10, 1000, 100, 10, 100).send({from:accounts[0]});*/

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.idContratoInm().call();
    // Update state with the result.
    this.setState({ storageValue: response });

    //Trae todos los contratos de alquiler registrados en el contrato inteligente
    for (var i = 1; i <= response; i++) {
      const contrato = await contract.methods.Contratos(i).call()
      this.setState({
        contratos: [...this.state.contratos, contrato]
      })
    }
    console.log(this.state.contratos);

  };

  onSubmit = async event => {
    event.preventDefault();

    const { accounts, contract, contratos, web3 } = this.state;
    var defaccount = accounts[0];

    this.setState({ message: 'Waiting on transaction success...' });
    console.log(accounts[0]);

    //aca faltan params
    await contract.methods.GenerateAlquiler( 
      this.state._propietario,this.state._idPropiedad,this.state._montoDePago,
      this.state.duracion,this.state._diasPago, this.state._cantidadPagos).send(
      {
      from:accounts[0],
      _inquilino: accounts[0],
      _propietario: this.state.value,
      value: Utils.toWei(this.state._montoDePago, 'ether'),
      _cantidadPagos: this.state.value,
      _diasPago: this.state.value,
      duracion: this.state.value,
      _idPropiedad: this.state.value
      })

    this.setState({ message: 'You have been entered!' });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      
      <div className="container">
        <UserComponent/>
        <RealEstateComp/>
        <AltaPropiedadComp/>

        <form onSubmit={this.onSubmit}>
          
          <h4>Alquilar una propiedad mediante este formulario</h4>
          <div>
            <label>Id de la propiedad</label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ _idPropiedad: event.target.value })}
            />
          </div>
          <div>
            <label>Monto en gwei</label>
            <input
              value={this.state._montoDePago}
              onChange={event => this.setState({ _montoDePago: event.target.value })}
            />
            <label>billetera propietario</label>
            <input
              value={this.state._propietario}
              onChange={event => this.setState({ _propietario: event.target.value })}
            />
            <label>cantidad de pagos a hacer</label>
            <input
              value={this.state._cantidadPagos}
              onChange={event => this.setState({ _cantidadPagos: event.target.value })}
            />
            <label>duracion</label>
            <input
              value={this.state.duracion}
              onChange={event => this.setState({ duracion: event.target.value })}
            />
            <label>Dias de pago</label>
            <input
              value={this.state._diasPago}
              onChange={event => this.setState({ _diasPago: event.target.value })}
            />
          </div>
          <button>Subscribe</button>
        </form>

        <h1>Muestra contratos en el SC</h1>
        {this.state.contratos.map((contrato) => {
          return (

            <div key={contrato._idContratoInm}>
              <ContractStruct {...contrato} />

            </div>
          )
        })}

      </div>
    );
  }
}

export default App;
