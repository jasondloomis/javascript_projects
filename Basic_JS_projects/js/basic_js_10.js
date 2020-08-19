var locations = ["Cabo", "Los Angeles", "Cancun", "Chicago", "Fort Worth", "Panama City"];
var content = "";
var y;

function callLoop() {
    var num = "";
    var x = 1;
    while (x <= 15) {
        num += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = num;
}

function forLoop() {
    for (y = 0; y < locations.length; y++) {
        content += locations[y] + "<br>";
    }
    document.getElementById("locations").innerHTML = content;
}

function descriptionLocation() {
    var dLocations = [];
    dLocations[0] = "Beach Sunset";
    dLocations[1] = "Smoggy Sunset";
    dLocations[2] = "City Sunset";
    dLocations[3] = "Icy Sunset";
    dLocations[4] = "Cattle Crossing Sunset";
    dLocations[5] = "Canal Sunset";
    document.getElementById("sunset").innerHTML = `This is a beautiful ${dLocations[3]} in ${locations[3]}!`;
}

function constantFunc() {
    const surfboards = {brand:"Proctor", style:"Shortboard", price:"$650"};
    document.getElementById("constant").innerHTML = `Thanks for shopping at Malibu Surf World, your cart has been updated with a 
    ${surfboards.brand} ${surfboards.style} and your total is ${surfboards.price}.`;
}

function constantFuncChange() {
    const surfboards = {brand:"Proctor", style:"Shortboard", price:"$650"};
    surfboards.style = "Longboard";
    surfboards.color = "Red and Black Tiger Striped";
    document.getElementById("change").innerHTML = `Thanks for shopping at Malibu Surf World, your cart has been updated with a 
    ${surfboards.color} ${surfboards.brand} ${surfboards.style} and your total is ${surfboards.price}.`;
}

let dog = {
    breed:"Hungarian Vizsla",
    color: "amber",
    skills:"hunting",
    size:"large",
    gender:"male",
    name:"Brody",
    description : function() {
        return `The ${this.breed} is known for it's beautiful ${this.color} and outstanding ${this.skills} abilities!`;
        }
};
//document.getElementById("scope").innerHTML = dog.description();
document.write(dog.description);