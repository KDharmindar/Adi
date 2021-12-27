"use strict";
//Enumeration for Study Standard
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
//Necessary variables
let studentName; // Student Name
let studyStandard; // Student Study Standard
//Marks of the Subjects
let marksInEnglish;
let marksInScience;
let marksInMathematics;
let marksInArts;
let marksInHistory;
let totalMarksInAllSubject;
let resultMessage;
studentName = "Alfred"; //Set student Name
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
