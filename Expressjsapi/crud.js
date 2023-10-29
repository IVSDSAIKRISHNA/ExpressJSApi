const express= require("express")
const fs=require("fs")
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let jsonData = JSON.parse(fs.readFileSync('userdata.json'));

function saveData() {
    fs.writeFileSync('userdata.json', JSON.stringify(jsonData, null, 2), 'utf8');
  }

app.get("/users/getallusers",(req,res)=>{
 
    //Route which renders all the users
    res.send(jsonData)
})

app.get("/users/getuser/:id",(req,res)=>{
    const userId = parseInt(req.params.id);
    const user = jsonData.find(user => user.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
})

app.post("/users/adduser",(req,res)=>{
    const newuser=req.body
    jsonData.push(newuser);
    saveData();
    res.send(jsonData)
})

app.put("/users/edituser/:id",(req,res)=>{
const userId=parseInt(req.params.id);
const userIndex=jsonData.findIndex(user => user.id == userId)
const previousId=jsonData[userIndex].id
user={
    "id":`${previousId}`,
    "name":`${req.body.name}`,
    "email": `${req.body.email}`,
    "phone": `${req.body.phone}`,
    "password": `${req.body.password}`
}
jsonData[userIndex]=user
saveData();
res.send(req.body)

})

app.delete("/users/deleteuser/:id",(req,res)=>{
  const userId=parseInt(req.params.id);
  const userIndex=jsonData.findIndex(user => user.id == userId);
  if(userIndex!=-1){
  const deletedUser=jsonData.splice(userIndex,1);
  saveData();
  res.json(deletedUser);
  res.end()
  }
  else{
    res.status(404).send("User Not Found")
  }

})

app.put("/sample",(req,res)=>{
    console.log(req.query.id)
    res.end()
})

app.listen(3000)