// Named functions
// Anonymous functions
// Arrow functions

//Definition of the function 
function add(firstValue:number, secondValue:number) {
    return firstValue + secondValue;
}

//Definition of the function 
let addAnonymous = function(firstValue:number, secondValue:number) {
    return firstValue + secondValue;
}


function ExecuteFunction(func:Function) {
    let a:number = 4;
    let b:number = 5;
    let c = func(a, b);
    console.log(c);
}

ExecuteFunction(addAnonymous);

//Definition of the function 
let addArrow = (firstValue:number, secondValue:number) => {
    return firstValue + secondValue;
}

let c = addArrow(3, 4);




//Calling function
let sum: number = add(2, 4);
let sumAnonymous = addAnonymous(3, 4);

