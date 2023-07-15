const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/" , function(req,res){
    res.sendFile(  __dirname + "/index.html");
})
app.get("/bmicalculator" , function(req,res){
    
    res.sendFile(  __dirname + "/bmiCalculator.html");
})
app.post("/bmicalculator" , function(req,res){
    var aww = req.body.w;
    var asw = req.body.h;
    var ans = (Number(aww) * 100 )/ (Number(asw)*Number(asw));
    res.send("Your BMI is :" + ans);
})
app.listen(3000,function(){
    console.log("server started at localhost 3000")
})
app.post("/" , function(req,res){
    var aww = req.body.num1;
    var asw = req.body.num2;
    var ans = Number(aww)  + Number(asw);
    res.send("Result :" + ans);
})