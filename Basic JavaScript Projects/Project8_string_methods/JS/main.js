function full_Sentence() {
    var part_1 = "The Declaration of Independence ";
    var part_2 = "was a warning to the king of England ";
    var part_3 = "it was not, as many people believe, ";
    var part_4 = "intended to start a war.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById ("Concatenate").innerHTML = whole_sentence;
}

function sliceroni() {
    let str = "Apple, Ninja, Supreme, Panther";
    document.getElementById("Slice").innerHTML = str.slice(14,21);
}

function uppers() {
    let text = document.getElementById("uppers").innerHTML;
    document.getElementById("uppers").innerHTML =
    text.toUpperCase();
}

function searching() {
    let str = "Life, Monopoly, Battleship, Twister";
    document.getElementById ("searching").innerHTML = str.search("Battleship");
}

function Number_to_strings () {
    var X = 105;
    document.getElementById("numstostrings").innerHTML = X.toString();
}

function precision_Method() {
    var X = 199.3567891234567;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function myFunction() {
    var num = 10.23456789;
    var n = num.toFixed(2);
    document.getElementById("pay").innerHTML = n;
  }

function worldy() {
    let str = "Hola, my compadre";
    document.getElementById("Hola").innerHTML = str.valueOf();
}
