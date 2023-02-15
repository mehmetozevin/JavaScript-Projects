// Assignment 35, Ternary Operator Sample

function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short ":"You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

// Challange 8, Ternarary sample

function voting(){
    var age, can_vote;
    age= document.getElementById("vote").value;
    can_vote= ( age>=18 ) ? "You are allowed " : "You are underage ";
    document.getElementById("result_vote").innerHTML = can_vote + "to vote.";
}

// Assignment 36, write the codes
function vehicle (make, model, year, colour) {
    this.vehicle_make= make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_colour = colour;
}

var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle ("Ford", "Pinto", 1971, "Mustard");

function my_function () {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.vehicle_colour + "-coloured " + Erik.vehicle_model + " manufactured in "
    + Erik.vehicle_year;
}

// Assignment 37, utilizing the new keyword


var Mehmet = new vehicle ("Opel", "Corsa", 2013, "White")
function new_func(){
document.getElementById("New_and_This").innerHTML = "Mehmet drives an " + Mehmet.vehicle_make + " that is manufactured in " + Mehmet.vehicle_year;
}

//Challenge 9, Assign a variable to a reserved word
function reservedword () {
  var thiss = "reserved word will be displayed";
  document.getElementById("reservedwordid").innerHTML = thiss;
}
// when this converted to thiss, it works.But "this" cant be assigned



//Assingment 38, Nested Function
var Starting_point = 9;
function count_Function () {
    document.getElementById("nested_function").innerHTML = Count();
    function Count() {
        function Plus_one () {Starting_point += 1;}
        Plus_one () ;
        return Starting_point;
    }
}

