let userInput = document.getElementById("userInput");
let searchBtn = document.getElementById("searchBtn");
let injectDiv = document.getElementById("injectDiv");
let studentName = document.getElementById("studentName");
let studentEmail = document.getElementById("studentEmail");
let studentAge = document.getElementById("studentAge");
let studentNumber = document.getElementById("studentNumber");

let studentList;

async function ApiCall (){
    const promise = await fetch('../assets/students.json');
    const data = await promise.json();

    studentList = data.studentList;
}

function findStudent (){
    let input = userInput.value.toLowerCase();
    console.log("ear");

    console.log(studentList[0].firstName.toLowerCase())

    for(let i = 0; i < studentList.length; i++){
        let student = studentList[i];
        if(input === student.firstName.toLowerCase()){
            studentName.textContent = student.firstName;
        }else{
            console.log("didn't work");
        }

    }
}

searchBtn.addEventListener('click', function(e){
    findStudent();
    console.log("he");
})

ApiCall();