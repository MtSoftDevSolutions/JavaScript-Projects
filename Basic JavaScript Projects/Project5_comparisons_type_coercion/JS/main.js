//typeof will tell me what type of variable I'm working with
function my_Decision() {
var x =  (typeof 3);
document.getElementById ("tellme").innerHTML = x;
}

//This is a coercion because a string cannot be added to an integer
function my_Decision1() {
    var x = ("10" + 5);
    document.getElementById ("tellmewhy").innerHTML = x;
}

//How to get a NaN
function isitnot() {
    document.getElementById("nono").innerHTML = 0/0;
}

//Is Nan asks if this value is a number, which it isn't 
//because I have a string here. The result will be true, because the question is asked in a negative
function notisit() {
    document.getElementById("yeahno").innerHTML = isNaN ('Rainbow Lake');
}

//This condition will make isNaN false, because bellow is a number
function grapefruit () {
    document.getElementById("yesactually").innerHTML = isNaN(777);
}

//Infinity will be displayed for the following
function grapeshot() {
    var x = (4E310);
    document.getElementById("grapeshots").innerHTML = x;
}

function halfpipe() {
    var x = (-4E310);
    document.getElementById("halfpipes").innerHTML = x;
}

//Boolean
function ice() {
    var x = (10>9);
    document.getElementById("datruth").innerHTML = x;
}

function cream() {
    var x = (9>10);
    document.getElementById("dalies").innerHTML = x;
}

//console.log
console.log (99 - 1);

//==
function spoon() {
    var x = (10==10);
    document.getElementById ("spoons").innerHTML = x;
}

function fork() {
    var x = (10==8);
    document.getElementById ("forks").innerHTML = x;
}

//===
function jjs() {
    var X = 4/24/87;
    var Y = 4/24/87;
    var Z = (X===Y);
    document.getElementById ("jj").innerHTML = Z;
}
function tripleequals() {
    var X = 4;
    var Y = "78";
    var Z = (X===Y);
    document.getElementById("palls").innerHTML = Z;
}
function nunu() {
    var X = 4/24/87;
    var Y = "4/24/87";
    var Z = (X===Y);
    document.getElementById("nunus").innerHTML = Z;
}
function nope() {
    var X = 4/24/87;
    var Y = 9/24/86;
    var Z = (X===Y);
    document.getElementById("noway").innerHTML = Z;
}

//&& ||
function lifetime() {
    var X = (16 > 12 && 10 > 4);
    document.getElementById("lifetimes").innerHTML = X;
}

function secondlifetime () {
    var X = (5 > 20 || 5 > 2);
    document.getElementById("second").innerHTML = X;
}
function nlifetime() {
    var X = (16 > 12 && 10 > 40);
    document.getElementById("nlifetimes").innerHTML = X;
}

function nsecondlifetime () {
    var X = (5 > 20 || 5 > 10);
    document.getElementById("nsecond").innerHTML = X;
}

//Not 
function notright() {
    document.getElementById("noping").innerHTML = !(20>10);
}

function vape() {
    document.getElementById("maybes").innerHTML = !(10>20);
}