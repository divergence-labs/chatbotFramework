import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './chatservice';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(, document.querySelector('#root'));
ReactDOM.render(
    <div>
    <Demo />
    <App /> 
    </div>,
    document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
