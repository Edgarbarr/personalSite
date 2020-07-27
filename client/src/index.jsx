import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import { loadableReady } from '@loadable/component'
import rootReducer from "./redux/root-reducer.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
.soItBegins {
    overflow: hidden; 
  
  }
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  
  /* Document
     ========================================================================== */
  
  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */
  
   html {
      line-height: 1.15; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
      width: 100%;
    }
    
    /* Sections
       ========================================================================== */
    
    /**
     * Remove the margin in all browsers.
     */
    
    body {
      margin: 0;
      width: 100%
    }
    

    
    main {
      display: block;
    }
    
  
    
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    
    /* Grouping content
       ========================================================================== */
    
    /**
     * 1. Add the correct box sizing in Firefox.
     * 2. Show the overflow in Edge and IE.
     */
    
    hr {
      box-sizing: content-box; /* 1 */
      height: 0; /* 1 */
      overflow: visible; /* 2 */
    }
    
   
    
    pre {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }
    
    /* Text-level semantics
       ========================================================================== */
    
    /**
     * Remove the gray background on active links in IE 10.
     */
    
    a {
      background-color: transparent;
      text-decoration: none !important;
    }
    a:hover {
      color: black !important;
    }
    
    /**
     * 1. Remove the bottom border in Chrome 57-
     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
     */
    
    abbr[title] {
      border-bottom: none; /* 1 */
      text-decoration: underline; /* 2 */
      text-decoration: underline dotted; /* 2 */
    }
    
    /**
     * Add the correct font weight in Chrome, Edge, and Safari.
     */
    
    b,
    strong {
      font-weight: bolder;
    }
    

    
    code,
    kbd,
    samp {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }
    
    /**
     * Add the correct font size in all browsers.
     */
    
    small {
      font-size: 80%;
    }
    

    
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    
    sub {
      bottom: -0.25em;
    }
    
    sup {
      top: -0.5em;
    }
    
    /* Embedded content
       ========================================================================== */
    
    /**
     * Remove the border on images inside links in IE 10.
     */
    
    img {
      border-style: none;
    }
    
    /* Forms
       ========================================================================== */
    
    /**
     * 1. Change the font styles in all browsers.
     * 2. Remove the margin in Firefox and Safari.
     */
    
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.15; /* 1 */
      margin: 0; /* 2 */
    }
    
    /**
     * Show the overflow in IE.
     * 1. Show the overflow in Edge.
     */
    
    button,
    input { /* 1 */
      overflow: visible;
    }
    
    /**
     * Remove the inheritance of text transform in Edge, Firefox, and IE.
     * 1. Remove the inheritance of text transform in Firefox.
     */
    
    button,
    select { /* 1 */
      text-transform: none;
    }
    
    /**
     * Correct the inability to style clickable types in iOS and Safari.
     */
    
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }
    
    /**
     * Remove the inner border and padding in Firefox.
     */
    
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    
    /**
     * Restore the focus styles unset by the previous rule.
     */
    
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    
    /**
     * Correct the padding in Firefox.
     */
    
    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }
    
 
    
    legend {
      box-sizing: border-box; /* 1 */
      color: inherit; /* 2 */
      display: table; /* 1 */
      max-width: 100%; /* 1 */
      padding: 0; /* 3 */
      white-space: normal; /* 1 */
    }
    
    /**
     * Add the correct vertical alignment in Chrome, Firefox, and Opera.
     */
    
    progress {
      vertical-align: baseline;
    }
    
    /**
     * Remove the default vertical scrollbar in IE 10+.
     */
    
    textarea {
      overflow: auto;
    }
    
    /**
     * 1. Add the correct box sizing in IE 10.
     * 2. Remove the padding in IE 10.
     */
    
    [type="checkbox"],
    [type="radio"] {
      box-sizing: border-box; /* 1 */
      padding: 0; /* 2 */
    }
    
    /**
     * Correct the cursor style of increment and decrement buttons in Chrome.
     */
    
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    
    /**
     * 1. Correct the odd appearance in Chrome and Safari.
     * 2. Correct the outline style in Safari.
     */
    
    [type="search"] {
      -webkit-appearance: textfield; /* 1 */
      outline-offset: -2px; /* 2 */
    }
    
    /**
     * Remove the inner padding in Chrome and Safari on macOS.
     */
    
    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    
    ::-webkit-file-upload-button {
      -webkit-appearance: button; /* 1 */
      font: inherit; /* 2 */
    }
    
    /* Interactive
       ========================================================================== */
    
    /*
     * Add the correct display in Edge, IE 10+, and Firefox.
     */
    
    details {
      display: block;
    }
    
    /*
     * Add the correct display in all browsers.
     */
    
    summary {
      display: list-item;
    }
    
    /* Misc
       ========================================================================== */
    
    /**
     * Add the correct display in IE 10+.
     */
    
    template {
      display: none;
    }
    
    /**
     * Add the correct display in IE 10.
     */
    
    [hidden] {
      display: none;
    }
  
    ul{
      list-style: none;
      padding: 0;
    }
    a{
      text-decoration: none;
    }
  
    video {
      width: 100% !important;
      height: 100% !important;
      max-height: 56.25vw !important;
  }
  .hohimage{
      width: 100% !important;
      height: 100% !important;
      max-height: 56.25vw !important;
  }
  
  p {
    line-height: 2;
    padding: 5px 0;
  }
  
  h1,h2,h3,h4,h5,h6 {
    margin: 10px 0;
    font-weight: 400;
  }
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 32px
  }
  h3 {
    font-size: 28px;
  }
  h4 {
    font-size: 24px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 16px;
  }
  
  a {
    font-size: larger;
  }
  .button {
    width: 200px;
    height: 75px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 0%;
  }
  .button:hover {
    color: #B68F40;
  }
  li:hover {
    color: #B68F40;
  }
  .submit{
    background-color: #B68F40;
    
  }
  .submit:hover{
    color: white;
  }
  
  
  
  
  
  *, ::after, ::before {
    box-sizing: border-box !important;
    font-family: 'Rubik', Arial, Helvetica, sans-serif;
  }
  
  .fade-in {
    -webkit-animation: fadein 1s forwards; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 1s forwards; /* Firefox < 16 */
        -ms-animation: fadein 1s forwards; /* Internet Explorer */
         -o-animation: fadein 1s forwards; /* Opera < 12.1 */
            animation: fadein 1s forwards;
  }
  
  @keyframes fadein {
    from { opacity: 0;
    transform: translateY(-100px); 
  }
    to   { opacity: 1;
      transform: translateY(0px);  
    }
  }
  
  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from { opacity: 0;
    transform: translateY(-100px); 
  }
    to   { opacity: 1;
      transform: translateY(0px);  
    }
  }
  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from { opacity: 0; -webkit-transform: translateY(-100px); }
    to  { opacity: 1; -webkit-transform: translateY(0px);  }
  }
  /* Internet Explorer */
  @-ms-keyframes fadein {
    from { opacity: 0;
    transform: translateY(-100px); 
  }
    to   { opacity: 1;
      transform: translateY(0px);  
    }
  }
  
  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from { opacity: 0;
    transform: translateY(-100px); 
  }
    to   { opacity: 1;
      transform: translateY(0px);  
    }
  }
  
  .crip div, .qfi {
    opacity: 0;
  }
  .base-element {
    z-index: 0;
    
  }
  
  .background-element {
    /* -webkit-transform: perspective(500px) translateY(26px)scale(1.09);
    transform:perspective(500px) translateY(26px) scale(1.09); */
    z-index: -1;
  }
  .background-element::after{
    -webkit-transform: translateY(26px)scale(1.09);
    transform:translateY(26px) scale(1.09);
  
  }
  .home-banner .slide .video-slide {
    background-color: #000; }
    #home-banner-box > div {
      position: absolute;
      z-index: -2;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
  
  }
  .home-banner.loading .video-background {
    opacity: 0; }
  
  .video-background {
    position: absolute;
    top: 50%;
    left: 0;
    padding-top: 56.25%;
    width: 100%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: 2s opacity ease;
    transition: 2s opacity ease;
    opacity: 1;
    z-index: -1;
  }
  
  .fullstackdiv {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.322);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .video-foreground,
  .video-background iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; }
`

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(rootReducer, preloadedState)


loadableReady(() => {
    ReactDOM.hydrate(<Provider store={store}><Router><GlobalStyle/><App/></Router></Provider>, document.getElementById('app'));
})