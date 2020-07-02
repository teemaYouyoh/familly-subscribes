var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  cors = require('cors'),
  mongoose = require('mongoose'),
  Groups = require('./api/models/subscribesGroupsModel'), //created model loading here
  Users = require('./api/models/usersListModel'), //created model loading here
  bodyParser = require('body-parser');
  
  // app.use(function (req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //   next();
  // });

  app.use(cors())
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/familly-subscribes');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/index'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });