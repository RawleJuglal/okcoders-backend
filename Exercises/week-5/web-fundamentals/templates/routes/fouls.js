var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
  console.log('quack');
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Working with foul');
});

router.get('/chicken', genericCallback)
  .post('/chicken', postCallback)
  .put('/chicken', putCallback)
  .delete('/chicken', deleteCallback);

router.get('/duck/:id', duckIDCallback);
router.get('/duck/:id/:temp', duckTempCallback);

function genericCallback(req, res, next){
  res.send('This is the genericCallback');
}

function postCallback(req, res, next){
  res.send('You\'ve asked for the postCallback');
}

function putCallback(req, res, next){
  res.send('You would like to update with putCallback');
}

function deleteCallback(req, res, next){
  res.send('Do you really want to delete this chicken');
}

function duckIDCallback(req, res){
  res.send(req.params.id);
}

function duckTempCallback(req, res, next){
  res.send(req.params.id + ' ' + req.params.temp);
}

module.exports = router;
