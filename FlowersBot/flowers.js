var express = require('express');
var app = express();
const fs = require('fs');

app.route('/text2').get(function (req, res, next) {
    console.log("testing purpose");
    //res.json({result: 'result for text1 for testing purpose'});
    var contents = fs.readFileSync("C:/Users/53309/Desktop/SP/FlowersBot/flowers.json");
    var jsonContent = JSON.parse(contents);
    //req.Question = req.params.txt;
    const datafile = req.query.input;
    console.log(datafile);
    
var str = datafile;
let token =str.slice(
    str.lastIndexOf(' ') + 1
);
console.log(token,"token printing in flowers microservices")
var words = datafile.split(" ");
console.log(words);
 var a = words[0]+' '+words[1]
 console.log(a);
    //res.json(jsonContent);
    const db1 = contents.toString();
    var jsonObj = JSON.parse(db1);
    var jsonObj3 = jsonObj.flowers_suggestion;
    console.log(jsonObj3);
    //var jsonStr = JSON.stringify(jsonObj);
    var jsonStr3 = JSON.stringify(jsonObj3);
    var jsonObj2 = jsonObj.get_delivery;
    console.log(jsonObj2);
    //var jsonStr = JSON.stringify(jsonObj);
    var jsonStr2 = JSON.stringify(jsonObj2);
    if (jsonStr3.includes(a)) {
        console.log("it is working fine");
        res.json("we have lot of flowers:choose from them:<li>Red roses</li><li>white roses</li><li>lotus</li><li>boquet of yellow roses </li><li>Tulips, Orchids</li>");
    }
   
else if (jsonStr2.includes(datafile)) {
        console.log("it is working fine");
        res.json("Yeah, i will delivery the flowers so please contact me:928979636");
    }
    else {
        res.json("sorry not understand.please try agin");
    }
    next();
});
var server = app.listen(8082, function () { });