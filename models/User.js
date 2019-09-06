const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//cretae a schema
const UserSchema = new Schema({
name:{
  type:String,
  required:true
},
collegeName:{
type:String,
required:true
},
email:{
type:String,
required:true
}, 
phonenumber:{
type:Number,
required:true
},
date:{
  type:Date,
  default:Date.now
}
}); 
 const model = mongoose.model('users',UserSchema); 

 module.exports = model;