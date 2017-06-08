//  TODO: http://start.jcolemorrison.com/quick-tip-organizing-routes-in-large-express-4-x-apps/

var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

/* GET Patterns */
router.get('/touch-animations', function(req, res, next) {
  res.render('touch-animations', {});
});

router.get('/scene-2', function(req, res, next) {
  res.render('scene-2', {});
});

module.exports = router;
