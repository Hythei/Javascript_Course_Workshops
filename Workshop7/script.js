//Ex1
let button = document.querySelector("#Fetch");
button.addEventListener("click", parseData);
function parseData(){
    let quotes = document.getElementsByTagName("quotes");
    let author = document.getElementsByTagName("author");
    
    for (let i = 0; i < quotes.length; i++){
        let quotesText = quotes[i].textContent;
        let authorsText = author[i].textContent;

        console.log(quotesText + authorsText);
        let long_sentence = quotesText + authorsText;
        document.querySelector("pre").append(long_sentence);
    }
}

//Pukkaa crossorigin erroria molemmista annetuista linkeistä, mutta olettaen että ne toimisivat, alla olevien pitäis olle kelpo scriptejä.
//ex2
let button2 = document.querySelector("#Fetch2");
button2.addEventListener("click", loadXMLFile);
function loadXMLFile(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET","http://iceberg-cycle.codio.io/5:%20Asynchronous%20JavaScript%20(AJAX)/famous-quotes.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.querySelector("#quotes").textContent = xmlhttp.responseText;
        }
    }
}


// ex3
let button3 = document.querySelector("#Fetch3");
let table3 = document.querySelector("#tabledata");
button3.addEventListener("click", loadXMLFile3);
function loadXMLFile3(){
    var xmlhttp = new XMLHttpRequest();
    const quote_table = document.createElement('table');


    xmlhttp.open("GET","http://iceberg-cycle.codio.io/5:%20Asynchronous%20JavaScript%20(AJAX)/famous-quotes.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            const xmlDOC = xmlhttp.responseXML;
            const quotes = xmlDOC.getElementsByTagName("quote");
            const tbody = quote_table.querySelector('tbody');

            for (let i = 0; i < quotes.length; i++){
                const quoteTEXT = quotes[i].getElementsByTagName("quotation")[0].textContent;
                const authorTEXT = quotes[i].getElementsByTagName("author")[0].textContent;

                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${quoteTEXT}</td>
                <td>${authorTEXT}</td>
                `;
                tbody.appendChild(row);
            }
            quote_table.innerHTML = '';
            quote_table.appendChild(tbody);
        }
    }
}