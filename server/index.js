const express = require('express');
const app = express();
const path = require('path');
const port = 3002;
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
var expressStaticGzip = require("express-static-gzip")
import {StaticRouter as Router} from "react-router-dom";
import fs from 'fs';
import React from 'react';
import ReactDOMServer, {renderToString} from 'react-dom/server';
import App from '../client/src/components/app.jsx';


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

//   app.get('*.html', function (req, res, next) {
//     req.url = req.url + '.br';
//     res.set('Content-Encoding', 'brotli');
//     next();
//   });
//   app.get('*.', function (req, res, next) {
//     req.url = req.url + '.br';
//     res.set('Content-Encoding', 'brotli');
//     next();
//   });
app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "barrientosedgar.com@gmail.com",
                pass: "12qwaszx!@QWASZX"
            }
        })
        
        let mailOptions = {
            from: req.body.email,
            to: "barrientosedgar.com@gmail.com",
            subject: req.body.subject,
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                res.send("Sorry there seems to be an error. Please contact me at edgarmbarr@gmail.com.")
            } else {
                res.send("Email sent!")
            }
        })
    })
});
app.listen(port, ()=>{console.log(`Now listening on port: ${port}`)});

app.use(expressStaticGzip(path.join(__dirname, '../client/dist'),{
    enableBrotli: true,
    orderPreference: ['br']
}));

app.use('/*', (req, res, next) => {

    let context = {};
    fs.readFile(path.resolve('server/index.html'), 'utf-8', (err, data) =>{
        if(err){
            console.log(err);
            return res.status(500).send("error");
        }
        console.log(req.originalUrl)
        return res.send(data.replace('<div id="app"></div>', `<div id="app">${renderToString(<Router location={`${req.originalUrl}`} context={context}><App/></Router>)}</div>`))
    })
})






// app.get('*', function (req, res){
//     var urlpaths = ["/projects", "/resume", "/contact"]
//     if(urlpaths.includes(req.url)){
//         res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
//     } else {
//         res.send(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>EdgarBarrientos.com</title>
//         </head>
//         <body>  
//             <div id="app"><h1>Page Not Found: 404</h1></div>  
//         </body>
//         </html>
//         `)
//     }
//   })