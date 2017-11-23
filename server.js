
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const port = 8000;
const dbUrl = 'mongodb://pipette307:bgvjhxtq@ds157185.mlab.com:57185/tatarchat';
const MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect(dbUrl,(err, database) => {
  if (err) return console.log("Error connecting to Mongo");
  db = database;
  app.listen(port, () => {
    console.log("Server is running on port: " + port);
  })
});

app.use(bodyParser.urlencoded({extended: true}))

app.post('/postmessage', (req, res) => {
  db.collection('messages').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved message to database');
    res.redirect('http://localhost:3000/');
  })
})

app.get('/messages', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  db.collection('messages').find().toArray((err, result) => {
    if (err) return console.log(err)
      res.send(result);
  });
  
});

