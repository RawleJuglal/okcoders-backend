var express = require('express');
var router = express.Router();
var Emails = require('../models/emails.js');

/* GET emails listing. */
router.get('/', function(req, res, next) {
    Emails
        .find()
        .limit(1)
        .exec(function(err, data){
           if(err)  
                {
                    res.send('DB ERROR!')
                }
            else
                {
                    res.json(data);
                }
        });
});


router.get('/:sender', function(req, res, next) {
    Emails
        .where('sender')
        .regex(new RegExp(req.params.sender, 'i'))
        .limit(1)
        .exec(function(err, data){
           if(err)  
                {
                    res.send('DB ERROR!')
                }
            else
                {
                    res.json(data);
                }
        });
});
module.exports = router;
