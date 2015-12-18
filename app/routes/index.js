//  TODO: http://start.jcolemorrison.com/quick-tip-organizing-routes-in-large-express-4-x-apps/

var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

/* GET Home page. */
router.get('/logo', function(req, res, next) {
  res.render('logo', {});
});

module.exports = router;
