# Section 11 : Javascript Basics - Control Flow

1. Comparison Operator

Values that aren't actually *true* or *false*, are still inherently "truthy" or "falsey" when evaluated in a boolean context.

| operator | explanation                      | example                      | result |
|----------|----------------------------------|------------------------------|--------|
| ==       | equals, performs *type coercion* | Assume x = 5<br> x == "5"    | true   |
| ===      | equal value and type             | x === "5"                    | **false**  |
| !==      | not equal value or equal type    | x !== "5"                    | true   |
|          | falsy values                     | !false                       | true   |
|          | falsy values                     | !""                          | true   |
|          | falsy values                     | !null                        | true   |
|          | falsy values                     | !0                           | true   |
|          | falsy values                     | NaN                          | true   |
|          | falsy values                     | !undefined                   | true   |
|          |                                  | true == "1"                  | true   |
|          |                                  | true == "2"                  | **false**  |
|          |                                  | 0 == false                   | true   |
|          |                                  | null == undefined            | true   |
|          |                                  | NaN == NaN                   | **false**  |
|          |                                  | !"Hello"                     | **false**  |
|          |                                  | !-1                          | **false**  |
|          |                                  | var y = null; y == undefined | true   |
|          |                                  | y === undefined              | **false**  |

2. Conditionals

```javascript
var age = Number(prompt("What is your age?"));
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
```

DRY : Don't Repeat Yourself

3. Annoy-O-Matic Code

```javascript
var answer = prompt("Are we there yet?");
while(answer.indexOf("yes") !== -1){
  var answer = prompt("Are we there yet?");
}
alert("YAY ! We made it.");
```

4. Intro to For Loops

```javascript
for(init; condition; step){
  // run some code...
}

var str = "ahceclwlxo";
for(var i=1; i<str.length; i+=2){
  console.log(str[i]);
}
```
