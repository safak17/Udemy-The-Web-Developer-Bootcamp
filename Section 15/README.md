# Section 15 : DOM Manipulation

- The Document Object Model is is the interface between your javascript and HTML+CSS.
- The browser turns every HTML tag into a Javascript object that we can manipulate.
- Everything is stored inside of the *document* object. 

```
console.log(document)
console.dir(document)
document.URL
document.links

document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()		//	Returns the first element that matches a given CSS-style selector
document.querySelectorAll()
```

- It's recommended for styles to be defined in a separate file or files. The style property allows for quick styling, for example for testing purposes.

```
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";

.some-class{
color: blue;
border: 10px solid red;
}

var tag = document.getElementById("highlight");
tag.classList.add("some-class");
tag.classList.remove("some-class");
tag.classList.toggle("some-class");
```

```
document.body.textContent = "<h1>Goodbye</h1>";
document.body.innerHTML = "<h1>Goodbye</h1>";
```

- Use *getAttribute()* and *setAttribute()* to read and write attributes like *src* or *href*

```
var link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href", "www.google.com");

var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
```
