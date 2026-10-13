function EmployeeInfo(name, Salary)
{
    console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}

//Display current date and time
const currentDateTime = new Date();

console.log("This is the second exercise finished ont the 13.10.2026");
console.log("Programe run on : " + currentDateTime.toLocaleString());

var EmpName = "Jaoh";
var EmpSalary = 250000;

// Calling function
EmployeeInfo(EmpName, EmpSalary);

// Second Exercise
const EmpSkills= (skills,Name,LabGrp)=> {
    console.log("Student ID"+ Name+" is a student of Uni of East London")
    console.log("Expert in "+ skills)
    console.log("Lab Group Name ",LabGrp) 
}
EmpSkills("java"," u2914515 ","CN5006 ")

// code for Third Exercise
const student= require('./Studentinfo.js')
const person = require('./Person.js') 

// Because get name is the function we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)

//Because dob is a variable so we dont use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
person1= new person( "Jin", 29,"Jin Sakoe@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")