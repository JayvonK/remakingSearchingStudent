let userInput = document.getElementById("userInput");
let searchBtn = document.getElementById("searchBtn");
let injectDiv = document.getElementById("injectDiv");
let studentName = document.getElementById("studentName");
let studentEmail = doocument.getElementById("studentEmail");
let studentAge = document.getElementById("studentAge");
let studentNumber = document.getElementById("studentNumber");

let studentList;

async function ApiCall (){
    const promise = fetch('../assets/students.json');
    const data = promise.json();

    studentList = data;
}

function findStudent (){
    let input = userInput.value.toLowerCase();

    for(let i = 0; i < studentList.length; i++){
        if(input == studentList.firstName.toLowerCase()){
            
        }
    }
}

searchBtn.addEventListener('click', function(e){
    findStudent();
})