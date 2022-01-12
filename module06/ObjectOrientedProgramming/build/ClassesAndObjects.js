"use strict";
class Student {
    constructor(r, n) {
        this.registrationNo = r;
        this.studentName = n;
        this.studentMessage = '';
    }
    Study() {
        this.studentMessage = `${this.registrationNo} having name ${this.studentName} is studying`;
        console.log(this.studentMessage);
    }
}
class ChemistryStudent extends Student {
    constructor(c, r, s) {
        super(r, s);
        this.chemistrySectionType = c;
    }
    Study() {
        super.Study();
        console.log(`Studying ${this.chemistrySectionType}`);
    }
}
let firstStudent = new Student("0001", "Alfred");
firstStudent.Study();
let secondStudent = new Student("0002", "Alex");
secondStudent.Study();
let thirdStudent = new ChemistryStudent("Organic Chemistry", "0003", "Chris");
thirdStudent.Study();
