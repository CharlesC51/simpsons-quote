import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp";
  

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true,
    }
  }
    handleClick = () => {
      this.setState({ working: !this.state.working });
    };
  
  render() {
    const work = this.state.working ? "work" : "break";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={work} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.handleClick}
      >
      {work.toUpperCase()}
      </button>
        </header>
      </div>   
    );
  }
}

export default App;