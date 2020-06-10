import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calc from './main/Calculator'


ReactDOM.render(
  <React.StrictMode>
    <h1>Calculadora</h1>
    <Calc />
  </React.StrictMode>,
  document.getElementById('root')
);
