//Workshop 5: Smart Forms
// Exercise 1: Contact Forms

function ex1(event) {
    // Ensures the form does not actually submit
    event.preventDefault();
    // Input values and some trimming, as God intended. Removes any possible empty spaces.
    let email = document.querySelector("#email").value.trim();
    let comment = document.querySelector("#comment").value.trim();
    //Clear previous errors and styles
    document.querySelector("#email_error").innerHTML = "";
    document.querySelector("#comment_error").innerHTML = "";
    document.querySelector("#email").style.backgroundColor = "";
    document.querySelector("#comment").style.backgroundColor = "";

    //Begin by validating the email
    if (email.length >= 6 && email.length < 15 && email.includes("@")){
        // If that works out, move onto validating the comment. Does it have something? Then display the email and comment values in a neat little alert box. Also clears the bloody values.
        if(comment){ 
            alert(`Email: ${email} \nComment: ${comment.slice(0,50)}`);
            document.querySelector("#email").value = "";
            document.querySelector("#comment").value = "";

         // If the comment field does not have anything, colour it red and place an error message beside the field ("span" inside the HTML)   
        } else { 
            document.querySelector("#comment").style.backgroundColor = "red";
            document.querySelector("#comment_error").innerHTML = "Invalid Comment!";
        }

      // If the email field is empty or simply does not fit the requirements, give em an error  
    } else { 
        document.querySelector("#email").style.backgroundColor = "red";
        document.querySelector("#email_error").innerHTML = "Invalid Email!";
    }  
}

// Ended up adding and refining some things after the core funcionality had been proven working, which may have bloated the function a tiny bit. 


//Exercise 2: Membership Calculator
//Before we can properly get the numerical value from the dropdown we have use string manipulation techniques.
    // First to get the value itself from the chosen item
    // Then we must split said value from the "$" -mark, leaving us with a 00,00 format value
    // Which we must turn from a string value to a numerical value using parseFloat
function dropdown_price(){
    let dropdown = document.querySelector("#type");
    let chosen_item = dropdown.options[dropdown.selectedIndex].text; // Using "value" directly on the dropdown element doesn't actually work, instead we have to use "selectedIndex" to find out what the user has chosen and read it as text.

    let valueString = chosen_item.split("$")[1].trim(); // So, basically, it splits the string at the specified mark, turns the parts into an array, which can be selected/returned using their respective indexes. Trim removes any possible empty spaces - optional and maybe redundant, but I thought it might be neat.

    let price = parseFloat(valueString); 
    return price;
}

function number_crunching(event){
    event.preventDefault();       

    let price = dropdown_price();

    let years_string = document.querySelector("#years").value;
    let years = parseFloat(years_string);

    let totalCost = price * years;
    
    if (years >= 5){
        document.querySelector("#cost").value = `${(totalCost*0.8-5).toFixed(2)}`;
        document.querySelector("#Discount").innerHTML = "<h3>Eligible for 20% discount and $5 off!</h3>"
    } else if (years > 2 && years < 5){
            document.querySelector("#cost").value = `${(totalCost*0.8).toFixed(2)}`; // Fixed to two decimal points.
            document.querySelector("#Discount").innerHTML = "<h3>Eligible for 20% Discount!</h3>"
    } else {
        document.querySelector("#cost").value = `${totalCost.toFixed(2)}`;
    }


}

let submit = document.querySelector("#submit");
submit.addEventListener("click", number_crunching);


//Exercise 3

// shopping.js
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    'use strict';

    // For storing the order total:
    var total;

    // Get references to the form values:
    var quantity_string = document.getElementById('quantity').value;
    var quantity = parseInt(quantity_string, 10);
    var price_string = document.getElementById('price').value;
    var price = parseFloat(price_string);
    var tax_string = document.getElementById('tax').value;
    var tax = parseFloat(tax_string);
    var discount_string = document.getElementById('discount').value;
    var discount = parseFloat(discount_string);
    var shipping = document.getElementById('shipping').value;

    // Add validation here later!

    // Calculate the initial total:
    total = quantity * price;
    console.log("total before tax: " + total);

    // Make the tax rate easier to use:
    tax = tax / 100;
    tax = tax + 1;

    // Factor in the tax:
    total = total * tax;
    console.log("total after tax: " + total);

    // Factor in the discount:
    if (quantity > 100) {
        total = total - (2 * discount);
    } else {

        total = total - discount;
    }
    total = total + (1.0 * shipping);
    console.log("total after discount: " + total);

    // Format the total to two decimal places:
    total = total.toFixed(2);

    // Display the total:
    document.getElementById('total').value = total;

    // Return false to prevent submission:
    return false;

} // End of calculate() function.




// Ex4
// Function called when the window has been loaded.
// Function needs to add an event listener to the form.


const sms_check = document.querySelector("#sms");
const email_check = document.querySelector("#email_check");
const pigeon_check = document.querySelector("#pigeon");
const sms_form = document.querySelector("#sms_form");
const email_form = document.querySelector("#email_form");
const pigeon_form = document.querySelector("#pigeon_form");
function contact_formsToggle(){

    if (sms_check.checked){
        sms_form.style.display = "block";
    } else {
        sms_form.style.display = "none";
    }

    if (email_check.checked){
        email_form.style.display = "block";
    } else {
        email_form.style.display = "none";
    }

    if (pigeon_check.checked){
        pigeon_form.style.display = "block";
    } else {
        pigeon_form.style.display = "none";
    }
}

sms_check.addEventListener("change", contact_formsToggle);
email_check.addEventListener("change", contact_formsToggle);
pigeon_check.addEventListener("change", contact_formsToggle);

contact_formsToggle();

function ex4(event) {
    // Ensures the form does not actually submit
    event.preventDefault();
    // Input values and some trimming, as God intended. Removes any possible empty spaces.
    let email = document.querySelector("#email").value.trim();
    let comment = document.querySelector("#comment").value.trim();
    //Clear previous errors and styles
    document.querySelector("#email_error4").innerHTML = "";
    document.querySelector("#comment_error4").innerHTML = "";
    document.querySelector("#email4").style.backgroundColor = "";
    document.querySelector("#comment4").style.backgroundColor = "";

    //Begin by validating the email
    if (email.length >= 6 && email.length < 15 && email.includes("@")){
        // If that works out, move onto validating the comment. Does it have something? Then display the email and comment values in a neat little alert box. Also clears the bloody values.
        if(comment){ 
            alert(`Email: ${email} \nComment: ${comment.slice(0,50)}`);
            document.querySelector("#email4").value = "";
            document.querySelector("#comment4").value = "";

         // If the comment field does not have anything, colour it red and place an error message beside the field ("span" inside the HTML)   
        } else { 
            document.querySelector("#comment4").style.backgroundColor = "red";
            document.querySelector("#comment_error4").innerHTML = "Invalid Comment!";
        }

      // If the email field is empty or simply does not fit the requirements, give em an error  
    } else { 
        document.querySelector("#email4").style.backgroundColor = "red";
        document.querySelector("#email_error4").innerHTML = "Invalid Email!";
    }  
}
function init() {
    'use strict';

    // Add an event listener to the form:
    var theForm = document.getElementById('theForm');
    /* if(theForm.addEventListener){
        theForm.addEventListener("submit", code ,false);
    } */

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;