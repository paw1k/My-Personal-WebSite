//jshint esversion:6


const express = require("express");
const path = require('path');
const jsdom = require('jsdom');



const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
var doc = global.document || document;

$ = require('jquery')(new jsdom.JSDOM().window);



const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/homepage.html");

});


app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000.");
});
