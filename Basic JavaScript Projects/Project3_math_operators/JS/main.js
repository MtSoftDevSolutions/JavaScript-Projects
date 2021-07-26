//.innerHTML will be the text that shows after the transformation
//You can change the id name and the function name to whatever fits, at this time I believe the only thing that can't change is how the var is set up.
//How to add with known variables
function addition_Function() {
    var addition = 4 + 10;
    document.getElementById("MathAdd").innerHTML = "4 + 10 = " + addition;
}

//How to subtract with known variables
function subtraction_Function() {
    var subtraction = 16 - 9;
    document.getElementById("MathSub").innerHTML = "16 - 9 = " + subtraction;
}

//How to multiply with known variables
function multiplication() {
    var simple_Math = 111 * 888;
    document.getElementById ("MathMulti").innerHTML = "111 x 888 = " + simple_Math;
}

//How to divide with known variables
function division() {
    var simple_Math = 44 / 11;
    document.getElementById ("MathDiv").innerHTML = "44 / 11 = " + simple_Math;
}

//How to do a complex math problem
function more_Math() {
    var simple_Math = (10 + 12) * 99 / 12 - 7;
    document.getElementById("complexMath").innerHTML = "10 plus 12, multiplied by 99, divided by 12 and then subtracted by 7 equals "
    + simple_Math;
}

//How to find remainders
function modulus_Operator() {
    var simple_Math = 400 % 107;
    document.getElementById("remainder").innerHTML = "There should be a remainder to 400 / 107 which is " + simple_Math;

}

//Negation Operator
function make_Negative() {
    var x = 100;
    document.getElementById("makeneg").innerHTML = -x;
}

//Increments
function make_Bigger() {
    var x = 200;
    x++;
    document.getElementById("increment").innerHTML = x;
    
}

//Decrements
function make_Smaller () {
    var x = 200;
    x--;
    document.getElementById("decrement").innerHTML = x;
}

window.alert (Math.random()*100)