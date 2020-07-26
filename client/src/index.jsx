import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import { loadableReady } from '@loadable/component'
import rootReducer from "./redux/root-reducer.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(rootReducer, preloadedState)


loadableReady(() => {
    ReactDOM.hydrate(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('app'));
})