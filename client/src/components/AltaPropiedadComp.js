import React from 'react';
import RactDom from 'react-dom';


class AltaPropiedadComp extends Component {

    constructor() {
        super();
    }

//VALUE ON CHANGE no va
    render() {


        return (
            <div>
                <form>
                    
                    <label>Direccion</label>
                    <input
                        value={this.state.value}
                        onChange={event => this.setState({ _idPropiedad: event.target.value })}
                    />

                    <button>Subscribe</button>
                </form>

            </div>
        )


    }
}

export default AltaPropiedadComp;
