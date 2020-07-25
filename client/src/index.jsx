import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import { loadableReady } from '@loadable/component'


loadableReady(() => {
    ReactDOM.hydrate(<Router><App/></Router>, document.getElementById('app'));
})