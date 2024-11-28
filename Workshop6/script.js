
//ex1
let button1 = document.querySelector("#button");
button1.addEventListener("click", SaveData);

function SaveData(){
    let destination = document.querySelector("#destination").value;
    let arrival = document.querySelector("#arrival").value;

    localStorage.setItem("destination", destination);
    localStorage.setItem("arrival", arrival);
    
    let checkboxes = document.querySelectorAll("#services input[type='checkbox']");
    checkboxes.forEach((checkbox, index) => {
        localStorage.setItem(`checkbox_${index}`, checkbox.checked);
    });
}

//ex2
//I recognise that the instructions recommend I use an "onload" -function on the "body"-div, but after some investigation I've come to the conclusion that DOMContentLoaded accomplishes the same results and may even be more useful.
document.addEventListener("DOMContentLoaded", Check_GetData);

function Check_GetData(){
    let target = document.querySelector("#sessiondata");

    // Tsekataan löytyykö kyseisen nimisestä localStorage "lokerosta" mitään ja jos löytyy, tungetaan se omaan diviin ja tungetaan
    if(localStorage.getItem("destination")){
        // Uuden divin luominen jokaista elementtiä arten helpottaa niiden lisäämistä ja myöhempää hallintointia kun ne ovat "sessiondata" id:n sisällä
        let destination = document.createElement("div"); 
        destination.textContent = localStorage.getItem ("destination");
        target.appendChild(destination);
    }
    if(localStorage.getItem("arrival")){
        let arrival = document.createElement("div");
        arrival.textContent = localStorage.getItem("arrival");
        target.appendChild(arrival);
    }


    // Aloittaa index 0:sta ja niin pitkään kuin indexejä löytyy, eli ei ole null, kirjoittaa kyseisen Checkboxin tilan diviin, siten, että siihen tulee checkboxin index + 1, tarkistetaan tila, mikäli totta, kirjataan "checked", mikäli ei, "unchecked". Jännä.
    let index = 0;
    while (localStorage.getItem(`checkbox_${index}`) !== null){
        let checkboxes = document.createElement("div");
        checkboxes.textContent = `Checkbox ${index + 1}: ${localStorage.getItem(`checkbox_${index}`) === `true` ? `Checked` : `Unchecked`}`;
        target.appendChild(checkboxes);
        index++;
    }
}

//Ex3
let button2 = document.querySelector("#button3");
button2.addEventListener("click", SaveData3);

function SaveData3(){
    let destination3 = document.querySelector("#destination3").value;
    let arrival3 = document.querySelector("#arrival3").value;

    sessionStorage.setItem("destination3", destination3);
    sessionStorage.setItem("arrival3", arrival3);
    
    // I've finally understood the logic behind the elusive "=>", it's a simpler way of declaring an undefined function. Probably. Most likely.
    let checkboxes = document.querySelectorAll("#services3 input[type='checkbox']");
    checkboxes.forEach((checkbox, index) => {
        sessionStorage.setItem(`checkbox_${index}`, checkbox.checked);
    });
}

//Session storage voisi olla hyödyllinen väliaikaisten ja arkaluontoisten tietojen säilyttämistä varten, kerta luontoisten notifikaatioiden/ilmoitusten luonnissa, sekä käyttäjän session autentikoimisessa. Luonnollisesti niissä olisi jotain vahvempia suojia, mutta näin yleisesti ajateltuna.
//Local Storageen voisi tunkea käyttäjän kirjautumistietoja, sivustojen UI-asetuksia(Dark/Light Mode, fonttikoot, jne), rakkaita evästeitä, esim. ostoskori tietoja, ja kieliasetuksia. Semmosia mukavia.