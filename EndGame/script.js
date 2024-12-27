// express js setup 
// install✅
// express js bolierplate code ✅
    // go to npm
    // search express 
    // copy the code
    
// express js ejs setup✅
    // install ejs
    // set view engine
    // create views folder
    // create ejs files
    // render ejs files inside route
// express static files setup
// architecture of public folder 

// ------------Express js----------------------

const express = require('express')
const app = express()
const userModel = require('./user')

app.set("view engine","ejs")
app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.render('index')
})


// create 

// app.get('/create', async function (req, res) {
//   const createUser = await userModel.create({
//     username: "Amit",
//     name:"Amit",
//     age:22
//   })
//   res.send(createUser)
// })

// read

// app.get('/allusers',async function(req, res){
//   let allusers = await userModel.find();
//   res.send(allusers)
// })


// app.get('/allusers',async function(req, res){
//   let allusers = await userModel.findpne({username : "Amit"});
//   res.send(allusers)
// })

// delete 
app.get('/delete',async function(req, res){
    let deleteduser = await userModel.findOneAndDelete({
      username: "Amit"
    })
    res.send(deleteduser)
})

app.listen(3000)



