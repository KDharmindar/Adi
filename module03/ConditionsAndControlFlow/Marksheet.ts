//Enumeration for Study Standard
enum StudyStandard {
    First = 1,
    Second,
    Third,
    Fourth,
    Fifth,
    Sixth,
    Seventh,
    Eight
}

//Necessary variables
let studentName:string; // Student Name
let studyStandard:StudyStandard; // Student Study Standard

//Marks of the Subjects
let marksInEnglish:number;
let marksInScience:number;
let marksInMathematics:number;
let marksInArts:number;
let marksInHistory:number;
let totalMarksInAllSubject:number;
let percentageObtained:number;
let grade:string = "";
let resultMessage:string;

studentName = "Alfred";//Set student Name
studyStandard = StudyStandard.Eight; //Set student study standard


//Assign marks to subject variables
marksInArts = 90;
marksInEnglish = 87;
marksInHistory = 78;
marksInMathematics = 88;
marksInScience = 91;

//Total marks
totalMarksInAllSubject = marksInArts 
    + marksInEnglish 
    + marksInHistory 
    + marksInMathematics 
    + marksInScience;


//Calculate the percentage obtained
percentageObtained = (totalMarksInAllSubject / 500) * 100;

//Calculate the grade
if (percentageObtained <= 100 && percentageObtained >= 90) {
    grade = "A Grade";
} else if(percentageObtained <= 89 && percentageObtained >= 80) {
    grade = "B Grade";
} else if(percentageObtained <= 79 && percentageObtained >= 70) {
    grade = "C Grade";
} else if(percentageObtained <= 69 && percentageObtained >= 60) {
    grade = "D Grade";
} else if(percentageObtained < 60) {
    grade = "Failed";
}


//Formated string message
resultMessage = `${studentName} of Standard ${studyStandard} scored ${totalMarksInAllSubject} out of 500. 
                And Percentage Obtained is ${percentageObtained} and Grade is ${grade}`;
//Output on console
console.log(resultMessage);
