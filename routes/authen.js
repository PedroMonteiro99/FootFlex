var express = require('express');
var router = express.Router();
var authenDAO = require('../models/authenDAO');

router.post('/login', function (req, res, next) {
  authenDAO.login(req.body, function (status, result) {
    if (status.code == 200)
      res.send(result);
    else {
      res.statusMessage = status.status;
      res.status(status.code).send({});
    }
  });
});

router.get('/authentication', function (req, res, next) {
  authenDAO.authentication(function (result) {
    res.send(result);
  });
});

router.post('/register', function (req, res, next) {
  authenDAO.register(req.body, function (result) {
    res.send(result);
  });
});

module.exports = router;