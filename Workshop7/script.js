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
// I've encountered a lot of problems with this, so in case this isn't ready by the deadline, I'll just do it in the coming week.
