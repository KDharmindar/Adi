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

let studentName: string; //Name of the Student
let studyStandard: StudyStandard; // Standard of the Student

//Marks of the Subjects
let marksInEnglish:number;
let marksInScience:number;
let marksInMathematics:number;
let marksInArts:number;
let marksInHistory:number;
let totalMarksInAllSubject:number;
let resultMessage:string;

studentName = 'Alfred'; // Set student name
studyStandard = StudyStandard.Eight;

//Assign marks to all the subjects
marksInEnglish = 90;
marksInScience = 86;
marksInMathematics = 88;
marksInArts = 92;
marksInHistory = 85;

//Total marks
totalMarksInAllSubject = 
    marksInEnglish 
    + marksInScience 
    + marksInMathematics 
    + marksInArts 
    + marksInHistory;

//Formated result message
resultMessage = `${studentName} of standard ${studyStandard} scored ${totalMarksInAllSubject} out of 500`;

//Output on console
console.log(resultMessage);