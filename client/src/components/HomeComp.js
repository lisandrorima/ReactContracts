import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class HomeComp extends Component {
    render() {
        return (
            <div>
            <div className="hero-image">
                            <div className="hero-text">
              <h1>Encuentra tu hogar</h1>
              <p>Vive tu vida</p>
              <button><NavLink to="/home">Buscar Propiedades</NavLink></button>
            </div>
          </div> 
          </div>
        )
    }
}

export default HomeComp
