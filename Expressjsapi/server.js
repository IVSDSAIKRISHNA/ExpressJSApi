const express= require("express")

const app = express()

app.use(express.static("public"))

app.set("view engine","ejs")
// app.get("/", (req,res) => {

//     res.render("index")
// })

app.get("/status",(req,res)=>{
    res.sendStatus(415)
})

const router = require("./routes/user")
app.use("/user",router)

app.listen(3000)