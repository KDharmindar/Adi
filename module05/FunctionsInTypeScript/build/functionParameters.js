"use strict";
//Required
//Optional
//Default
//Rest
function Add(firstValue, secondValue = 5) {
    return firstValue + secondValue;
}
let s = Add(2, 3); //result will be 5
let s1 = Add(2); // result will be 7
//Rest parameter
function AddAllNumbers(firstNumber, ...restOfNumbers) {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
}
let f1 = AddAllNumbers(1, 2, 3); //result 6
let f2 = AddAllNumbers(1, 2, 3, 4);
let f3 = AddAllNumbers(1, 2, 3);
console.log(f1);
console.log(f2);
