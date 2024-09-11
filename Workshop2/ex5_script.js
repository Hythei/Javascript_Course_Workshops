var images =[
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
];

// // document.write('<img src="' + images[0] + '">');
// document.write('<img src="' + images[0] + '" alt="Image 1">');

// Muutaman kerran tuli vastaan "A call to document.write() from an asynchronously-loaded external script was ignored." -virhe ja pienen tutkimisen jälkeen päätin etten kiduta itseäni enempää ja siirryn käyttämään innerhtml:ää.

function randomImage(){
    let random = Math.floor(Math.random()*images.length);
    return random;
}

var random = randomImage();

var imageT = document.getElementById("image_Target");
imageT.innerHTML = '<img src="' + images[random] + '" alt="Image 1">';