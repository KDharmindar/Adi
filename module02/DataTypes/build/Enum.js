"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 10] = "Red";
    Colors[Colors["Blue"] = 20] = "Blue";
    Colors[Colors["Green"] = 30] = "Green";
    Colors[Colors["Orange"] = 40] = "Orange";
    Colors[Colors["Yellow"] = 50] = "Yellow";
})(Colors || (Colors = {}));
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["PNG"] = "image/PNG";
    ImageFormat["JPEG"] = "image/JPEG";
    ImageFormat["GIFF"] = "image/Giff";
})(ImageFormat || (ImageFormat = {}));
let backgroundColor;
backgroundColor = Colors.Orange;
let currentImageFormat;
currentImageFormat = ImageFormat.PNG;
console.log(currentImageFormat);
