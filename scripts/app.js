let userInput = document.getElementById("userInput");
let searchBtn = document.getElementById("searchBtn");
let injectDiv = document.getElementById("injectDiv");
let studentName = document.getElementById("studentName");
let studentEmail = document.getElementById("studentEmail");
let studentAge = document.getElementById("studentAge");
let studentNumber = document.getElementById("studentNumber");

let studentList;
let matchingStudent;

async function ApiCall (){
    const promise = await fetch('../assets/students.json');
    const data = await promise.json();

    studentList = data.studentList;
}

function findStudent (){
    let input = userInput.value.toLowerCase();
    console.log("I work");

    for(let i = 0; i < studentList.length; i++){
        let student = studentList[i];
        if(input === student.firstName.toLowerCase()){
            matchingStudent = student;
        }
    }

    if(matchingStudent){
        studentName.textContent = "Name: " + matchingStudent.firstName + " " + matchingStudent.lastName;
        studentEmail.textContent = "Email: " + matchingStudent.email;
        studentAge.textContent = "Age: " + matchingStudent.age;
        studentNumber.textContent = "Number: " + matchingStudent.number;
    } else {
        studentName.textContent = "NO STUDENT FOUND";
        studentEmail.textContent = "";
        studentAge.textContent = "";
        studentNumber.textContent = "";
    }

    userInput.value = "";
}

searchBtn.addEventListener('click', function(e){
    findStudent();
    console.log("CLICK WORKING");
})

ApiCall();