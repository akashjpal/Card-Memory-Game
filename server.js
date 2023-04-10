const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const bodypar = require('body-parser');
app.use(bodypar.urlencoded({extended : true}));


app.listen(3000);
app.get("/", function(req,res){
  res.sendFile(__dirname+"/login.html");
})
app.post("/", function(req, res){
  var email= req.body.mail;
  var passw = req.body.pass;
  console.log(passw);
})
