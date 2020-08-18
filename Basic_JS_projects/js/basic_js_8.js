var sentence = "All work and no play makes Johnny a dull boy.";
var number = 509;
var longnum = 1503.9438018750392018

document.write(sentence);
document.write(longnum);

function sliceMethod() {
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}

function upperCase() {
    var allcaps = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = allcaps;
}

function searchText() {
    var search = sentence.search("no play");
    document.getElementById("search").innerHTML = search;
}

function numStr() {
    document.getElementById("string").innerHTML = number.toString();
}

function longNumber() {
    document.getElementById("long").innerHTML = longnum.toPrecision(5);
}

function fixedNum() {
    document.getElementById("fixed").innerHTML = longnum.toFixed(0);
}

function valueArray() {
    var pets = ["Cats", "Dogs", "Birds", "Fish", "Lyons"];
    document.getElementById("value").innerHTML = pets.valueOf();
}