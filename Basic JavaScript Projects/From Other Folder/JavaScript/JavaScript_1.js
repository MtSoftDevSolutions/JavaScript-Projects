function Band_Function() {
    var Band_Output;
    var Band = document.getElementById("Band_input").value;
    var Band_String = " is a great band/artist!";
    switch (Band) {
        case "Fleetwood Mac":
            Band_Output = "Fleetwood Mac" + Band_String;
        break;
        case "Metallica":
            Band_Output = "Metallica" + Band_String;
        break;
        case "Eminem":
            Band_Output = "Eminem" + Band_String;
        break;
        case "Grateful Dead":
            Band_Output = "Grateful Dead" + Band_String;
        break;
        default:
        Band_Output = "Please enter a band exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Band_Output;
}

//With getElementsByClassName the number in the bracket after A dictates which element will be effected
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "The text has changed!";
}
//How to create a circular gradient
var A = document.getElementById("laps");
var ABC = A.getContext("2d");
//Create Gradient
var grd = ABC.createRadialGradient(80,55,10,90,60,100);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "black");
//Fill with gradient
ABC.fillStyle = grd;
ABC.fillRect(10,10,150,80);

//How to create a linear gradient
var L = document.getElementById("line");
var LIN = L.getContext("2d");
// Create gradient
var lig = LIN.createLinearGradient (0,0,200,0);
lig.addColorStop(0, "purple");
lig.addColorStop(1, "white");
//Fill with gradient
LIN.fillStyle = lig;
LIN.fillRect(10,10,150,80);
