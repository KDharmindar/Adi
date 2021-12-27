enum Colors {
    Red = 10,
    Blue = 20,
    Green = 30,
    Orange = 40,
    Yellow = 50
}

enum ImageFormat {
    PNG = "image/PNG",
    JPEG = "image/JPEG",
    GIFF = "image/Giff"
}


let backgroundColor : Colors;
backgroundColor = Colors.Orange;

let currentImageFormat: ImageFormat;
currentImageFormat = ImageFormat.PNG;

console.log(currentImageFormat);

