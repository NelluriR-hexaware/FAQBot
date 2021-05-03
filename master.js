const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  jwt = require('jsonwebtoken'),
  config = require('./configurations/config'),
  app = express();
const request = require('request');
const ProtectedRoutes = express.Router();
require("dotenv").config();

//set secret
app.set('Secret', config.secret);

// use morgan to log requests to the console
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
const posts = [
  { username: 'Ramu', password: 'post123' },
  { username: 'Nandhu', password: 'post111' }]

app.post('/login', (req, res) => {
  //auth purpose
  const username = req.body.username;
  const user = { name: username }
  const accesToken = jwt.sign(user, process.env.ACCCESS_TOKEN_SECRET)
  //res.json({accesToken:accesToken});
  res.json({
    message: 'authentication done ',
    accesToken: accesToken
  });
})

// app.post('/people/login',(req,res)=>{
//     const user = {
//         username : 'Ramu',
//         password : '53309'
//     }
//     jwt.sign({user},'secretkey',(error,token)=>{
//         res.json({
//             token
//         });
//     });
// });


app.use('/api', ProtectedRoutes);



// ProtectedRoutes.use('/:txt', (req, res, next) => {
//   console.log(req.params.txt)
//   req.input = req.params.txt
//   const authHeader = req.headers['authorization']
//   const token1 = authHeader && authHeader.split(' ')[1]
//   var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFtdSIsImlhdCI6MTYxOTc2MDc2Nn0.AfkI1tvcUE_Eu6w95SbQD2KAH5QbbHGG4sEebxuaGEQ"
//   if (token == null) return res.send(401 + "hellooooooo") + res.end()
//   console.log(token);
//   if (token) {
//     jwt.verify(token, process.env.ACCCESS_TOKEN_SECRET, (err, user) => {
//       if (err) return res.sendStatus(403) + res.end()
//       req.user = user
//       console.log(req.user)
//       console.log("cheking for protectin")
//       //sampleserv();
//       const statictoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFtdSIsImlhdCI6MTYxOTc2MDc2Nn0.AfkI1tvcUE_Eu6w95SbQD2KAH5QbbHGG4sEebxuaGEQ"
//       console.log(statictoken)
//       if (token === statictoken) {
//         console.log(1)
//         if (req.input.includes('Dance')) {
//           const url = 'http://localhost:8083/text3?input=' + req.input + " " + token;
//           request(url, function (err, response, body) {
//             console.log('Dance if--->', req.input);
//             if (err) console.log(err);
//             let json = JSON.parse(body);
//             console.log(json)
//             console.log("print error here")
//             res.json(json);
//             console.log("response is not printing")
//             res.end()

//           });
//         }

//         else {
//           res.send("not found");
//         }

//       }
//       next()
//     })

//   }

//   else {
//     res.send({
//       message: 'No token provided.'
//     });

//   }
// });
app.get('/api2/:id/:txt', function (req, res) {
  console.log(req.params.id)
  console.log(req.params.txt)
  req.input = req.params.txt
 // const authHeader = req.headers['authorization']
  //const token1 = authHeader && authHeader.split(' ')[1]
  var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFtdSIsImlhdCI6MTYxOTc2MDc2Nn0.AfkI1tvcUE_Eu6w95SbQD2KAH5QbbHGG4sEebxuaGEQ"
  if (token == null) return res.send(401 + "hellooooooo") + res.end()
  console.log(token);
  console.log("hello id",req.params.id)
  if(req.params.id === "53309"){
  if (token) {
    
  
    jwt.verify(token, process.env.ACCCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403) + res.end()
      req.user = user
      console.log(req.user)
      console.log("cheking for protectin")
      //sampleserv();
      const statictoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFtdSIsImlhdCI6MTYxOTc2MDc2Nn0.AfkI1tvcUE_Eu6w95SbQD2KAH5QbbHGG4sEebxuaGEQ"
      console.log(statictoken)
      if (token === statictoken) {
        console.log(1)
        if (req.input.includes('Dance')) {
          const url = 'http://localhost:8083/text3?input=' + req.input +" "+ token;
          request(url, function (err, response, body) {
            console.log('Dance if--->', req.input);
            if (err) console.log(err);
            let json = JSON.parse(body);
            console.log(json)
            console.log("print error here")
            res.json(json);
            console.log("response is not printing")
            res.end()

          });
        } else if (req.input.includes('movies')) {
          const url = 'http://localhost:8081/text1?input=' + req.input +" "+ token;
          request(url, function (err, response, body) {
            console.log('movies if--->', req.input);
            console.log(token,"its passing")
            if (err) console.log(err);
            let json = JSON.parse(body);
            console.log(json)
            console.log("print error here")
            res.json(json);
            console.log("response is not printing")
            res.end()

          });
        }else if(req.input.includes('flowers')){
          console.log("flowers bot testing")
          const url='http://localhost:8082/text2?input='+req.input+" "+token;
          request(url,function(err,response,body){
            console.log('flowers if--->',req.input);
              if(err) console.log(err);
            let json=JSON.parse(body);
            res.send(json);
            
          });
      }
        else {
          res.send("not found");
        }

      }else{
        res.json("unautorized token is nor matched")
      }
     // next()
    })

  }

  else {
    res.send({
      message: 'No token provided.'
    });

  }}else{
    console.log("empid not authorized")
    res.json("empid not authorized")
  }
  //   res.send('Hello world  app is running on http://localhost:3004/');
 });

app.listen(3001, () => {

  console.log('server is running on port 3001')

});
app.get('/', function (req, res) {
  res.send('Hello world  app is running on http://localhost:3001/');
});
