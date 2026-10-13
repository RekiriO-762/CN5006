function EmployeeInfo(name, Salary)
{
    console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}

//Display current date and time
const currentDateTime = new Date();

console.log("This is the second exercise finished ont the 13.10.2026");
console.log("Programe run on : " + currentDateTime.toLocaleString());

var EmpName = "Jaoh";
var EmpSalary = 50000;

// Calling function
EmployeeInfo(EmpName, EmpSalary);

// Second Exercise
const EmpSkills= (skills,Name,LabGrp)=> {
    console.log("Student ID"+ Name+ "Expert in "+ skills)
    console.log("Lab Group Name ",LabGrp) 
}
EmpSkills("java"," u2914515 ", " CN5006 ")
