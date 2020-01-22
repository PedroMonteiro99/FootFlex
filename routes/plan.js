var express = require('express');
var router = express.Router();
var planDAO = require('../models/planDAO');

router.post('/pacote', function (req, res, next) {
    planDAO.pacote(req.body, function (result) {
      res.send(result);
    });
});
  
router.put('/credit', function (req, res, next) {
    planDAO.updateCredit(req.body, function (result) {
      res.send(result);
    });
});
  
router.post('/check', function (req, res, next) {
    planDAO.checkValues(req.body, function (status,result) {
      if (status.code == 200)
        res.send(result);
      else {
        res.statusMessage = status.status;
        res.status(status.code).send({});
      }
    });
});

module.exports = router;