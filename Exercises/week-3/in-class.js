function myFirstFunction(myFirstVariable, secondVar){
    //console.log(`hello world! ${myFirstVariable} and ${secondVar}`);
    return 'a string';
}
//a back tick instead of apostrophe or quotation will allow you to
//use the $param to fill in strings

//myFirstFunction("Hi!", "Wow!");
//myFirstFunction(true, [],{});
//myFirstFunction(6, false);
//myFirstFunction(null, [1, 2, 3, 4]);
//myFirstFunction();

//console.log(myFirstFunction());
//When you call a function typically it expects a return.
//Without a return statement it will last show undefined


function doWork(str){
    return str.substr(0,3).toLowerCase();
}

for(var i=2;i<process.argv.length;i++)
    {
        //console.log(doWork(process.argv[i]));
    }
    
var valueFromReturn = myFirstFunction();
console.log(valueFromReturn);

var newVariable = 'not test';

function newScopeFunction(){
    var newVariable = 'something else';
    newVariable = 'test';
    console.log(newVariable);
}

newScopeFunction();
console.log(newVariable);
//newVariable will only exist inside the body of newScopeFunction
//it will not exist anywhere else therefore this console.log will not work
//console.log(newVariable);


//newerScopeFunction();
/*var newerScopeFunction = function(){
    newVariable = 'test';
    console.log(newVariable);
}*/

//By assigning your function to a variable will not use hoisting
//You will not be able to call before it is defined.
/*HIGHER ORDER FUNCTION

var sampleData = [
  {year: 1990, population: 500000, spend: 10000000, city: "OKC", state: "OK"},
  {year: 1991, population: 500031, spend: 10000057, city: "OKC", state: "OK"},
  {year: 1992, population: 500062, spend: 10000114, city: "OKC", state: "OK"},
  {year: 1993, population: 500093, spend: 10000171, city: "OKC", state: "OK"},
  {year: 1994, population: 500124, spend: 10000228, city: "OKC", state: "OK"},
  {year: 1995, population: 500155, spend: 10000285, city: "OKC", state: "OK"},
  {year: 1996, population: 500186, spend: 10000342, city: "OKC", state: "OK"},
  {year: 1997, population: 500217, spend: 10000399, city: "OKC", state: "OK"},
  {year: 1998, population: 500248, spend: 10000456, city: "OKC", state: "OK"},
  {year: 1999, population: 500279, spend: 10000513, city: "OKC", state: "OK"},
  {year: 2000, population: 500310, spend: 10000570, city: "OKC", state: "OK"},
  {year: 2001, population: 500341, spend: 10000627, city: "OKC", state: "OK"},
  {year: 2002, population: 500372, spend: 10000684, city: "OKC", state: "OK"},
  {year: 2003, population: 500403, spend: 10000741, city: "OKC", state: "OK"},
  {year: 2004, population: 500434, spend: 10000798, city: "OKC", state: "OK"},
  {year: 2005, population: 500465, spend: 10000855, city: "OKC", state: "OK"},
  {year: 2006, population: 500496, spend: 10000912, city: "OKC", state: "OK"},
  {year: 2007, population: 500527, spend: 10000969, city: "OKC", state: "OK"},
  {year: 2008, population: 500558, spend: 10001026, city: "OKC", state: "OK"},
  {year: 2009, population: 500589, spend: 10001083, city: "OKC", state: "OK"},
  {year: 2010, population: 500620, spend: 10001140, city: "OKC", state: "OK"},
  {year: 2011, population: 500651, spend: 10001197, city: "OKC", state: "OK"},
  {year: 2012, population: 500682, spend: 10001254, city: "OKC", state: "OK"},
  {year: 2013, population: 500713, spend: 10001311, city: "OKC", state: "OK"},
  {year: 2014, population: 500744, spend: 10001368, city: "OKC", state: "OK"},
  {year: 2015, population: 500775, spend: 10001425, city: "OKC", state: "OK"},
  {year: 2016, population: 500806, spend: 10001482, city: "OKC", state: "OK"}
]


function forEach(myArray, callback){
    for(i=0;i<myArray.length;i++)
        {
            callback(myArray[i]);
        }
}

function map(myArray, callback){
    var newArray = [];
    for(i=0;i<myArray.length;i++)
        {
            newArray.push(callback(myArray[i]));
        }
    return newArray;
}


function getPopulation(element){
    return element.population;
}

function getYear(element){
    return element.year;
}

forEach(sampleData, getPopulation);
var populationData = map(sampleData, getPopulation);
var yearData = map(sampleData, getYear);
console.log('mapped data!', populationData);
console.log('mapped data!', yearData); */

//RECURSIVE FUNCTION

function recursiveFunction(start, end){
    if(start === end)
        {
            console.log('reached the end', start, end);
        }
    else if (start > end) {
        console.log('wrong usage');       
    }else{
        console.log('going up', start, end);
        recursiveFunction(start+1, end);
    }
    
}

recursiveFunction(1,10);