import React, { Component } from 'react';



class contractStruct extends Component {

    constructor() {
        super();
    }


    render() {
        const data = this.props.contract;
        console.log(data);


        return (
            <div>
                <h2>Id contrato inmobiliario: {this.props._idContratoInm}</h2>
                <p>Id propiedad: {this.props._idPropiedad} <span/> </p>
                <p>Billetera inquilino: {this.props._inquilino}</p>
                <p>Billetera Propietario: {this.props._propietario}</p>
                <p>Fecha inicio contrato: {Date(this.props._fechaInicio/1000)} 
                Fecha fin contrato: {Date(this.props._fechaFin/1000)}</p>
                <p>lEl pago se debe hacer cada {this.props._diasPago} dias y son  {this.props._cantidadPagos} pagos</p>
            </div>
        )


    }
}

export default contractStruct;
