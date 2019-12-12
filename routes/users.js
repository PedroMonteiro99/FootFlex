var express = require('express');
var router = express.Router();
var usersDAO = require('../models/userDAO');

router.get('/', function (req, res, next) {
  usersDAO.getMaxId(function (result) {
    res.send(result);
  });
});

router.post('/login', function (req, res, next) {
  usersDAO.login(req.body, function (status, result) {
    if (status.code == 200)
      res.send(result);
    else {
      res.statusMessage = status.status;
      res.status(status.code).send({});
    }
  });
});

router.get('/authentication', function (req, res, next) {
  usersDAO.authentication(function (result) {
    res.send(result);
  });
});

router.get('/details', function (req, res, next) {
  usersDAO.getUserDetails(function (result) {
    res.send(result);
  });
});

module.exports = router;
