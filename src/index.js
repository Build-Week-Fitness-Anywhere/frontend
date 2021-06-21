import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyMiddleware, createStore } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk'
import { primeReducer } from './js/reducers'

const store = createStore(primeReducer, applyMiddleware(thunk) );



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);