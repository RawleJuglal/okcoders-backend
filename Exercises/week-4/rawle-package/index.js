var okm = require('ok-coders-back-end-example');
var lodash = require('lodash');

okm.hello();

okm.forEach(['oh','my','gosh'], function(i){
    console.log(lodash.capitalize(i));
});