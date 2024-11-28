// Ex 1
var text = '{"employees" : [' +
'{"firstName":"John", "lastName":"Doe"},' +
'{"firstName":"Anna", "lastName":"Smith"},' +
'{"firstName":"Peter", "lastName":"Jones"} ]}';

const json_text = JSON.parse(text);
const employees = json_text.employees; // We use this to get the array

nameButton = document.querySelector("#nameBtn");
nameButton.addEventListener("click", displayNames);
allButton = document.querySelector("#allBtn");
allButton.addEventListener("click", displayAllData);

function displayNames(){
    let text_div = document.createElement("div");
    employees.forEach(employee => {
        let row = document.createElement("div");
        row.innerHTML = `<p>First Name: ${employee.firstName}, Last name: ${employee.lastName} </p>`;
        text_div.appendChild(row);
    })
    document.querySelector("#jsondata").appendChild(text_div);
};

// Toinen keino toteuttaa tämä. Lyhyempi, mutta joissain määrin myös "kömpelömpi" ja koen ainakin tässä vaiheessa enemmän forEach -metodin käytöstä.
// function displayNames(){
//     var output = "";
//     for (var i = 0; i < json_text.employees.length; i++){
//         output += `First Name: ${json_text.employees[i].firstName}, Last Name: ${json_text.employees[i].lastName} <br>`
//     }
//     document.querySelector("#jsondata").innerHTML = output;
// }

//Suurimmaksi osaksi toimii samalla tavoin kuin edellinen. Luodaan tyhjä muuttuja, niin pitkään kun "i" on pienempi kuin json_text_employees.length, eli pienenmpi kuin JSON sisällä olevien objektien määrä, otetaan for loopilla objektilla sisällä olevia "key" -arvoja/muuttujia ja lisätään ne tyhjään muuttujaan. Key-Value voidaan ajatella {"firstName":"Anna", "lastName":"Smith"}, jossa "firstName" on key ja "Anna" value, "lastName" key ja "Smith" value. 
// Täten for loop hakee kaikki Keyt, voimme ajatella myös nimikkeinä, ja niiden arvot, eli nimet tässä tapauksessa.
// function displayAllData (){
//     var output = "";
//     for (var i = 0; i < json_text.employees.length; i++){
//         for (var key in json_text.employees[i]){
//             output += `${key}:${json_text.employees[i][key]}, `   
//         }
//         output += "<br>"
//     }
//     document.querySelector("#jsondata").innerHTML = output;
// }
// Testi forEachia käyttäen. Ehkä hieman selkeämpi kuin aikaisempi.
function displayAllData(){
    var output = "";

    json_text.employees.forEach(function(employee){
        for (var key in employee){
            output += `${key}:${employee[key]}`;
        }
        output += `<br>`;
    })

    document.querySelector("#jsondata").innerHTML = output;

};


//Ex 2
let dataBtn = document.querySelector("#rawdata_btn");
let parseBtn = document.querySelector("#parse_btn");
let data_div = document.querySelector("#rawdata");

const apiURL = "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";
dataBtn.addEventListener("click", getRawData);


function getRawData(){


    fetch(apiURL)
        .then(response => {
            if (!response.ok){
                throw new Error('Response not OK');
            }
            return response.json();
        })
        .then(data =>{
            data_div.innerHTML = JSON.stringify(data);
        })
        .catch(error =>{
            console.error(`Error: ${error}`);
        })
}

parseBtn.addEventListener("click", parseData);

function parseData(){
    let table = document.createElement("table");
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const movies = data.Search;
            movies.forEach(movie => {
                let title = movie.Title;
                let year = movie.Year;
                let imbdbID = movie.imdbID;
                let type = movie.Type;
                let poster = movie.Poster;

                let row = document.createElement("tr");
                row.innerHTML = `
                <td>${title}</td>
                <td>${year}</td>
                <td>${imbdbID}</td>
                <td>${type}</td>
                <td><img src="${poster}"></td>
                `;
                table.appendChild(row);
            })


            data_div.appendChild(table);
        })

        .catch(error =>{
            console.error(`Error: ${error}`);
        })

}

//EX3
//API piilotettu Githubin julkisen luonteen vuoksi

let dropdownList = document.querySelector("#city");
let weatherBtn = document.querySelector("#weather_button");
let weatherDiv = document.querySelector("#weatherdata");

// weatherBtn.addEventListener("click", getWeather);
dropdownList.addEventListener("change", getWeather);

//Tässä vaiheessa API on hyvä olla funktion sisällä dynaamisten muutosten vuoksi.
function getWeather(){
    let query = dropdownList.value;
    const WeatherAPI = `https://papi.openweathermap.org/data/2.5/weather?q=${query}APPID=b11a8d4aabcd83004344fac1c79b5b51$units=metric`;
    fetch(WeatherAPI)
        .then(response =>{
            if (!response.ok){
                throw new Error ("Weather Machine Broke");
            }
            return response.json();
        })
        .then(data =>{
            let temperature = data.main.temp;
            let humidity = data.main.humidity;
            let clouds = data.clouds.all;
            
            weatherDiv.innerHTML = `
            <td>Temp: ${temperature}</td>
            <td>Humidity: ${humidity}</td>
            <td>Cloudy: ${clouds}</td>`;
            
        })


}

//Myönnettäköön suoraan, että minulla on aika paljon ilmenny Cross-Origin Request ongelmia näiden API tehtävien kanssa, jopa Moesif CORS lisäosan kanssa, sekä eri selaimilla, että jätän tämän tehtävän tähän. Seuraava vaihe olisi hakukentän muuttujien ja napin julistaminen ja funktion muokkaaminen siten että se hakee tietoa annetusti. Joissain määrin samanlainen toimintaperiaate kuin tekemässäni AJAX-projektissa.