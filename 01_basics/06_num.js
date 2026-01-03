const score=400
const Balance= new Number(100)
// console.log(Balance);
// console.log(Balance.toString());
//to limit the precision value do toFixed().         {digits after decimal point}
// console.log(Balance.toFixed(2));
//toPrecision().                       {total how many digits do we require after rounding off}
const hundereds=1000000000
// console.log(hundereds.toLocaleString('en-IN'));


//+++++++++++.        MATHS.          +++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.max(2,4,6,1));
console.log((Math.random()*10)+1);   //gives value in between 0 and 1 unless given range .       we can multiply digits with the function

const min=10
const max=20
console.log(Math.floor(Math.random()* (max-min+1))+min)