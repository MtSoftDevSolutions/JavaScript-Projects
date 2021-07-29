function Call_Loop() {
    let text = "";
    let i = 0;
    
while (i < 10) {
    text += "<br>The number is " + i;
    i++;
}
document.getElementById("Loop").innerHTML = text;
}

function Stlen () {
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    document.getElementById("lengthy").innerHTML = text.length;
}

var Instruments = ["Guitar", "Mandolin", "Ukulele", "Drums", "Banjo", "Stand-up Bass", "Clarinet", "Dulcimer"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

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

function constant_function() {
    const Fruit = {smell:"ripe", color:"brown", taste:"sweet and seedy"};
    Fruit.color = "green";
    Fruit.price = "$1";
    document.getElementById("Constant").innerHTML = "Kiwis that smell " + Fruit.smell + " should cost " + Fruit.price + " and they will taste " + Fruit.taste +"." 
    + "<br>" + "Kiwis that are " + Fruit.color + " should be fine. ";
}

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

function calcy() 
    {
        var X= 99;
        var Y = 101;
        var Z = Y * X;
        return Z;
    }
    

var text = calcy()

document.write(text)

let person = {
    firstName: "Michael",
    lastName: "Jordan",
    id: 4567,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("person").innerHTML = person.fullName();

let scooby = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  scooby += "The number is " + i + "<br>";
}
document.getElementById("countess_Dracula").innerHTML = scooby;
let G = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  G += "The number is " + i + "<br>";
}
document.getElementById("count_Dracula").innerHTML = G;