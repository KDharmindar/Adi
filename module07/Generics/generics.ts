function DoSomething<T>(data:T):T {
    //Doing something over here
    return data;
}



let a = DoSomething("Hello");
let b = DoSomething(2);
let c = DoSomething('Hello world');
let d = DoSomething(2);

let newObject = {
        a:2,
        b:'Alfred',
        c: function() {
            //Do something
        } 
    }


let o = DoSomething(newObject);


