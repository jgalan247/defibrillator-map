// Set express as Node.js web application 
// server framework. 
// To install express before using it as 
// an application server by using 
// "npm install express" command. 
import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import ejs from 'ejs';

const app = express(); 


app.get('/', (req, res) => { 

  // The render method takes the name of the html 
  // page to be rendered as input. 
  // This page should be in views folder 
  // in the root directory. 
  let data = { 
    name: 'Akashdeep', 
    hobbies: ['playing football', 'playing chess', 'cycling'] 
  } 

  res.render('index', { data: data }); 
}); 


const server = app.listen(4000, function () { 
  console.log('listening to port 4000') 
});
// Set EJS as templating engine 
app.set('view engine', 'ejs');