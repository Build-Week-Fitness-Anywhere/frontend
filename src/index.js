import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"

import { applyMiddleware, createStore } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { primeReducer } from './reducers'

const store = createStore(primeReducer, applyMiddleware(thunk, logger) );



ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Provider store={store} >
      <App />
    </Provider>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);