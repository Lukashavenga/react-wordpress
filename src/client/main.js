import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Data from './app/util/Redux/reducers.js';
//import App from './app/app.jsx';
import Root from './app/containers/Root.js';


//let store = createStore(Data);


if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body)
    run();
else
    window.addEventListener('DOMContentLoaded', run, false);

function run() {
    ReactDOM.render(React.createElement(Root),document.getElementById('main'));
}

