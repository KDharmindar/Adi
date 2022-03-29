"use strict";
// Named functions
// Anonymous functions
// Arrow functions
//Definition of the function 
function add(firstValue, secondValue) {
    return firstValue + secondValue;
}
//Definition of the function 
let addAnonymous = function (firstValue, secondValue) {
    return firstValue + secondValue;
};
function ExecuteFunction(func) {
    let a = 4;
    let b = 5;
    let c = func(a, b);
    console.log(c);
}
ExecuteFunction(addAnonymous);
console.log(addAnonymous(5, 6));
//Calling function
let sum = add(2, 4);
