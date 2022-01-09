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
//Definition of the function 
let addArrow = (firstValue, secondValue) => {
    return firstValue + secondValue;
};
let c = addArrow(3, 4);
//Calling function
let sum = add(2, 4);
let sumAnonymous = addAnonymous(3, 4);
