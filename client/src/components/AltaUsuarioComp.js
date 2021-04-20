import React, { Component } from 'react';
import {
  Table, Button, Container, Modal,
  ModalBody, ModalFooter, FormGroup, ModalHeader, Label
} from 'reactstrap';
import RactDom from 'react-dom';


const url = "https://localhost:44339/api/register"



class AltaUsuarioComp extends Component {

  constructor() {
    super();
    this.state = {
      personalID: '',
      email: '',
      name: '',
      surname: '',
      walletAddress: '',
      password:''
    };

  }



  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.personalID]: event.target.value });
    this.setState({ [event.target.surname]: event.target.value });
    this.setState({ [event.target.email]: event.target.value });
    this.setState({ [event.target.walletAddress]: event.target.value });
    this.setState({ [event.target.password]: event.target.value });

  }

  



  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state.name);
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(data => {
        if (data === 'success') {

        }
      })


    event.preventDefault();
  }


  //VALUE ON CHANGE no va
  render() {


    return (
      
        <form onSubmit={this.handleSubmit}>

          <label>
            DNI:
            <input type="number" value={this.state.value} name="personalID" onChange={this.handleChange} />
          </label>
          <label>
            Name:
            <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
          </label>
          <label>
            Surname:
            <input type="text" value={this.state.value} name="surname" onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="email" value={this.state.value} name="email" onChange={this.handleChange} />
          </label>
          <label>
          WalletAddress:
            <input type="text" value={this.state.value} name="walletAddress" onChange={this.handleChange} />
          </label>
          <label>
          Password:
            <input type="password" value={this.state.value} name="password" onChange={this.handleChange} />
          </label>
          

          <input type="submit" value="Submit" />
        </form>

      
    );
  }
}

export default AltaUsuarioComp;
