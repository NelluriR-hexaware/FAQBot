var express = require('express');
var app = express();
const fs=require('fs');

app.route('/text3').get(function(req,res,next){
console.log("testing purpose");
//res.json({result: 'result for text1 for testing purpose'});
var contents =fs.readFileSync("C:/Users/53309/Desktop/SP/DanceBot/dance.json");
var jsonContent = JSON.parse(contents);
console.log(jsonContent);
//req.Question = req.params.txt;
const datafile = req.query.input;
//console.log("dance micro service here",req.token+" ")
console.log(datafile,"hello cheking here");

var str = datafile;
let token =str.slice(
    str.lastIndexOf(' ') + 1
);
console.log(token,"token printing in microservices")
var words = datafile.split(" ");
console.log(words);
 var a = words[0]+' '+words[1]
 console.log(a);





let ab1=datafile.split(' ')[0]
console.log(ab1,"its a request param")

//res.json(jsonContent);
const db1 = contents.toString();
var jsonObj = JSON.parse(db1);

var jsonObj2 = jsonObj.classical_dances;
console.log(jsonObj2);
//var jsonStr = JSON.stringify(jsonObj);
var jsonStr2 = JSON.stringify(jsonObj2);
if (jsonStr2.includes(datafile)) {
    console.log("it is working fine");
    res.json("Yeah, i will teach you dance so please visit my dance studio");
}
var jsonObj3 = jsonObj.Dance_suggestion;
console.log(jsonObj3);
//var jsonStr = JSON.stringify(jsonObj);
if(token){
var jsonStr3 = JSON.stringify(jsonObj3);
if (jsonStr3.includes(a)) {
    console.log("it is working fine");
    res.json("Dances Forms are availble here:choose the most you liked-><li>1.Western</li><li>Hiphup</li><li>BreakDance</li><li>Ballet</li><li>Salsa</li><br>2.Classical Dances<br><li>Bharathanatyam</li><li>Kathak</li><li>Khuchupudi</li><li>kathak</li><br>3.Folk dance<br><li>Bhangra</li><li>Kolatam</li><li>Ghumar</li><li>Gabra</li><li>Gussadi</li></li>");
    res.end()
}
}


next();
});
var server = app.listen(8083,function() {});