// const http = require("http");
// const fs = require("fs");
// //importing url package with the help of npm i url 
// const myUrl = require('url');
// const myServer = http.createServer((req, resp) => {
//   const log = `${Date.now()}:This is a log of ${req.url}\n`;
//   const url = myUrl.parse(req.url,true);
//   console.log(url);
//   fs.appendFile("log.txt", log, (err, data) => {
//     //if we dont write the url route in the success of this function then there is a chance that the response will be ended first 
//     //By the below code and the file is not written. So we have to write in the success of this file 
//     switch (url.pathname) {
//       case "/":
//         resp.end("Hey From Server");
//         break;
//       case "/about":
//         resp.end("About is hit");
//         break;
//       case "/home":
        
//         resp.end(`Home is hit by ${url.query.name}`);
//         break;
//       default:
//         resp.end("404 not found");
//         break;
//     }
//   });
// });
// myServer.listen(8000, () => {
//   console.log("Server Started");
// });
//The above piece of code is handeled with using only node inbuilt features.Now we will learn how to use express for all this ugly looking code.
//The get post and all the url handling part express handles on its own 
//We have to create on handler and we have to listen to a port 

const http = require("http");
const express = require('express');

const app = express();

app.get("/",(req,resp)=>{resp.send("Hello Mukul")});
app.get("/about",(req,resp)=>{resp.send("Hello " + req.query.name)});
const myServer = http.createServer(app);
app.listen(8000,()=>{console.log("Hello Server Started")});
