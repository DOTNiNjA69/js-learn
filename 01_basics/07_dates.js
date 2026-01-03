let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());


//date is an object


//if we want to add a required date then,   (january =0,feb =1,march=2,etc)

let CreatedDate= new Date(2023,2,24)
// console.log(CreatedDate.toDateString());
//or
let NewDate = new Date("2024-05-21")
// console.log(NewDate.toDateString());
let myTimeStamp= Date.now()
console.log(Math.floor(myTimeStamp/1000));
