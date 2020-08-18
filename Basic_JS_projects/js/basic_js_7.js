var x = 72;

function globalOne() {
    num = x * 125;
    document.getElementById("global").innerHTML = num;
}

function localOne() {
    y = 52;
    num = y * 125;
    document.getElementById("local").innerHTML = num;
}

function get_Date() {
    if (new Date().getHours() >= 5 && new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    } else if (new Date().getHours() >= 18 && new Date().getHours() < 22) {
        document.getElementById("greeting").innerHTML = "How are you this evening?"
    } else {
        document.getElementById("greeting").innerHTML = "Have a good night, talk to you in the morning!"
    }
}

function weekendIf() {
    if (x >= 72) {
        document.getElementById("condition").innerHTML = "The weekend is too far away!"
    } else {
        document.getElementById("condition").innerHTML = "Almost to the weekend!"
    }
}