const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true }))
// app.listen(2000,function(){
//   console.log(Calculator Server started on port 2000 );
// });

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var ans= num1 +num2;
  res.send("The answer is "+ ans);
  console.log(req.body);

  //res.send("Thanks for posting that");
});
app.listen(2000,function(){
  console.log("Calc server started on port 2000");
});

app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
  var height =parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi = weight/(height*height);
  res.send("Your BMI is "+ bmi);
});
