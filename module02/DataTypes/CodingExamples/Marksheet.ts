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

//Formated string message
resultMessage = `${studentName} of Standard ${studyStandard} scored ${totalMarksInAllSubject} out of 500.`;
//Output on console
console.log(resultMessage);
