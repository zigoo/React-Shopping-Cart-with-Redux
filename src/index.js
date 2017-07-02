import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import prodReducer from './ridax/prodReducer.js';
import App from './App.js';

const rootReducers = combineReducers({
  meble: prodReducer
});

export const store = createStore(
 rootReducers,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> 
, document.getElementById('root'));
