const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{

    res.send("User Route is Working")
})


router.get("/new",(req,res)=>{
    res.send("New user is working")
})

router.get("/:userId",(req,res)=>{
console.log(req.customobject)
res.write(`Getting the user with ${req.params.userId} and he is ${req.customobject}`)
res.end()
})

 const users=["First Element","Second Element","Third Element"]

router.param("userId",(req,res,next,userId)=>{
    req.customobject=users[userId] 
    next()
})

module.exports=router