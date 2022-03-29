"use strict";
var StudyStandard;
(function (StudyStandard) {
    StudyStandard[StudyStandard["First"] = 1] = "First";
    StudyStandard[StudyStandard["Second"] = 2] = "Second";
    StudyStandard[StudyStandard["Third"] = 3] = "Third";
    StudyStandard[StudyStandard["Fourth"] = 4] = "Fourth";
    StudyStandard[StudyStandard["Fifth"] = 5] = "Fifth";
    StudyStandard[StudyStandard["Sixth"] = 6] = "Sixth";
    StudyStandard[StudyStandard["Seventh"] = 7] = "Seventh";
    StudyStandard[StudyStandard["Eight"] = 8] = "Eight";
})(StudyStandard || (StudyStandard = {}));
let studentName; //Name of the Student
let studyStandard; // Standard of the Student
//Marks of the Subjects
let marksInEnglish;
let marksInScience;
let marksInMathematics;
let marksInArts;
let marksInHistory;
let totalMarksInAllSubject;
let resultMessage;
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
