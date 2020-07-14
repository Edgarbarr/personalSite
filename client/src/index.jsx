import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx";
import {BrowserRouter as Router} from "react-router-dom";
const initialState = typeof window !== "undefined" && window && window.INITIAL_STATE;

ReactDOM.hydrate(<Router><App/></Router>, document.getElementById('app'));