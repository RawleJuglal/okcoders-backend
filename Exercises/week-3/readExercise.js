var fs = require('fs');

var args = process.argv[];
var path = args[2];

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