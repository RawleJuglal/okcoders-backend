var request = require('request');

//SIMPLIEST USE OF REQUEST
//if you pass url and callback it will return header and body with html
//request(url, function(err, data{})

/*This is the simple request*/
//request ('http://pitchfork.com',genericCallback);

function genericCallback(err, res, data){
    if(err)
        {
            console.log(err);
        }
    else{
        console.log("headers", res.headers);
        console.log("status",res.statusCode);
        console.log("data",data.includes('David Bowie'));
        console.log("data", data.includes('Kendrick Lamar'));
    }
}

/*The standard way we will call it*/
//This is the options object that will be passed to the Request request function
var options = {
    url:'http://pitchfork.com/reviews/best/albums/',
    method:'GET',
    headers:{
        chicken:'duck!',
        token:'hashinformation ex.a;lkfdj;aslkdfjas;ldj'
    },
    qs:{
        page:2
    }
}

//This will have an object that will have the options we want, and then the callback
request(options, genericCallback);