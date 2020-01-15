import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import newsReducer from './reducers/newsReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
const reducers = combineReducers({ news: newsReducer });
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
