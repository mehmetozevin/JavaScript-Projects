// Counting Ten 

function countloop() {
    var digit = "" ;
    var x = 1;
    while (x < 11) {
        digit += "<br>" + x;
        x ++;
    }
    document.getElementById("countingten").innerHTML= digit;

}

// Challange 13, Length Property

let x= "This is Mehmet speaking.."
let lengthsample = x.length;

console.log(x);
console.log(lengthsample);

// Assignment 51, writing a for loop sample 


var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function for_loop () {
    for (y= 0 ; y < instruments.length; y++) {
        content += instruments[y] + "<br>"
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

// Assignment 52, Array within a function

function feelings_func() {
    var feelings = [];
    feelings [1]= " happy.";
    feelings [2]=  " sad.";
    feelings [3]= " worried.";
    feelings [4]= " scared.";
    feelings [5] = " excited.";
    document.getElementById("persons").innerHTML = "They felt" + feelings[4];

}

// Assignment 53, Create an Object with using const 

const vehicle = {   
    make: 'Toyota',   
    model: 'Camry',   
    year: 2023,   
    color: 'blue',   
    isRunning: false };

function constant_function() {   
    document.getElementById("constant").innerHTML = "This vehicle is a " 
    + vehicle.color 
    + " " + vehicle.make + " " 
    + vehicle.model + " from " 
    + vehicle.year + "."; 
}


// Assignment 54, let keyword

var  u = 16
function letkeyw() {
 let u = 32
 document.getElementById("letsamp").innerHTML = u;
}
document.getElementById("letsamp").innerHTML = u;

//Chalange 14, Return statement

function returnFunction (a,b) {
    return (a*a) + b;
}
var g = returnFunction (10,11)
document.getElementById("returnsamp").innerHTML = g;

// Assignment 55, Creating an Object with let

let guitar = {
    make: "Washburn",
    model: "2001",
    type: "classic",
    color: "mahogany",
    description : function functionObject() {
        return "This guitar is " + this.make + "brand and it was made in "
        + this.model + ". Its a " + this.type +" guitar and it is " + this.color + " coloured."
    }
};
document.getElementById("objectsamp").innerHTML = guitar.description();


// Challange 15, Write a loop with a break


let text = "";
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
document.getElementById("loopbr").innerHTML= text;


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let breaksam = "";

list: {
    breaksam += cars[0] + "<br>"; 
    breaksam += cars[1] + "<br>"; 
  break list;
    breaksam += cars[2] + "<br>"; 
    breaksam += cars[3] + "<br>"; 
}

document.getElementById("demobreak").innerHTML = breaksam;

// Challange 15, Write a loop with continue
let cont = "";
for (let i = 1; i < 8; i++) {
  if (i === 2 || i === 3) continue;
  cont += i + "<br>";
}
document.getElementById("continuedemo").innerHTML = cont;
