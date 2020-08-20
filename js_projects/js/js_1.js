function sportCar() {
    var carOutput;
    var cars = document.getElementById("choice").value;
    switch(cars) {
        case "Porsche":
            carOutput = "Porsche is awesome but no flux capacitor!";
        break;
        case "Lamborghini":
            carOutput = "Lamborghini is cherry but no flux capacitor!";
        break;
        case "Jaguar":
            carOutput = "Jaguar is sweet but no flux capacitor!";
        break;
        case "McLaren":
            carOutput = "Mclaren is amazing but no flux capacitor!";
        break;
        case "1985 Delorean":
            carOutput = "The best choice is the 1985 Delorean, it's got a Flux Capacitor!";
        break;
        default:
            carOutput = "Please enter a car exactly as written in the list.";
    }
    document.getElementById("output").innerHTML = carOutput;
}


function changeLine() {
    var changed = document.getElementsByClassName("change");
    changed[0].innerHTML = "I have changed!";
}

var c = document.getElementById("box");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);