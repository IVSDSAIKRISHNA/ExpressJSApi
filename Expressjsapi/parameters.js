const express= require("express")
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Retrieving the data using the query method, this is useful when working with small parameters and getting them from the url 


app.get('/api/users', function(req, res) {
    const id = req.query.id;
    const token = req.query.token;
    const geo = req.query.geo;
  
    res.send({
      'id': id,
      'token': token,
      'geo': geo
    });
  });


  app.put('/api/users', function(req, res) {
    const id = req.query.id;
    const token = req.query.token;
    const geo = req.query.geo;
  
    res.send({
      'id': id,
      'token': token,
      'geo': geo
    });
  });
  app.delete('/api/users', function(req, res) {
    const id = req.query.id;
    const token = req.query.token;
    const geo = req.query.geo;
  
    res.send({
      'id': id,
      'token': token,
      'geo': geo
    });
  });

  app.post('/api/users', function(req, res) {
    const id = req.query.id;
    const token = req.query.token;
    const geo = req.query.geo;
  
    res.send({
      'id': id,
      'token': token,
      'geo': geo
    });
  });



  // Retrieving the parameters using the params from the url 

  app.get('/api/:version', function(req, res) {
    res.send(req.params.version);
  });


  // Using the .param route , just like a middleware

  app.param('name', function(req, res, next, name) {
    const modified = name.toUpperCase();
  
    req.name = modified;
    next();
  });
  
  // routes will go here
  // ...
  
  app.get('/api/users/:name', function(req, res) {
    res.send('Hello ' + req.name + '!');
  });



  //using the body for the Post Request  data can be sent through the body through the json format also 
  // for more reference https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters

  app.post('/api/users/posting', function(req, res) {
    const user_id = req.body.id;
    const token = req.body.token;
    const geo = req.body.geo;
  
    res.send({
      'user_id': user_id,
      'token': token,
      'geo': geo
    });
  });

app.listen(3000)