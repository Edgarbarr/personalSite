import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import { loadableReady } from '@loadable/component'

// const initialState = typeof window !== "undefined" && window && window.INITIAL_STATE;

loadableReady(() => {
    ReactDOM.hydrate(<Router><App/></Router>, document.getElementById('app'));
})