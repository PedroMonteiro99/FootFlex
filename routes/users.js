var express = require('express');
var router = express.Router();
var usersDAO = require('../models/userDAO');

router.get('/', function(req, res, next) {
  usersDAO.getAll(function(result){
    res.send(result);
  }); 
});

router.post('/login', function(req, res, next) {
  usersDAO.login(req.body,function(status,result){
    if (status.code == 200)
      res.send(result);
    else {
      res.statusMessage = status.status;
      res.status(status.code).send({});
    }
  }); 
});

module.exports = router;
