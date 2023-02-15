// Assignment 44, Concatenate Sample

function concatenate() {
    var firstWord = "Today seems ";
    var secondWord = "like a ";
    var thirdWord = "good day ";
    var fourthWord = "to go out.";
    var entire = firstWord. concat(secondWord, thirdWord, fourthWord);
    document.getElementById("concatenatesamp").innerHTML= entire;
}

// Assingmet 45, Slice Sample 

function slice_function() {
    var sentence="One of my favourite author is Elif Shafak"
    var sliced = sentence.slice(30,41)
    document.getElementById("slice").innerHTML= sliced;
}

// Challange 10 Upper Case

function upper() {
    var uppersent = "this text to be uppercased";
    var uppered = uppersent.toUpperCase();
    document.getElementById("uppercase").innerHTML = uppered;
}

// Assingmet 46, ToPrecesion

function tostr () {
    var nr= 15;
    var turned =  nr.toString();
    document.getElementById("numtostr").innerHTML = turned; + "is became a string now."
}

// Assingmet 47, Turning a number into a string

function topre (){
    var x = 1.1232131267613;
    var y= x.toPrecision(10);
    document.getElementById("precisionsamp").innerHTML = y + 
    " number is precised now."
}

// Challange 11, Try toFixed() Method

function tofix () {
    var x = 4.565;
    var y = x.toFixed();
    document.getElementById("tofixmet").innerHTML = "Rounded to: " + y;
}

// Challange 11, Try valueOF() Method
function valueof() {
var x = 5;
var y = x.valueOf();
document.getElementById("valueo").innerHTML = y;
}