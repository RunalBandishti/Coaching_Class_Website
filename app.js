var express = require("express");
var app =  express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use( express.static('public'));


app.get("/",function(req,res){
    res.render("landing");
});

app.get("/courses",function(req,res){
    res.render("courses");
});

app.get("/courses/web",function(req,res){
    res.render("web");
});

app.get("/courses/prep",function(req,res){
    res.render("prep");
});

app.get("/courses/python",function(req,res){
    res.render("python");
});




//Tell Express to listen for requests (start server)
app.listen(process.env.PORT || 3000,function(){
    console.log("The Server Has Started!!!");
});