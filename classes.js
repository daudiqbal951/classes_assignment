"use strict";
class University {
    constructor(univeristyName) {
        this.universityName = univeristyName;
    }
}
class College extends University {
    constructor(collegeName, universityName) {
        super(universityName);
        this.collegeName = collegeName;
    }
}
class Departments extends College {
    constructor(departmentName, collegeName, universityName) {
        super(collegeName, universityName);
        this.departmentName = departmentName;
    }
}
class Faculty extends Departments {
    constructor(dean, viceChancellor, teachers, departmentName, collegeName, universityName) {
        super(departmentName, collegeName, universityName);
        this.dean = dean;
        this.viceChancellor = viceChancellor;
        this.teachers = teachers;
    }
}
class Programs extends Faculty {
    constructor(programName, dean, viceChancellor, teachers, departmentName, collegeName, universityName) {
        super(dean, viceChancellor, teachers, departmentName, collegeName, universityName);
        this.programName = programName;
    }
}
class Courses extends Programs {
    constructor(courseName, courseStudents, dean, viceChancellor, courseTeacher, programName, departmentName, collegeName, universityName) {
        super(programName, dean, viceChancellor, courseTeacher, departmentName, collegeName, universityName);
        this.courseName = courseName;
        this.courseStudents = courseStudents;
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Dean extends Person {
    constructor(qualification, name, age) {
        super(name, age);
        this.designation = "Dean";
        this.qualification = qualification;
    }
}
class Vicechancellor extends Person {
    constructor(qualification, name, age) {
        super(name, age);
        this.designation = "Vice Chancellor";
        this.qualification = qualification;
    }
}
class Teacher extends Person {
    constructor(qualification, name, age) {
        super(name, age);
        this.qualification = qualification;
    }
}
class Student extends Person {
    constructor(rollNo, department, name, age) {
        super(name, age);
        this.rollNo = rollNo;
        this.department = department;
    }
}
class Staff extends Person {
    constructor(designation, name, age) {
        super(name, age);
        this.designation = designation;
    }
}
const bachelorsMechanicalEngineering = new Programs("Bachelors in Mechanical Engineering", new Dean("Phd", "Dr. Emad ud Din", 58), new Vicechancellor("Phd", "Dr Ali", 60), [new Teacher("Master", "Dr. Zaib", 46), new Teacher("Masters", "Sr. Sara Babar", 35), new Teacher("Masters", "ANK", 70)], "SMME", "SMME", "NUST");
const heatMasstransfer = new Courses("Heat and Mass Transfer", [new Student(1234, new Departments("SMME", "SMME", "NUST"), "Daud", 24), new Student(3456, new Departments("SMME", "SMME", "NUST"), "Ali Haider", 25), new Student(5677, new Departments("SMME", "SMME", "NUST"), "Mohsin", 26)], new Dean("Phd", "Dr. Emad ud Din", 58), new Vicechancellor("Phd", "Dr Ali", 60), [new Teacher("Master", "Dr. Zaib", 46), new Teacher("Masters", "Sr. Sara Babar", 35), new Teacher("Masters", "ANK", 70)], "Bachelors in Mechanical Engineering", "SMME", "SMME", "NUST");
console.log(bachelorsMechanicalEngineering);
console.log(heatMasstransfer);
bachelorsMechanicalEngineering.teachers.forEach((name) => {
    console.log(`${name.name}`);
});
