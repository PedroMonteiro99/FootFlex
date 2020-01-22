var express = require('express');
var router = express.Router();
var usersDAO = require('../models/userDAO');

router.get('/', function (req, res, next) {
  usersDAO.getClientes(function (result) {
    res.send(result);
  });
});

router.get('/details', function (req, res, next) {
  usersDAO.getUserDetails(function (result) {
    res.send(result);
  });
});

router.put('/updateClient', function (req, res, next) {
  usersDAO.updateUserDetails(req.body, function (result) {
    res.send(result);
  });
});

module.exports = router;
