import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Bargraph from '../../components/Graph/Bargraph/Bargraph';
import './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Bargraph />
        </main>
      </div>
    );
  }
}

export default App;
