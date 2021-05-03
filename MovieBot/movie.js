var express = require('express');
var app = express();
const fs=require('fs');

app.route('/text1').get(function(req,res,next){
console.log("testing purpose");
//res.json({result: 'result for text1 for testing purpose'});
var contents =fs.readFileSync("C:/Users/53309/Desktop/SP/MovieBot/movie.json");
var jsonContent = JSON.parse(contents);
//req.Question = req.params.txt;
const datafile = req.query.input;
console.log(datafile);

var str = datafile;
let token =str.slice(
    str.lastIndexOf(' ') + 1
);
console.log(token,"token printing in microservices")
var words = datafile.split(" ");
console.log(words);
 var a = words[0]+' '+words[1]
 console.log(a);
//res.json(jsonContent);


 const db1 = contents.toString();
 var jsonObj = JSON.parse(db1);


var jsonObj2 = jsonObj.id;
            console.log(jsonObj2);
            //var jsonStr = JSON.stringify(jsonObj);
            var jsonStr2 = JSON.stringify(jsonObj2);
            if (jsonStr2.includes(datafile)) {
                console.log("it is working fine");
                res.json("Yeah, south inidan movies are really intresting to watch!"+"<html><br></html>"+"five distinct film industries of Tollywood (Telugu), Kollywood (Tamil), Mollywood (Malayalam), Sandalwood (Kannada) and Tulu Cinema, as a single entity.");
            }
            
var jsonObj3 = jsonObj.movie_suggestion;
console.log(jsonObj3);
//var jsonStr = JSON.stringify(jsonObj);
var jsonStr3 = JSON.stringify(jsonObj3);
if (jsonStr3.includes(a)) {
    console.log("it is working fine");
    res.json("Please watch recent hits from tolloywood "+"<br><li>Bhubali</li><li>Bigil</li><li>Master</li><li>KGF</li>"+"<br>Top movies from Bolloywood:<li>Chichore</li><li>Gunjan Saxena: The Kargil Girl</li><li>Shakuntala Devi</li><br>Animated movies:<li>Ratatouille</li><li>Frozen</li><li>The Lion</li>");
}
var jsonObj5 = jsonObj.NationalAwardWinning;
            console.log(jsonObj5);
            //var jsonStr = JSON.stringify(jsonObj);
            var jsonStr5 = JSON.stringify(jsonObj5);
            if (jsonStr5.includes(datafile)) {
                console.log("it is working fine");
                
                res.json("list of national award winning movies are: <li>1.Best Feature hindhi Film Award went to Sushant Singh Rajput’s Chhichhore </li>" + "<li>2.Best Feature Film: Marakkar: Arabikadalinte Simham</li> \r\n" + "<li>3.Best Editing film: Jersey (Telugu)</li>");
            }
next();
});
var server = app.listen(8081,function() {});