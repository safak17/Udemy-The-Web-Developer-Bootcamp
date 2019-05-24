# Section 24 : [Node JS](https://nodejs.org/en/about/)

By the Node, Javascript can be used also on server side. You can learn [more](https://stackshare.io/nodejs).

REPL: Read Evaluate Print Loop

![Node Command Line](./Photos/1_node_command_line.png)
![Node and JS File](./Photos/2_node_and_js_file.png)
![Node and Function](./Photos/3_node_and_function.png)

## [Node Package Manager](https://www.npmjs.com/)
NPM is the package manager for javascript.
Packages are just code that someone else has written.

- [cat-me](https://www.npmjs.com/package/cat-me)
- [faker](https://www.npmjs.com/package/faker)

```javascript
npm install faker
var faker = require("faker");
console.log( faker.commerce.price() );
```
