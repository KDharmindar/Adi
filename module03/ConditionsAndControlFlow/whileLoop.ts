//Repeat a task until any condition is true

/* let i:number = 0;

while (i < 10) {
    console.log("hello world");
    i++;
} */

let ch:string = "Y";
let i:number = 0;

while(ch == "Y") {
    console.log("Hello Alfred");
    if (i == 10) {
        ch = "N";    
    }
    i++;
}