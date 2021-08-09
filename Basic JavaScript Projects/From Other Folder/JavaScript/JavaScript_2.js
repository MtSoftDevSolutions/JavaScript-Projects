function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var a = document.forms["myForm"]["lname"].value;
    var b = document.forms["myForm"]["email"].value;
    var c = document.forms["myForm"]["phone"].value;
    if (x == null || x == "") {
        alert ("First name must be included");
        return false;
    }
    if (a == null || a == "" ) {
        alert ("Last name must be included");
        return false;
    }
    if (b == null || b == "") {
        alert ("email must be included");
        return false;
    }
    if (c == null || c == "") {
        alert ("phone number must be included");
    }
    
}

function Thanks() {
    window.alert ("Thank you for your submission");
    
}