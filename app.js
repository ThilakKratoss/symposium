var express =  require('express');
const passport = require('passport');
const path = require('path');
const mongoose = require('mongoose');
const userModel = require('./models/User');
var app = express();

//require('./config/passport');

//DB config
const db = require('./config/database');


//monggose connection 

mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI)
  .then(()=>console.log('mongodb connected'))
  .catch(err => console.log(err));

  //body parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.get('/',function(req,res){
// //    res.json({
// //        firstname : "the god liander"
// //    });
// res.send('the god praveen');
// });

app.post('/', (req,res) => {
   let newData = {
     name : req.body.name,
     collegeName : req.body.collegeName,
     email:req.body.email,
     phonenumber:req.body.phonenumber,
   }
   userModel.create(newData)
   .then((data) => res.json(data))
   .catch((err) => console.log(err));


});





const port = process.env.port || 3002;

app.listen(port);
console.log("port connected successfully");

