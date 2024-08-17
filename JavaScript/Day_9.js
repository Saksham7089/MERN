// :-  Topic Variable or Const :-


// Constant variable is a fixed value in program
const accountId = 1254;

// let is block scope variable and this is not redeclare in scope
let accountGmail = "saksham@gmail.com"

// var is not preferred to use after ES6 let or const variable type
var accountPassword = "3564";
accountState = "Madhya Pradesh";

// This is a undefined variable type.
let accountCity;

console.table([accountId, accountGmail, accountPassword, accountState, accountCity]);


// :-  Data Types :-

let name = "saksham"  //String Datatype

let number = 123456;  //Number Datatype

let = null;  //null datatype but the typeof object

let = undefined;  //undefined Datatype

console.table([typeof name, typeof number, typeof null, typeof undefined]);

// and some other datatypes are BigInt are larger number, Symbol are use in react and other framework, etc.


// :-  Topic Conversion :-

let score = "12ab"

console.log(score)
console.log(typeof score)

let inStringScore = String(score)

console.log(inStringScore)
console.log(typeof inStringScore)

let inNumberScore = Number(score) // if string = "12av" convert in number and output provide NaN = Not a Number 

console.log(inNumberScore)
console.log(typeof inNumberScore)

// test for Boolean

let isBoolean = 1

let inBooleanCon = Boolean(isBoolean)

console.log(inBooleanCon)
console.log(typeof inBooleanCon)