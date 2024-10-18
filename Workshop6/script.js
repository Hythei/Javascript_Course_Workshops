//ex1
let button1 = document.querySelector("button");
button1.addEventListener("click", getData);

function getData(){
    let destination = document.querySelector("#destination").value;
    let arrival = document.querySelector("#destination").value;

    localStorage.setItem("destination", destination);
    localStorage.setItem("arrival", arrival);
    
    let checkboxes = document.querySelectorAll("#services input[type='checkbox']");
    checkboxes.forEach((checkbox, index) => {
        localStorage.setItem(`checkbox_${index}`, checkbox.checked);
    });
}