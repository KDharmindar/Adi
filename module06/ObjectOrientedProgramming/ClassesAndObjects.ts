abstract class Student {
    registrationNo:string;
    studentName:string;
    studentMessage:string;
    studentFund:number;
    static schoolName:string;

    constructor(r:string, n:string) {
        this.registrationNo = r;
        this.studentName = n;
        this.studentMessage = '';
        this.studentFund = 1000;
    }


    static DoSomething() {

    }

    Study() {
        this.studentMessage = `${this.registrationNo} having name ${this.studentName} is studying`;
        console.log(this.studentMessage);
    }
}

class ChemistryStudent extends Student {
    chemistrySectionType:string;

    constructor(c:string, r:string, s:string) {
        super(r, s);
        this.chemistrySectionType = c;
    }

    Study() {
       super.Study();
       console.log(`Studying ${this.chemistrySectionType}`); 
    }
}


let firstStudent = new ChemistryStudent("Inorganic Chemistry","0001","Alfred");
firstStudent.Study();

ChemistryStudent.schoolName = "ABC School";


let secondStudent = new ChemistryStudent("Organic Chemistry","0002", "Alex");
secondStudent.Study();


let thirdStudent = new ChemistryStudent("Organic Chemistry", "0003", "Chris");
thirdStudent.Study();






