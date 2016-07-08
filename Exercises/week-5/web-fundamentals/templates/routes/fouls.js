var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Working with foul');
});

router.get('/chicken', genericCallback)
  .post('/chicken', postCallback)
  .put('/chicken', putCallback)
  .delete('/chicken', deleteCallback);

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
module.exports = router;
