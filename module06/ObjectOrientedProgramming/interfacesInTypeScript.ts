interface IStudent {
    registrationNo:string;
    studentName:string;
    study():void;
}

interface IChemistryStudent extends IStudent {
    studyChemistry():void;
}


let student:IStudent = {
    registrationNo: "0001",
    studentName:"Alfred",
    study(): void {
        console.log(`${student.registrationNo} having name ${student.studentName} is studying`);
    }
}

let chemistryStudent:IChemistryStudent = {
    registrationNo : "0002",
    studentName : "Alex",
    study() : void {
        //
    },
    studyChemistry(): void {
        //
    }
}

class PhysicsStudent implements IStudent {
    registrationNo: string;
    studentName: string;

    constructor(r:string, s:string) {
        this.registrationNo = r;
        this.studentName = s;
    }

    study(): void {
        console.log(`${this.registrationNo} having name ${this.studentName} is studying`);
    }
}


class OrganicChemistryStudent implements IChemistryStudent {
    registrationNo: string;
    studentName: string;

    constructor(r:string, s:string) {
        this.registrationNo = r;
        this.studentName = s;
    }

    study(): void {
        
    }

    studyChemistry(): void {
        
    }
}

let physicsStudent = new PhysicsStudent("0001", "Alfred");
let organicChemistryStudent = new OrganicChemistryStudent("0003","Alice");
organicChemistryStudent.studyChemistry();

