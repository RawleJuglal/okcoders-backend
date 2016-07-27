var cheerio = require('cheerio')
var html = require('./sample.js')

var body = cheerio.load(html)
//console.log(body.html())

var accountNumber = body('font:contains("Account #:")');
console.log(accountNumber);