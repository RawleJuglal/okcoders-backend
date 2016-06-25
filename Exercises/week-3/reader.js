
var fs = require('fs');

// ...
// and much more
fs.readFile(process.argv[2],(err,data)=>{
   if(err)
        {
            console.log("Unable to read file test.txt");
        }
    else
        {
            console.log(data.toString());  
        }
});