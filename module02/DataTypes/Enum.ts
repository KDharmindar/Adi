let redColor:number = 1;
let blueColor:number = 2;
let greenColor:number = 3;

enum Colors {
    Red = 10,
    Blue = 20,
    Green = 30,
    Orange = 40,
    Yellow = 50,
    Black = 60,
    White = 70
}

enum ImageFormatType {
    PNG = 'image/png',
    JPG = 'image/jpg',
    GIFF = 'image/gif'
}


let currentImageFormat:ImageFormatType;

currentImageFormat = ImageFormatType.GIFF;
console.log(currentImageFormat);


let choseColor:Colors;


let selectedColor = Colors.Red;// Red 
choseColor = Colors.Blue;

console.log(choseColor);