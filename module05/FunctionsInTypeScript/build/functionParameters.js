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
// Rest parameters
function GreetingsToAll(firstName, ...names) {
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
}
GreetingsToAll('Alfred', 'Albert', 'Alice', 'Mike', 'George');
GreetingsToAll('Alfred', 'Albert', 'Alice', 'Michael');
