var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const child     = ['/self', '/manual', '/auto', '/trickle', '/self_Org'];
  const pageTitle = ['self camera echo',
                     'manual hand shake',
                     'auto hand shake',
                     'trickle hand shake',
                     'Self Camera Org'];
  res.render('index', { title: 'webRTC test', child: child, pageTitle:pageTitle});
});
/* GET camera echo page. */
router.get('/self', function(req, res, next) {
  res.render('self', { title: 'Self Camera' });
});
/* GET manual signal page*/
router.get('/manual', function(req, res, next){
  res.render('manual', {title: 'Manual signal'});
});
/* GET auto signal page*/
router.get('/auto', function(req, res, next){
  res.render('autoConnect', {title: 'Auto signal'});
});
/* GET trickle signal page*/
router.get('/trickle', function(req, res, next){
  res.render('autoConnect', {title: 'Trickle ICE signal'});
});
/* GET camera echo ORIGINAL page. */
router.get('/self_Org', function(req, res, next) {
  res.render('self', { title: 'Self Camera Org' });
});
module.exports = router;
