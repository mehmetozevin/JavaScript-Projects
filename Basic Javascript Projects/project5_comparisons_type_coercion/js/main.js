// Assignment 26, applying type of operator

// document.write(typeof 10.202)


 //result will display nan
function nan_sample (a,b) {
    document.getElementById("notanumber").innerHTML = a / b ;
}


//checking Nan will result in true
function checking_nan () {
    document.getElementById("notanumber1").innerHTML = isNaN("This is a string");
}


//checking Nan will result in false
function checking_nan2 () {
    document.getElementById("notanumber2").innerHTML = isNaN("007");
}
//positive infinity
function posin() {
    document.getElementById("positiveinfinity").innerHTML = (2E310)
}
//Negative infinity
function negin() {
    document.getElementById("negativeinfinity").innerHTML = (-3E310)
}

// Assignment 28, t/f boolean logic sample

function booltrue (a,b) {
    document.getElementById("booleantrue").innerHTML =  (a > b);
}

function boolfalse (a,b) {
    document.getElementById("booleanfalse").innerHTML =  (b < a);
}

// Assignment 29, Logs in Console
console.log (10>3)
console.log(2+2)
console.log("this is a string to be written in console")

// Assignment 30, Type Coercion Sample
console.log("23" + 21)

// Challange 7, Displayin false in console log
console.log(10 == 9)

// Assignment 31, == True/False Samples
function equalitytrue (a,b){
    document.getElementById("equaltrue").innerHTML = a==b ;
}

function equalityfalse (a,b){
    document.getElementById("equalfalse").innerHTML = a==b ;
}

// Assignment 32, === T/F samples

let x=(80+2),
y=12,
a="82",
b="12",
c=82,
d=12

console.log(a==x) //this results in true, same value,differnt data type
console.log(a===x) //this results in false as the data types are different
console.log(c===x) //this results true, same value and data type
console.log(c===d) // false, same data type, differnt value

// Assignment 33, Using && and ||

console.log(y<c && c==x) // both correct, results true with &
console.log(y<c && c==b) // result in false, as c isnt equal b
console.log(y<c || c==b) // as the first one is correct, resulted in true
console.log(y>c || c==b)//neither of them is true, results in false

//Assignment 34, Not operator
function not_function (a,b) {
document.getElementById("nottrue").innerHTML = !(5>6);
}

function not_functionFalse (a,b) {
document.getElementById("notfalse").innerHTML = !(10>6);
}

