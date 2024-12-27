
// 

// module.exports -> export karne ka tarika
// require()     -> import karne ka tarila
// const catMe = require('cat-me')

// console.log(catMe())

// const http = require('http')

// const server = http.createServer((req,res)=>{
// console.log(req.url)
// res.end("hello world")

//   if(req.url == '/about'){
//     res.end("The About page")
//   }

//   if(req.url == '/profile'){
//     res.end("The Profile Page")
//   }

//   if(req.url == '/'){
//     res.end("The Home Page")
//   }
// })

// server.listen(3000)

// -------------------------EXPRESS-----------------------------------------

// Express vs node -> node is the main thing express ke code se hum server ka code lkh pate hai or server kaisa react karega vo bhi express ke help se lkhte hai

// what is express js-> package ,routing


const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))      //css setup

app.set("view engine", "ejs");


// --------------------------middleware-----------------------------------
// middleware -> MW ek aisa function hai jo kisi bhi route se pahle chlta hai, jiska matlb aapka route chlne se pahle agar aap koi kaam karna chahte ho to middleware ka upyog kiya jaa skta hai

// route pe chalne se pahle print karo chla on console
// route chalne se pahle route pe hits counter ki value badhao

// iska matlb route chalne se pahle jo change wo hai middleware
// sirf ek dikkat hai agar hamra middleware chal gya to request jam ho jati hai or route tak nhi pauchti pati then we used next in MW  -> next used in miidleware

// app.use((req,res,next)=>{
//   console.log('this is middleware')
//   return next()
// })


app.get(
  "/",
  (req, res, next) => {
    const a = 9;
    const b = 8;
    console.log(a + b);

    next();
  },
  (req, res) => {
    res.render("index");
  }
);


app.get("/about", (req, res) => {
  res.send("the about page");
});


// server se data frontend tak le jane ke liye
// app.get("/get-form-data",(req,res)=>{
//   console.log(req.query)
//   res.send('data received')
// })

// frontend se data mangane ke liye hoti hai
app.post("/get-form-data",(req,res)=>{
  console.log(req.body)
  res.send('data received')
})

app.listen(3000);
