import React, { Component } from "react";
import logo from "./logo.svg";
import Toggle from "./ToggleRenderProps";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && <h1>Toggle me!</h1>}
              <button onClick={toggle}>Toggle!</button>
            </div>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <div>
              <img
                src={logo}
                className="App-logo"
                alt="mouse over to toggle 'Reusable and flexible component!' in the UI"
                onMouseOver={toggle}
                onMouseOut={toggle}
              />
              {on && <p>Reusable and flexible component!</p>}
            </div>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
