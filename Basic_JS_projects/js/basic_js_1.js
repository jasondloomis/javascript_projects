var greeting = "Hello, World!" + " What is your name?" + "<br>", y = 11; // multiple variables on one line, concatenate with line break
var x = 5;
var color = greeting.fontcolor("blue");

var aString = "This is an alert of the crazy \"broadcast system\"! This message will repeat " + y + " times." + "<br>"; // concatenate with line break

document.write(color);
// alert(aString);
document.write(aString);
document.write(x + y); // add x plus y