//arrays in javascript is reusable and we can mix datatypes in it.
const myArr= [1,2,4,6,7]
const arr2=new Array(1,4,5,6,8)
myArr.push(10)
myArr.push(20) //adds element to last of array
myArr.pop() //removes last element from array
console.log(myArr);
myArr.unshift(5) //adds element to first of arrar
console.log(myArr);
myArr.shift()// removers first element

const newArray= myArr.join() //converts to string
console.log(newArray);
//slice gives part of arr (0-3) give 0,1,2
//splice removes and give the part of arr (0-3) give 0th ,1st,2nd,3rd and cuts the original arry
