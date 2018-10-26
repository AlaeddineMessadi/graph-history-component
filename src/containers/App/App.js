import React, { Component } from "react";
import Header from "../../components/Header/Header";
import "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>History Bar graph</main>
      </div>
    );
  }
}

export default App;
