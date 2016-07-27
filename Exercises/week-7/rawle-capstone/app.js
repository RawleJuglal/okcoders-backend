/*Require in the necessary modules*/
var request = require('request')
var cheerio = require('cheerio')
var _ = require('lodash')
//----------------------------------

//The lowest mapNumber possible
var minMapNumber = 1001;
//The highest map number possible
var maxMapNumber = 4944;
//The sample page whose data we are looking at
var sampleMapNumber = 2713;

loopOverMapNumbers(minMapNumber,maxMapNumber);

function loopOverMapNumbers(number, maxNumber){
    if(number<= maxNumber)
        {
            console.log('starting to query map number: ', number);
            scrape(number);
        }
    else
        {
            console.log('done with all the numbers');
        }
}

function scrape(mapNumber){
    var currentMapNumber
    var numberOfTimesCalled = 0;
    var currentState;
    var accountNumberGatherer =[];
    //function call to begin the program
    queryMapNumber(mapNumber, false, 1, '');
    
    
    //function that is used when called to begin program takes 4 params
    function queryMapNumber(mapNumber, nextPage, page, state) {
        numberOfTimesCalled++;
        console.log('times called: ', numberOfTimesCalled, page);
        currentMapNumber = mapNumber;
      var url = 'http://www.oklahomacounty.org/assessor/Searches/MapNumber.asp'
      var method = 'POST'
      if(nextPage){
        var form = { fpdbr_0_PagingMove: "  >   ", 
                     Map: mapNumber
                   }  
      }else{
          var form = { Map: mapNumber }
      }
      
      if(state){
          var headers = {
              Cookie:state
          }
      } else {
          var headers = {}
      }
    
    //the options object that is passed to the request call  
      var options = {
        url: url,
        method: method,
        form: form,
        headers: headers
      }
      //the request call with the options and a function callback
      request(options, mapQueryCallback)
    }
    
    //the function callback that is called when request finishes
    function mapQueryCallback(err, res, body) {
      if (err) {
        console.log('error!', err)
      } else {
        console.log('statusCode: ', res.statusCode)
        if (res.statusCode == 200) {
            if(!currentState)
                {
                   currentState = _.replace(res.headers['set-cookie'][0], ' path=/', '');
                }
          console.log(currentState);
          gatherAccountNo(body)
        }
      }
    }
    
    //after getting back body from request, we pass it to this funciton so that
    //cheerio can pull ou the links that we are interested in. It also, if there
    //is multiple pages, continues to walk those pages with subsequent requests
    function gatherAccountNo(body) {
      var $ = cheerio.load(body)
      var accountNoElements = $('a[href*="ACCOUNTNO"]')
      var accountNumbers = _.map(accountNoElements, elem =>{
        return _.trim(elem.children[1].children[0].data);  
      });
      console.log(accountNumbers);
      accountNumberGatherer = _.union(accountNumberGatherer, accountNumbers);
      
      var currentPageInfo = pageInfo($);
      if(currentPageInfo.pagesLeft>0){
          queryMapNumber(currentMapNumber, true, currentPageInfo.currentPage + 1, currentState);
      } else {
          console.log('no more pages!');
          console.log(`I have ${accountNumberGatherer.length} accounts links gathered!`);
          //crawlAccountNumber(accountNumberGatherer);
          //loopOverMapNumbers(currentMapNumber+1, maxMapNumber);
      }
    }
    
    //function that takes the body, finds the page info section at the bottom
    //parses it, and returns information about it
    function pageInfo(body){
       var pageSummary = _.trim(body('nobr').text());
       if(pageSummary){
           var pattern = /\[(.*)\/(.*)\]/;
           var matches = pageSummary.match(pattern);
           var currentPage = Number(matches[1]);
           var totalPages = Number(matches[2]);
       } else {
           var currentPage = 1;
           var totalPages = 1;
       }
       
       return {
           currentPage: currentPage,
           totalPages: totalPages,
           pagesLeft: totalPages - currentPage
       }
       
    }  
}

function crawlAccountNumber(accountNumbers){
    _.each(accountNumbers, accountNumber=>{
        queryAccountNumber(accountNumber);
    });
}

function queryAccountNumber(accountNumber){
   var baseUrl = 'http://www.oklahomacounty.org/assessor/Searches/AN-R.asp';
    var method = 'GET';
    
    var options = {
        url:baseUrl,
        method:method,
        qs:{
            ACCOUNTNO: accountNumber
        }
    }
    
    request(options, accountNumberCallback); 
}
function accountNumberCallback(err, res, body){
    if(err)
        {
            console.log('Error: ' + err);
        }
    else
        {
            if(res.statusCode != 200)
                {
                    console.log('Status not 200, could not get data');
                }
            else
                {
                    console.log('data from account number query:');
                    console.log(body);
                    //gatherAccountInfo(body);
                }
        }
}

function gatherAccountInfo(body){
    var $ = cheerio.load(body);
}