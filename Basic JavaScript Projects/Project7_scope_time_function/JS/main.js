var X=40;
function Multiply_numbers_1() {
    document.getElementById("mult1").innerHTML = (20*X + "<br>");
}

function addNumbers () {
    var T = 300
    document.getElementById("addy").innerHTML = (65 + T + "<br>");
}
function addNumbers2 () {
    console.log (N)
    document.getElementById("addy2").innerHTML = (65 + N + "<br>");
    
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}


function mercury() {
    var temp = window.prompt ("How hot is it outside?");
    let prompt;
    if (temp > 90) {
        prompt = "Good day for a pool day!";
    }
    else if (temp > 50 && temp <= 90) {
        prompt= "The temp is just right.";
    }
    else {
        prompt= "Dress warm.";
    }
    document.getElementById("temp").innerHTML = prompt;
}
    
