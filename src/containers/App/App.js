import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Bargraph from '../../components/Graph/Bargraph/Bargraph';
import Aux from '../../hoc/Aux';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <main className={styles.app}>
          <Bargraph />
        </main>
      </Aux>
    );
  }
}

export default App;
