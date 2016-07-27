var cheerio = require('cheerio')
var _ = require('lodash');
var html = require('./sample.js')

var body = cheerio.load(html)
//console.log(body.html())

function getAccountNumber(){
    var accountNumbers = body('font:contains("Account #:")');

    var parsedAccountNumber =  _.map(accountNumbers, accountNumber=>{
        var parseAccountNumber = _.trim(accountNumber.parent.prev.parent.next.next.children[0].children[0].data);
        return parseAccountNumber;
    }); 
    return parsedAccountNumber[0];
}

function getSchoolSystem(){
    var schoolSystems = body('font:contains("School System:")');
    
    var parsedSchoolSystem = _.map(schoolSystems, schoolSystem=>{
        var parseSchoolSystem = _.trim(schoolSystem.parent.parent.next.next.children[0].children[0].data); 
        return parseSchoolSystem;
    });
    return parsedSchoolSystem[0];
}

function getTaxableMarket(){
    var taxMarkets = body('a:contains("Taxable Market")');
    
    var parsedTaxMarket = _.map(taxMarkets, taxMarket=>{
        var parseTaxMarket = _.trim(taxMarket.parent.parent.parent.next.next.children[0].children[0].data);
        return parseTaxMarket;
    });
    return parsedTaxMarket[0];
}
var ImportantInformation = {
    accountNumber:"",
    schoolSystem:"",
    taxableMarket:""
}

ImportantInformation.accountNumber = getAccountNumber();
ImportantInformation.schoolSystem = getSchoolSystem();
ImportantInformation.taxableMarket = getTaxableMarket();

console.log(ImportantInformation);