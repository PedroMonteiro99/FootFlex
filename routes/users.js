var express = require('express');
var router = express.Router();

//Exemplo
var users = [
  { name: "João",
    plan: {type: "Liga", sport: "Football", league: "Liga NOS"}}
];

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send(users[req.params.id]);
});

module.exports = router;
