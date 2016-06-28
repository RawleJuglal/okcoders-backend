var fs = require('fs');

var argsProvided = process.argv;
var path = argsProvided[2];

fs.readFile(path, (err, data)=>{
    if(err)
        {
            console.log(err);
        }
    else
        {
            console.log(data);
        }
})