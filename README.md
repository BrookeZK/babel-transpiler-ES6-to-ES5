## What am I?

A transpiler for ecmascript that uses babel and npm, created based off of this article: 
https://medium.com/jspoint/how-to-quickly-transpile-javascript-using-babel-alone-a-brief-introduction-to-babel-js-40e74e43fe32

## Why do I exist?
The purpose of the project was to verify the concepts discussed in this article about for loop variable initialization with let in an asynchronous context, and how this reveals that for loops create a new scope at every iteration: 
https://betterprogramming.pub/scoping-in-javascript-for-loops-c5ffac6aa92b#:~:text=We%20know%20that%20due%20to,%2C%20allows%20block%2Dscoped%20variables.

## How do I run this project?

* Clone the project.
* Next, run `npm install` in root directory; this will create the `node_modules` directory.
* Update any code that you want to transpile in `program.js`.
* Use the command `npx babel program.js` to invoke babel to transpile the code in `program.js` from ES6 to ES5. **The transpiled results will appear in your console.**