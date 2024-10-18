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