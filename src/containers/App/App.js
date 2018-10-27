import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Bargraph from '../../components/Graph/Bargraph/Bargraph';
import Aux from '../../hoc/Aux';

import { fetchHistory } from '../../store/actions';

// Styles
import styles from './App.module.scss';

class App extends Component {

  componentDidMount() {
    this.props.fetchHistory();
  }

  render() {
    return (
      <Aux>
        <Header />
        <h2 className={ styles.title }>Your Progress</h2>
        <Bargraph
          history={ this.props.history }
          loading={ this.props.loading }
          title="Your progress in different categories"
          height="400"
          width="100%" />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => ({
  history: state.history,
  loading: state.loading
})

const mapDispatchToProps = {
  fetchHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
