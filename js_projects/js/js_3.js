var ages = [17, 15, 9, 7, 46, 46];

checkAge = (age) => age >= 18;

function myFunction() {
    document.getElementById('displayAge').innerHTML = ages.some(checkAge);
}