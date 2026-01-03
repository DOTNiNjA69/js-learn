//null comparisons doesnt give expected result
console.log(null>0);
console.log(null==0);
console.log(null>=0);
//equality check works in other way than comaprison
// strict check => checks value as well as datatype

//array
const heros  = ["shaktiman","superman","batman"]
//objects are written under curly braces {
//}

let myObj = {
    name : "sanjay",
    age : 21 ,
}

//function => is treated like a variable in js 

const myFunction = function()
{
    // console.log("hello world");
    
}
//primitive datatypes get stored in stack and copies are generated. no primitive like array and object get stored in heap and thus it gets changed directly in memory