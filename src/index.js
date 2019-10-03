import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo from './chatservice';
import {createBrowserHistory}  from "history";
import { Route, Router } from "react-router-dom";
import Documentation from './Documentation/documentation';
import * as serviceWorker from './serviceWorker';


const hist = createBrowserHistory();

//ReactDOM.render(, document.querySelector('#root'));
ReactDOM.render(
    <Router history={hist}>
     <Route path="/" component={Demo}/>
     <Route path="/documentation" component={Documentation}/>
    </Router>,
    document.querySelector('#root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
