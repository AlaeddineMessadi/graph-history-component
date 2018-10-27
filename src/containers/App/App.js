import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Bargraph from '../../components/Graph/Bargraph/Bargraph';
import Aux from '../../hoc/Aux';

import { fetchHistory } from '../../store/actions';

// Styles
import styles from './App.module.scss';

const App = ({ history, loading }) => {
  return (
    <Aux>
      <Header />
      <main className={ styles.app }>
        <h2 className={ styles.graphTitle }>Your progress in different categories</h2>
        <Bargraph history={ history } loading={ loading } height="400" width="100%" />
      </main>
    </Aux>
  );
}

const mapStateToProps = (state) => ({
  history: state.history,
  loading: state.loading
})

const mapDispatchToProps = {
  fetchHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
