import React, { Component } from 'react';
import {
    Table, Button, Container, Modal,
    ModalBody, ModalFooter, FormGroup, ModalHeader, Label
} from 'reactstrap';
import RactDom from 'react-dom';


class AltaPropiedadComp extends Component {

    constructor() {
        super();
    }



    //VALUE ON CHANGE no va
    render() {


        return (
            <Modal>
                <ModalHeader>
                    <div><h1>Ingrese Propiedad</h1></div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>Direccion:</Label>
                        <input className="form-control"
                            type="text" />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button></Button>
                </ModalFooter>
            </Modal>
        )


    }
}

export default AltaPropiedadComp;

/*<div>

<form>

    <label>Direccion</label>
    <input
        value={this.state.value}
        onChange={event => this.setState({ _idPropiedad: event.target.value })}
    />

    <button>Subscribe</button>
</form>

</div>*/