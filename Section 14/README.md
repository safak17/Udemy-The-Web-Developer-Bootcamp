# Section 14 : Introduction to Objects

- Store data in key-value pairs.
- Objects have no order.

```javascript
var person = {
	name : "Travis",
	age : 21,
	city: "LA"
}

console.log( person["name] );		// bracket notation
console.log( person.name ) ;		//	dot notation

//	Cannot use dot notation if the property starts with a number.
person.1age							//	INVALID
person["1age"]						//	VALID

//	Cannot use dot notation for property names with spaces
person.1age space					//	INVALID
person.["1age space"]				//	VALID

//	You can lookup using a variable with bracket notation
var str = "name";
person.str							//	doesn't look for name
person[str]							//	looks for "name"
```

## [UNDERSCORE.JS](https://underscorejs.org/)
> Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects. It’s the answer to the question: “If I sit down in front of a blank HTML page, and want to start being productive immediately, what do I need?” … and the tie to go along with jQuery's tux and Backbone's suspenders.

## this keyword
```javascript
var comments = {};
comments.data = [1, 2, 3];
comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});
}

comments.print();
```
