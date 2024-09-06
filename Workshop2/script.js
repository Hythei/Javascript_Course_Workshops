// Exercise 1
document.write("<cite><strong><p>If I had nine hours to chop down a tree, I'd spend the first six sharpening my ax.</p></strong><br>-Abraham Lincoln</cite><br>")


// Exercise 2
// While loop

// function repeatingText(phrase, repeats){
//     var i = 0;
//     while (i < repeats){
//         document.write(phrase + "<br>");
//         i++;
//     }
// }

// repeatingText("Testiteksi tekstinä",50);

// For loop
// function repeatingText(phrase, repeats){
//     for (var i = 0; i < repeats; i++) {
//         document.write(phrase + "<br>");
//     }
// }
// repeatingText("Testi for loopilla", 50);

// Helpompi kun muuttuja voidaasn määrittää for loopin sisällä, ehdon, ja toiminnan kanssa.

// Array ja join() -metodit
function repeatingText(phrase, repeats){
    document.write(Array(repeats).fill(phrase).join("<br>")+ "<br>");
}
repeatingText("Testi arraylla", 50);

// Monimutkaisen oloinen ja hieman vaikea intuitiivisesti ymmärtää verrattuna edellisiin.

