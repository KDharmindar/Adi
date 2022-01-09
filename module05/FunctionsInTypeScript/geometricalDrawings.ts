// Draw Circle
let circleDraw = function (radius:number) {
    let circleMessage = `Circle drawn with Radius ${radius} meters`;
    console.log(circleMessage);
}

// Draw Square
let squareDraw = function (side:number) {
    let squareMessage = `Square drawn with heigth and width ${side} meters`;
    console.log(squareMessage);
}

// Draw Rectangle
let rectangleDraw = function (height:number, width:number) {
    let rectangleMessage = `Rectangle drawn with Height ${height} meters and Width ${width} meters`;
    console.log(rectangleMessage);
}

// Draw Triangle
let triangleDraw = function (perpandicular:number, base:number, hypotaneous:number) {
    let triangleMessage = `Triangle drawn with Perpandicular ${perpandicular} meters and Base ${base} meters and Hypotaneous ${hypotaneous} meters`;
    console.log(triangleMessage);
}

//Array of Functions

let shapes:Function[] = [];//Blank array of functions
let shapeParameters:[number,number?,number?][] = []; // Blank array of array for parameters

//Functions are assigned to the array
shapes[0] = circleDraw;
shapes[1] = squareDraw;
shapes[2] = rectangleDraw;
shapes[3] = triangleDraw;

shapeParameters[0] = [3];// parameter for circle radius
shapeParameters[1] = [4];// parameter for square sides
shapeParameters[2] = [3, 4];// parameter for rectangle height and width
shapeParameters[3] = [3, 4, 5];// parameter for triangle 


function ExecuteDraw(drawFunc:Function[], param:[number, number?, number?][]) {
    for (let index = 0; index < drawFunc.length; index++) {
        let currentFunc = drawFunc[index];
        currentFunc(...param[index]);        
    }
}

ExecuteDraw(shapes, shapeParameters);
