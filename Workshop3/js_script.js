// Exercise 1
//1,2

document.getElementById("clickBtn").addEventListener("click", function(){
    alert("You clicked me!" + "\n"  + Date());
});

//3
//document.write() ei ole suositeltu modernissa JavaScriptissä koska se korvaa koko sivun sisällön ja saattaa aiheuttaa ongelmia, joten päätin pienen tutkinnan jälkeen siirtyä käyttämään innerHTML:ää.
const tableBtn = document.getElementById("tableBtn");
const taulukko = document.getElementById("taulukko");
const geolocation = document.getElementById("geolocationBtn");

tableBtn.addEventListener("click", showTable);

// Näyttää taulukon, mutta ei piilota sitä takaisin.
function showTable(){
    taulukko.style.display = "block";
    taulukko.innerHTML = `
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>$320,800</td>
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>$170,750</td>
                </tr>
                <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>$86,000</td>
                </tr>
                <tr>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>$433,060</td>
                </tr>
                <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>$162,700</td>
                </tr>              
            </tbody>`;
}

// Toinen showTable funktio, joka piilottaa taulukon takaisin.
// function showTable(){
//     if (taulukko.style.display === "none"){
//         taulukko.style.display = "block";
//         taulukko.innerHTML = `
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Position</th>
//                     <th>Salary</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Tiger Nixon</td>
//                     <td>System Architect</td>
//                     <td>$320,800</td>
//                 </tr>
//                 <tr>
//                     <td>Garrett Winters</td>
//                     <td>Accountant</td>
//                     <td>$170,750</td>
//                 </tr>
//                 <tr>
//                     <td>Ashton Cox</td>
//                     <td>Junior Technical Author</td>
//                     <td>$86,000</td>
//                 </tr>
//                 <tr>
//                     <td>Cedric Kelly</td>
//                     <td>Senior Javascript Developer</td>
//                     <td>$433,060</td>
//                 </tr>
//                 <tr>
//                     <td>Airi Satou</td>
//                     <td>Accountant</td>
//                     <td>$162,700</td>
//                 </tr>              
//             </tbody>`
//         tableBtn.textContent = "Hide Table";
//     }
//     else{
//         taulukko.style.display = "none";
//         tableBtn.textContent = "Show Table";        
//     }
// };

function showPosition(position){
    const{ latitude, longitude } = position.coords;
    const locationString = `Latitude: ${latitude}, longitude: ${longitude}`;

    geolocationBtn.innerHTML = locationString;

    console.log(`Latitude: ${latitude}, longitude: ${longitude}`);
}

function GeolocatiotClick(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        geolocationBtn.innerHTML = "Geolocation is not supported by this browser.";
    }
}

geolocation.addEventListener("click", GeolocatiotClick);

// Exercise 2
const ex2 = document.getElementById("ex2");
ex2.addEventListener("mouseover", function(){console.log("Stepped over my a mouse!");});
ex2.addEventListener("mouseout", function(){console.log("Bye Bye mouse!");});

// Exercise 3
const textArea = document.getElementById("textdata");

// textArea.onfocus = function(){
//     textArea.innerHTML = "Please fill in the form with proper data.";
//     textArea.style.background = "red";
// };

// var keypresses = 0;
// textArea.addEventListener("keydown", function(){

//     keypresses++;
//     textArea.innerHTML = "You have pressed a key " + keypresses + " times.";
//     event.preventDefault();
// });

const formBtn = document.getElementById("formBtn");


formBtn.addEventListener("click", function(){
    var trimmedText = textArea.value.trim();    
    if (trimmedText === ""){
        alert("Please fill in the form with proper data.");
        event.preventDefault();
    }
});


// Exercise 4
const area = document.getElementById("coordinates");
const coords = document.getElementById("coords");

area.addEventListener("mousemove", function(){
    let x = event.clientX;
    let y = event.clientY;
    console.log("X: " + x + " Y: " + y);
    area.innerHTML = "X: " + x + " Y: " + y;
    coords.innerHTML = "X: " + x + " Y: " + y;
})
