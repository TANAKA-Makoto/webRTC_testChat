var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Self Camera' });
});
/* GET manual signal page*/
router.get('/manual', function(req, res, next){
  res.render('manual', {title: 'Manual signal'});
});
module.exports = router;