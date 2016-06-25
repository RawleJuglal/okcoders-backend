var fs = require('fs');
var path = process.argv[3];
var file = process.argv[2];

fs.open(path,'w',(err, fd)=>{
   if(err)
        {
            console.log(err);
        }
    else
        {
            fs.readFile(file,(err, data)=>{
               if(err)
                    {
                        console.log(err);
                    }
                else
                    {
                        var text=data;
                        fs.writeFile(path, text, 'utf-8',(err)=>{
                           if(err)
                                {
                                    console.log(err);
                                }
                            else
                                {
                                    console.log('Write is successful');
                                }
                        });
                    }
            });
        }
});