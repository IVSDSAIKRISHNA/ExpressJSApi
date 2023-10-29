const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON data from the request body
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send("Hello welcome")
})
// Define a route to handle POST requests to the /data endpoint
app.post('/data', (req, res) => {
  // Get JSON data from the request body
  const jsonData = req.body;

  Object.keys(jsonData).forEach(element => {
    console.log(jsonData[element],element)
  });

console.log(typeof(jsonData));
  // Sending a response back
  res.send(jsonData);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
