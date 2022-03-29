"use strict";
let redColor = 1;
let blueColor = 2;
let greenColor = 3;
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 10] = "Red";
    Colors[Colors["Blue"] = 20] = "Blue";
    Colors[Colors["Green"] = 30] = "Green";
    Colors[Colors["Orange"] = 40] = "Orange";
    Colors[Colors["Yellow"] = 50] = "Yellow";
    Colors[Colors["Black"] = 60] = "Black";
    Colors[Colors["White"] = 70] = "White";
})(Colors || (Colors = {}));
var ImageFormatType;
(function (ImageFormatType) {
    ImageFormatType["PNG"] = "image/png";
    ImageFormatType["JPG"] = "image/jpg";
    ImageFormatType["GIFF"] = "image/gif";
})(ImageFormatType || (ImageFormatType = {}));
let currentImageFormat;
currentImageFormat = ImageFormatType.GIFF;
console.log(currentImageFormat);
let choseColor;
let selectedColor = Colors.Red; // Red 
choseColor = Colors.Blue;
console.log(choseColor);
