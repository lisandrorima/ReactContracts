import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import "./assets/css/App.css";
import Router from "./components/Router";

class App extends Component {
  

  render() {
    return( 
      <>    
        <Navbar/>
        <Router>

        </Router>
        </>      
    )
  }
}

export default App;
