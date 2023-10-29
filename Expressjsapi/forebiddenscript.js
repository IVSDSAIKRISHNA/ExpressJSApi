const express = require('express')
const app = express()

app.get('/', function (req, res, next) {
  // res.write('<h1>Hello World</h1>')
  // res.json({"message":"Fuck you "})
  // res.download("script2.js")
  res.write("Hello")
  
  // next()
})

//Meant for testing the next function
app.get('/', function(req,res){
    res.write("Helllo from home")
    res.end()

})

app.get("/status",(req,res)=>{

  //used to only Send the status, and the cycle is closed here
//  res.sendStatus(500)
res.status(404).send("this is a godamm custom error")

})

app.listen(3000)