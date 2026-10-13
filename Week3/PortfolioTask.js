function StudentInfo(name, Code)
{
    console.log("Welcome " + name + " Your Verification code " + Code );
}

//Display current date and time
const currentDateTime = new Date();

console.log("This is the Portfolio Task exercise finished ont the 13.10.2026");
console.log("Programe run on : " + currentDateTime.toLocaleString());

var StudentName = "Emlyn Ayi";
var StudentCode = 515;

// Calling function
StudentInfo(StudentName, StudentCode);

// Second Exercise
const StudentSkills= (skills,Name,LabGrp)=> {
    console.log("Student ID"+ Name+ " " )
    console.log("Your favourite programming language is "+ skills)
    console.log("Lab Group ",LabGrp) 
}
StudentSkills("Python"," u2914515 "," Thursday Group 9 ")