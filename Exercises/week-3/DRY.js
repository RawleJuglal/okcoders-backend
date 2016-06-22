// write a program that takes three parameters
// 1. lower case each of the parameters
// 2. take the first three characters of each string
// 3. log each of those
//
// i.e when you execute it you should see
// node DRY.js EXERCISES ARE AWESOME
// exe
// are
// awe
//
// remember this? process.argv


var array = process.argv;
var myArray = [];

for(i=2;i<array.length;i++)
    {
        myArray.push(array[i].substr(0,3).toLowerCase());

    }
    
for(i=0;i<myArray.length;i++)
    {
        console.log(myArray[i]);
    }