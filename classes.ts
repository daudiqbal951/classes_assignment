class University{
    universityName:string;
    constructor(univeristyName:string){
        this.universityName = univeristyName
    }
}
class College extends University{
    collegeName:string;
    constructor(collegeName:string, universityName:string){
        super(universityName)
        this.collegeName=collegeName
    }
}
class Departments extends College{
    departmentName:string;
    constructor(departmentName:string, collegeName:string, universityName:string){
        super( collegeName, universityName)
        this.departmentName=departmentName
    }
}
class Faculty extends Departments{
    dean:Dean;
    viceChancellor:Vicechancellor;
    teachers: Teacher[];
    constructor(dean:Dean,viceChancellor:Vicechancellor,teachers:Teacher[],departmentName:string,collegeName:string, universityName:string){
        super(departmentName,collegeName,universityName)
        this.dean=dean
        this.viceChancellor=viceChancellor
        this.teachers=teachers
    }
}
class Programs extends Faculty{
    programName:string;
    constructor(programName:string,dean:Dean,viceChancellor:Vicechancellor, teachers:Teacher[],departmentName:string, collegeName:string, universityName:string){
        super(dean,viceChancellor,teachers,departmentName, collegeName, universityName)
        this.programName=programName
    }
}
class Courses extends Programs{
    courseName:string
    courseStudents:Student[]
    constructor(courseName:string,courseStudents:Student[],dean:Dean,viceChancellor:Vicechancellor, courseTeacher:Teacher[],programName:string,departmentName:string,collegeName:string, universityName:string){
        super(programName,dean,viceChancellor,courseTeacher,departmentName,collegeName,universityName)
        this.courseName=courseName
        this.courseStudents=courseStudents
    }
}
class Person{
    name:string
    age: number
    constructor(name:string,age:number){
        this.name=name 
        this.age=age
    }
}
class Dean extends Person{
    designation:string = "Dean"
    qualification:string
    constructor(qualification:string,name:string,age:number){
        super(name,age)
        this.qualification=qualification
    }
}
class Vicechancellor extends Person{
    designation:string = "Vice Chancellor"
    qualification:string
    constructor(qualification:string,name:string,age:number){
        super(name,age)
        this.qualification=qualification
    }
}
class Teacher extends Person{
    qualification:string
    constructor(qualification:string,name:string,age:number){
        super(name,age)
        this.qualification=qualification
    }
}
class Student extends Person{
    department: Departments
    rollNo: number
    constructor(rollNo:number,department:Departments,name:string,age:number){
        super(name,age)
        this.rollNo=rollNo
        this.department=department
    }
}
class Staff extends Person{
    designation:string 
    constructor(designation:string,name:string,age:number){
        super(name,age)
        this.designation=designation
}
}

const bachelorsMechanicalEngineering = new Programs("Bachelors in Mechanical Engineering",
                                        new Dean("Phd","Dr. Emad ud Din",58),
                                        new Vicechancellor("Phd","Dr Ali",60),
                                        [new Teacher("Master","Dr. Zaib", 46),new Teacher("Masters","Sr. Sara Babar",35),new Teacher("Masters","ANK",70)],
                                        "SMME",
                                        "SMME",
                                        "NUST"
)
const heatMasstransfer= new Courses("Heat and Mass Transfer",
                        [new Student(1234,new Departments("SMME","SMME","NUST"),"Daud",24),new Student(3456,new Departments("SMME","SMME","NUST"),"Ali Haider",25),new Student(5677,new Departments("SMME","SMME","NUST"),"Mohsin",26)],
                        new Dean("Phd","Dr. Emad ud Din",58),
                        new Vicechancellor("Phd","Dr Ali",60),
                        [new Teacher("Master","Dr. Zaib", 46),new Teacher("Masters","Sr. Sara Babar",35),new Teacher("Masters","ANK",70)],
                        "Bachelors in Mechanical Engineering",
                        "SMME",
                        "SMME",
                        "NUST"
)

console.log(bachelorsMechanicalEngineering)
console.log(heatMasstransfer)
bachelorsMechanicalEngineering.teachers.forEach((name)=>{
    console.log(`${name.name}`)
}
)