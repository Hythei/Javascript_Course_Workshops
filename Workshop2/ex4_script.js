let target = document.getElementById("prompt_Target");
let studentStatus;

studentStatus = confirm("Are you a student?");

if (studentStatus == true){
    target.innerHTML = "WELCOME STUDENT!";
} else {
    target.innerHTML ="Sorry, this page is for students only.";
}