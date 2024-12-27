// -----------------------Mongodb-mongoose---------------------

const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro")

// schema mtlb aapko ye batana banne vla har document me kya kya hoga 

const userschema =new mongoose.Schema({
  username: String,
  name:String,
  age:Number
})

// mongoose.Model(naam, Schema)
const User = mongoose.model("User", userschema)
module.exports = User;



