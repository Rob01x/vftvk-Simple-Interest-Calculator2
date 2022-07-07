function compute() {
    //validation
    // Get the value of the input with id="principal"
    let x = document.getElementById("principal").value;
    // If x is 0 or a negative number or button clicked without amount input
    let text;
    if (x == "", x <= 1) {
        //If there is no input, 0 or negative number alert reads 
        text = "Enter a positive number";
    } else {
        //If whole number is entered alert says
        text = "Input OK";
    }
    document.getElementById("alert").innerHTML = text;


var principal = documentElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
document.getElementById("rate").onchange=function() {updateRate()};
document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
{
    p = document.getElementById("principal").value; 
}
}