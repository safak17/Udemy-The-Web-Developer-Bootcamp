# Section 12 : Javascript Basics - Functions

## Function Declaration and Function Expression
```javascript
function isEven(number){
	return number % 2 === 0;
}
```

```javascript
function kebabToSnake(str){
	var newStr = str.replace(/-/g, "_");
	return newStr;
}
```

```javascript
function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var capitalize = function(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}
```

```javascript
function capitalize(str){
    if(typeof str === "number"){
        return "That's not a string.";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";                 //  "paris"
var capital = capitalize(city);     //  "Paris"

var num = 37;
var capital = capitalize(num);      //  "That is not a string."
```

## Higher Order Functions
Higher order functions are functions that either take a function as an argument or they return a another function.

```javascript
function sing(){
	console.log("Never mind I'll find someone like you.");
}

setInterval(sing, 1000);	//	returns 2
clearInterval(2);		//	use "2" to stop setInterval
```

## Anonymous Function 

```javascript
setInterval(function(){
	console.log("This is an anonymous function.");
}, 2000);
```
