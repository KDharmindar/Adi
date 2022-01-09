
let a:any = 'Hello world';
a = true;

let b:unknown = 'Hello world';
b = true;

let c  = a.name;
a.show();


let d:number = b as number;
let e:string = '';

if (typeof b === 'number') {
    d = b as number;
} else if (typeof b === 'string') {
    e = b as string;
} else if(typeof b === 'boolean') {

} else if(typeof b === 'function') {

}






