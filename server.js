//import $ from 'jquery';
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
  res.header("Access-Control-Allow-Origin", "*");
  db.collection('messages').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved message to database');
    //res.redirect('http://localhost:3000/');
  })
})

app.get('/messages', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  db.collection('messages').find().toArray((err, result) => {
    if (err) return console.log(err)
      res.send(result);
  });
});


app.post('/register', (req, res) => {
    db.collection('users').find({login: req.body.login}).toArray((err, result) => {
      if (result.length < 1) { // if login doesnt exist true
        db.collection('users').save(req.body, (err, result) => {
          if (err) return console.log(err);
          console.log('registered!');
        })
      } else{ 
        console.log("exist");
      }
    });
})

app.post('/login', (req, res) => {
  db.collection('users').find({login: req.body.login, password: req.body.password}).toArray((err, result) => {
    if (result.length > 0) { 
      console.log("logined")
    } else{ 
      console.log("Wrong Password");
    }
  });
})

app.post('/changepassword', (req, res) => {
  db.collection('users').find({login: req.body.login, password: req.body.password}).toArray((err, result) => {
    console.log(result);
    if (result.length > 0) { 
      db.collection('users').update( { login: req.body.login  } , { $set: { password: req.body.newpassword } } );
      console.log("password changed");
    } else{ 
      console.log("Wrong Password");
}
    

    //if (result.length > 0) { 

   // } else{ 
     // console.log("Wrong Password");
   // }

  //  db.collection('users').update({result});
 // console.log(result[0].password + " " + req.body.password);
   // if (result.password === req.body.password)

   // if (result.length > 0) { 
   //   db.collection('users').update({password: req.body.password});
   // } else{ 
   //   console.log("Wrong Password");
   // }
  });
})


app.post('/login2', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  //if (db.users.find( { "Login": req.body } ) {
  db.collection('users').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('registered!');
    //res.redirect('http://localhost:3000/');
  })
//};

})

app.get('/login3', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  db.collection('users').find().toArray((err, result) => {
    if (err) return console.log(err)
      res.send(result);
  });
});
