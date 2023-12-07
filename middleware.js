const express = require("express");
const app = new express()
app.use((req,resp,next)=>
{
resp.status(200).json({message:"Mukul Here "})
});

module.exports = app;