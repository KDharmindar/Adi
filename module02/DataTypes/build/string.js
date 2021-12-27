"use strict";
let firstValue = "Hello world in double quotes";
let secondValue = 'Hello world in single qoutes';
let thirdValue = "Hello world through type inference";
//String Literals or Template Literals
let customerName = "Alfred";
let message = `Welcome to our website Mr. ${customerName}`;
console.log(message);
let objString = new String("Hello world with Capital S");
let secondObjString = new String(" more data");
let l = objString.length;
let concatValue = objString.concat(secondObjString.toString());
console.log(concatValue);
