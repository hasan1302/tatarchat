
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./src/db');
const app            = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
let a = {'hello': 'doc'};

/*
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  require('./routes')(app, database);
  database.collection('notes').insertOne(
    {
      title: 'Hello MongoDB',
      text: 'Hopefully this works!'
    }
  )
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });     
})

*/



