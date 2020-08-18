function rideFunction() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("keywords_and_constructors").innerHTML = 
    `Erik drives a ${Erik.vehicle_color}-colored ${Erik.vehicle_model} manufactured in ${Erik.vehicle_year}`;
}

function countFunction() {
    document.getElementById("counting").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plusOne() {
            starting_point += 1;
        }
        plusOne();
        return starting_point;
    }
}