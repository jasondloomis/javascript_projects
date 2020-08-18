
function sumNums(x, y) {
    x -= y;
    document.getElementById("minus").innerHTML = x;
}

function randomNums() {
    x = Math.random() * 75;
    round = Math.round(x)
    document.getElementById("random").innerHTML = round;
}

function remainModulus(x, y) {
    x %= y;
    document.getElementById("modulus").innerHTML = x;
}

function multiplyAdd() {
    x = 10 * 1 + 2;
    document.getElementById("multiply").innerHTML = x;
}

function incrementOne() {
    x = 12
    x++
    document.getElementById("increment").innerHTML = x;
}

function decreaseOne() {
    x = 12
    x--
    document.getElementById("decrease").innerHTML = x;
}
