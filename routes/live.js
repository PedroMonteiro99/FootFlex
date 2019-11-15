var express = require('express');
var router = express.Router();

var liveGames = [
 {home:"A", away:"B", time:"01:00:00"}
];

router.get('/', function(req, res, next) {
   res.send(liveGames);
});

module.exports = router;
