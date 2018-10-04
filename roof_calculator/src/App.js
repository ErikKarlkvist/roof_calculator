import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./views/containers/Map.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
