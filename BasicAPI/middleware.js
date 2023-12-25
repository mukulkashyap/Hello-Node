const express = require("express");
const app = new express();

app.get("/users", (req, resp) => {
    resp.send("user Api Requested");
});
app.get("/",(req,resp)=>{
    resp.status(200).send("Welcome To Node Application");
})

module.exports = app;
