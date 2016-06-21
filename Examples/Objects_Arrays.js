var person1Age = 26;
var person1Name = "Zach";
var person1CC = 888;

[] //empty array
{} //empty object

//ARRAYS
//With an array I can add as many items/elements as I want

[ 1, 2, 3, 4, 5, 6 ] //an array of numbers
[ true, false, true ]//an array of booleans
var myFirstArray = [ "test", "test2", "test3" ] //an array of strings


[1, 'true', true] 

var stringArray = ['Rawle', 'DevAnand', 'Juglal'];

//Access something within the array
stringArray[0];


//.length this is not a method just pulls a property
stringArray.length; //Would return 3


//Quick way to add something to the next slot in array
stringArray[stringArray.length]='whatever you want to add';
stringArray.push() //will do the same as the above
stringArray.pop()//will remove the last item in the array and returns it to you
//OBJECTS
var ourFirstObject = {};
