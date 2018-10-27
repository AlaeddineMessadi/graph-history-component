import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducer from '../../store/reducer';
import rootSaga from '../../store/sega';


// create segaMiddleware instance
const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

// apply segaMiddleware
sagaMiddleware.run(rootSaga);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});


