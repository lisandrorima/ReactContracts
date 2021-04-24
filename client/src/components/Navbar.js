import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../assets/images/real-estate-logo.png'


export class Navbar extends Component {


    render() {
        return (
            <div>
                <header id="header">
                    <div className="center">

                        <div id="logo">
                            <img src={logo} className="app-logo" alt="Logotipo" />
                            <span id="brand">
                                <strong>Smart</strong>Prop
                </span>
                        </div>
                        <nav id="menu">
                            <ul>
                                <li>
                                    <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                                </li>
                                <li>
                                <NavLink to="/propiedades" activeClassName="active">Propiedades</NavLink>
                                </li>
                                <li>
                                <NavLink to="/aboutus" activeClassName="active">Nosotros</NavLink>
                                </li>
                                <li>
                                    <a href="#">Contacto</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="clearfix"></div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navbar
