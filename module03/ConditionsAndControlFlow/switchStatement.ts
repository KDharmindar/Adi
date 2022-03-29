let percentage:number;
let studentGrade:string;
let message:string;

percentage = 87;

if(percentage > 70 && percentage < 80) {
    studentGrade = "B";
} else if(percentage > 80 && percentage < 90) {
    studentGrade = "A";
} else if(percentage > 90) {    
    studentGrade = "A+";
} else {
    studentGrade = "F";
}


switch(studentGrade) {
    case "A+":
        message = "A+ Grade";
        break;
    case "A":
        message = "A Grade";
        break;    
    case "B":
        message = "B Grade";
        break;    
    case "F":
        message = "Failed";
        break;
    default:
        message = "Result unknown";
        break;    
}