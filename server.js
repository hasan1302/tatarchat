
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./src/db');
const app            = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log('We are live on ' + port);
}); 

let a =    {
  from: 'MongoDEBIL',
  text: 'Hopefully this works!',
  to: "Vov"
};

function insertInHistory(obj) {
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
 // require('./routes')(app, database);
  database.collection('notes').insertOne(obj)   
})

}


insertInHistory(a);



