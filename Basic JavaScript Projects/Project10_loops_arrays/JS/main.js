//Working with loops
function Call_Loop() {
    let text = "";
    let i = 0;
    
while (i < 10) { //while the number (i) is less than 10, do this:
    text += "<br>The number is " + i; 
    i++;
}
document.getElementById("Loop").innerHTML = text; //document.getElementById will allow you to use the function in HTML. For HTML to use any function, you need an id and function name
}

function Stlen () {
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    document.getElementById("lengthy").innerHTML = text.length; //text.length will measure how many characters you have in a given string, in this case a variable is assigned to a string.
}
//Following function will display all the instruments in the group
var Instruments = ["Guitar", "Mandolin", "Ukulele", "Drums", "Banjo", "Stand-up Bass", "Clarinet", "Dulcimer"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//this following function assigns different balls to each number, so that when ball 1 is used as an example 
//it will say this is a football.
function array_Function() {
    var Ball = [];
    Ball [0] = "tennis ball";
    Ball [1] = "football";
    Ball [2] = "soccer ball";
    Ball [3] = "golf ball";
    Ball [4] = "whiffle ball"
    document.getElementById("Array").innerHTML = "This is a " + 
    Ball [1] + ".";
}
//Following function will say Kiwis are green because I changed it from what was originally assigned
// within the bracket in line 43.
function constant_function() {
    const Fruit = {smell:"ripe", color:"brown", taste:"sweet and seedy"};
    Fruit.color = "green";
    Fruit.price = "$1";
    document.getElementById("Constant").innerHTML = "Kiwis that smell " + Fruit.smell + " should cost " + Fruit.price + " and they will taste " + Fruit.taste +"." 
    + "<br>" + "Kiwis that are " + Fruit.color + " should be fine. ";
}
// let and var have many similarities, however because let was encapsulated within an encapsuation
//there will only be one instance where F is equal to 460.
function let_Var() {
    {var F = 46;
    document.write (F);
    {
        let F = 460;
        document.write ("<br>" + F);
    }
    document.write ("<br>" + F);
    }
    document.getElementById("let_Var").innerHTML = F;
}
//basic math
function calcy() 
    {
        var X= 99;
        var Y = 101;
        var Z = Y * X;
        return Z;
    }
    

var text = calcy()

document.write(text)
//this. uses the variables that were assigned to this specific person
let person = {
    firstName: "Michael",
    lastName: "Jordan",
    id: 4567,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("person").innerHTML = person.fullName();
//break will stop the function as soon as the number gets to 3 (in essence the function gets broken)
let scooby = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  scooby += "The number is " + i + "<br>";
}
document.getElementById("countess_Dracula").innerHTML = scooby;
//whereas break stopped the function, continue will skip past 3
let G = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  G += "The number is " + i + "<br>";
}
document.getElementById("count_Dracula").innerHTML = G;