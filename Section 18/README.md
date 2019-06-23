# Section 18 : Intro to [jQuery](https://jquery.com/)

```javascript
$(selector).css(property, value);

$("h1").css("color", "yellow");

document.querySelector("h1").style.color = "yellow";
```



```javascript
var styles={
  color: "red",
  backgroundColor: "pink",
  border: "2px solid purple"
};

$("h1").css(styles);
```



```javascript
$("h1").text();
$("h1").text("NEW TEXT");

$("ul").html("<li>THIS IS A LIST ITEM</li>");

$("img").attr("src");
$("img").attr("src", "new url");
$("img").last().attr("src");

$("h1").addClass("cssClass");
$("h1").removeClass("cssClass");
$("h1").toggleClass("cssClass");
```

