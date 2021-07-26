function favorite1 () {
    var str = "Royal Blue!";
    var result = str.fontcolor ("#4169e1");
   document.getElementById("blue").innerHTML= result;
}

function favorite2 () {
    var str = "Forrest Green!";
    var result = str.fontcolor ("#228B22");
    document.getElementById("green").innerHTML= result;
}

function favorite3 () {
    var str = "Fire Engine Red!";
    var result = str.fontcolor ("#ce2029");
    document.getElementById("red").innerHTML= result;
}

function myFunction () {
    var sentence = "Let\'s find out";
    sentence += " my favorite colors.";
    document.getElementById ("Concatenate").innerHTML= sentence;
}