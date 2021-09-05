require('file-loader?name=[name].[ext]!./index.html')
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.scss';

const appElement = document.getElementById('App');

ReactDOM.render(
  <Router>
    <App />
  </Router>, appElement);