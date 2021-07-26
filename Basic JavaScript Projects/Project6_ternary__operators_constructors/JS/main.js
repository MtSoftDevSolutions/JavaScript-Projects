function Age_Function () {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Voter").innerHTML = Can_vote + " to vote.";
}

//Constructor Learning

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//New keyword

function Sport(style, number, equipment) {
    this.Sport_style = style;
    this.Sport_number = number;
    this.Sport_equipment = equipment;
}
var Golf = new Sport ("casual", "4", "clubs");
function lifeLessons () {
    document.getElementById("New_and_This").innerHTML = 
    "Golf is a " + Golf.Sport_style + " sport that is very popular " + " The max number of players per round is " + Golf.Sport_number + 
    " The equipment used includes " + Golf.Sport_equipment;
}

function strawberry () {
    document.getElementById ("Nested_Function").innerHTML = Count ();
    function Count () {
        var Starting_point = 1;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}