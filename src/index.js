import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sega';

// create segaMiddleware instance
const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

// apply segaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
