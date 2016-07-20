var express = require('express');
var router = express.Router();
var Emails = require('../models/emails'); 
/* GET home page. */

//Simple get all data and return json
router.get('/', function(req, res, next) {
  Emails
    .find()
    .limit(10)
    .exec(function(err, data) {
      if (err) {
        res.send('error!')
      } else {
        res.json(data)
      }
    })
})

//Two params are needed in the url localhost:3000/:id/:name
//Allows you to change the sender through the url
router.put('/:id/:name', function(req, res, next) {
  Emails
    .where('_id').equals(req.params.id)
    .update({$set: {sender: req.params.name}})
    .exec(function(err, data) {
      if (err) {
        res.send('error!')
      } else {
        res.json(data)
      }
    });
});

//localhost:3000/:id with a delete call will remove data at that id
router.delete('/:id', function(req, res, next) {
  Emails
    .where('_id').equals(req.params.id)
    .remove()
    .exec(function(err, data) {
      if (err) {
        res.send('error!')
      } else {
        res.json(data)
      }
    });
});

//localhost:3000/:id will find the data matching that id and send back data
router.get('/:id', function(req, res, next) {
  Emails
    .where('_id').equals(req.params.id)
    .exec(function(err, data) {
      if (err) {
        res.send('error!')
      } else {
        res.json(data)
      }
    });
});

//localhost:3000/:id post a new document into the collection with the information in this route
router.post('/:sender', function(req, res, next) {
  var email = new Emails({sender: req.params.sender})
  email.text = 'hello!'
  email.save(function(err, data) {
    if (err) {
      res.send('error!')
    } else {
      res.json(data)
    }
  });
});

module.exports = router;
