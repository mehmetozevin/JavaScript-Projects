// Assignment 39, Globacl, Local Variables
let x = 5;
let y = 5;

let result = 0;


if(x == 5) {
   let result = x + y ;  //this here becomes local as they are in the curly braces, therefore cant be reached
}

console.log(result)

// Assignment 40, getHour function

function datew () {
    if (new Date().getHours() < 10)
    document.getElementById("datework").innerHTML = "its still early, sleep a bit more!";

}
// Assignment 41, first If statement
function firstIf () {
if ( 12 < 18 )
document.getElementById("resultdisp").innerHTML = "it is indeed";
}


// Assignment 42, Customized If Else Sample

function option() {
    var answer = document.getElementById("burger").value ;
    if (answer == "yes" | "Yes") {
        result="I will make your burger extra large";
    }
    else {
        result="Your Burger will be normal size";
    }
document.getElementById("your_answer").innerHTML = result;
}

// Assignment 42 Else If Sample
function time_function () {
    var time = new Date().getHours();
    var reply;
    if (time < 12 && time > 0) {
    reply = " It is the morning"
    }
    else if ( time >= 13 && time <=17) {
    reply = "it is the afternoon";}
    else {
        reply="its the evening"
    }
    document.getElementById("time_of_day").innerHTML = reply;
}
