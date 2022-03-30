"use strict";
function Add(firstVal, secondValue) {
    return firstVal + secondValue;
}
let sum = Add(2, 3);
let message = Add('Hello ', 'World');
let objects = Add({}, {});
console.log(sum);
console.log(message.Name);
console.log(objects);
