import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Bargraph from '../../components/Graph/Bargraph/Bargraph';
import Aux from '../../hoc/Aux';
import { HISTORY, apiGet } from '../../services/ApiService';

// Styles
import styles from './App.module.scss';

class App extends Component {
  state = { history: [] }

  componentWillMount() {
    apiGet.then(res =>
      this.setState({ ...this.state, history: res.history })
    );
  }

  render() {
    return (
      <Aux>
        <Header />
        <main className={ styles.app }>
          <h2 className={ styles.graphTitle }>Your progress in different categories</h2>
          <Bargraph history={ this.state.history } height="400" width="100%" />
        </main>
      </Aux>
    );
  }
}

export default App;
