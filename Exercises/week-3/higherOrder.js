function higherOrder(name, callback){
    return callback(name);
}

function lowerAndSub(str){
    return str.substr(0,2).toLowerCase();
}

/*function higherAndSub(str){
    return str.substr(0,2).toUpperCase();
}*/


//NEW ROCKET FUNCTION
//                          multiple paramater (name, age)=>name.subtr(0,3);
//to do an implicit return you must be on one line but without brackets one line you can do it without brackets and it will return evaluated
var upperName = higherOrder('Rawle', name=>name.substr(0,3).toUpperCase());
console.log(higherOrder('Rawle', lowerAndSub));
console.log(higherOrder('Rawle', function(str){return str.substr(0,3).toUpperCase()}));