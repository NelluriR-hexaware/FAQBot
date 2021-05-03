const fs=require('fs');
// routes/things.js routing file
"use strict";
const express = require("express");
let router = express.Router();

router.use(function(req, res, next) {
  console.log(req.url, "@", Date.now());
  res.setHeader("Content-Type", "text/html");
  next();
});

router
  .route("/:name")
  .get((req, res) => {
    ///things/cars
    var contents =fs.readFileSync("C:/Users/53309/Desktop/FABoT/route/movie.json");
    var jsonContent = JSON.parse(contents);
    console.log(jsonContent);
    
    const datafile = req.params.name;
    const db1 = contents.toString();
var jsonObj = JSON.parse(db1);

var jsonObj1 = jsonObj.hi;
console.log(jsonObj1);
//var jsonStr = JSON.stringify(jsonObj);
var jsonStr1 = JSON.stringify(jsonObj1);
if (jsonStr1.includes(datafile)) {
   console.log("it is working fine");
   res.send("Hello ,how are you doing!!");
}
var jsonObj2=jsonObj.id;
console.log(jsonObj2);
//var jsonStr = JSON.stringify(jsonObj);
 var jsonStr2 = JSON.stringify(jsonObj2);
 if(jsonStr2.includes(datafile)){
    console.log("it is working fine");
    res.send("Yeah, south inidan movies are really intresting to watch!");
}

var jsonObj3=jsonObj.suggestion;
console.log(jsonObj3);
//var jsonStr = JSON.stringify(jsonObj);
 var jsonStr3 = JSON.stringify(jsonObj3);
 if(jsonStr3.includes(datafile)){
    console.log("it is working fine");
    res.send("Please watch recent hits from tolloywood and Bhahubali");
}
var jsonObj4=jsonObj.bye;
console.log(jsonObj4);
//var jsonStr = JSON.stringify(jsonObj);
 var jsonStr4 = JSON.stringify(jsonObj4);
 if(jsonStr4.includes(datafile)){
    console.log("it is working fine");
    res.send("Yup,had a nice day . see you soon ");
}
var jsonObj5=jsonObj.NationalAwardWinning;
console.log(jsonObj5);
//var jsonStr = JSON.stringify(jsonObj);
 var jsonStr5 = JSON.stringify(jsonObj5);
 if(jsonStr5.includes(datafile)){
    console.log("it is working fine");
    res.send("list of national award winning movies are: 1.Best Feature hindhi Film Award went to Sushant Singh Rajput’s Chhichhore "+"2.Best Feature Film: Marakkar: Arabikadalinte Simham \r\n"+"3.Best Editing film: Jersey (Telugu)");
}
else{
    res.send("sorry,not understand please try again");
}

      //res.send("hello how are you");
    //res.send("hi get /things/cars");
  });
  module.exports = router;