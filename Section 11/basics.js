var age = Number(prompt("What is your age?"));
if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}

var answer = prompt("Are we there yet?");
while (answer.indexOf("yes") !== -1) {
    var answer = prompt("Are we there yet?");
}
alert("YAY ! We made it.");

var str = "ahceclwlxo";
for (var i = 1; i < str.length; i += 2) {
    console.log(str[i]);
}