// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
let myFunction =  () => {
    console.log("Function was invoked!")
};

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
let anotherFunction = (param) => {return param;}

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (a,b) => {return a+b;}

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (a,b) => {return a-b;}


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
exampleArray = [1,2,3,4]
const triple = exampleArray.map((num)=>{return num*3 })

// :)