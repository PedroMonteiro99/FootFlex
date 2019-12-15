var express = require('express');
var router = express.Router();
var usersDAO = require('../models/userDAO');

router.get('/', function (req, res, next) {
  usersDAO.getClientes(function (result) {
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

router.post('/register', function (req, res, next) {
  usersDAO.register(req.body, function (result) {
    res.send(result);
  });
});

router.post('/pacote', function (req, res, next) {
  usersDAO.pacote(req.body, function (result) {
    res.send(result);
  });
});

router.put('/credit', function (req, res, next) {
  usersDAO.updateCredit(req.body, function (result) {
    res.send(result);
  });
});

router.post('/check', function (req, res, next) {
  usersDAO.checkValues(req.body, function (status,result) {
    if (status.code == 200)
      res.send(result);
    else {
      res.statusMessage = status.status;
      res.status(status.code).send({});
    }
  });
});

module.exports = router;
