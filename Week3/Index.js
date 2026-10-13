function EmployeeInfo(name, Salary)
{
    console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}

//Display current date and time
const currentDateTime = new Date();

console.log("This is my first program");
console.log("Programe run on : " + currentDateTime.toLocaleString());

var EmpName = "Jaoh";
var EmpSalary = 50000;

// Calling function
EmployeeInfo(EmpName, EmpSalary);

// Second Exercise
const EmpSkills= (skills,Name,LabGrp)=> {
    console.log(" Student ID"+ Name+ "Expert in "+ skills)
    console.log("Lab Group Name",LabGrp) 
}
EmpSkills("java","Replace this with your student ID", "Replace with your lab Grp")
