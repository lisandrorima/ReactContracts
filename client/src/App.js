import React, { Component } from "react";
import "./App.css";
import AltaUsuarioComp from "./components/AltaUsuarioComp.js";
import SmartComp from "./components/SmartComp";

class App extends Component {
  

  render() {
    return(
      <div>
        <AltaUsuarioComp/>
        <SmartComp/>
      </div>    
    )
  }
}

export default App;
