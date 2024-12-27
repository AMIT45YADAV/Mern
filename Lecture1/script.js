const express = require('express')
const app = express();

app.set("view engine","ejs");
app.use(express.static('./public'));

// app.get('/',function(req,res){
//   res.send("Hello world")
// })
// app.get('/profile',function(req,res){
//   res.send("Hello from profile")
// })

app.get('/',function(req,res){
  res.render('index')
})

app.get('/error',function(req,res){
 throw Error("Something went wrong")
})

app.get('/contact',function(req,res){
  res.render('contact')
})
// app.get('/profile/:username',function(req,res){
//   res.send(`Hello from ${req.params.username}`)
// })

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000)