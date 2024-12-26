/*
 1. No return type
 2. Keyword function
 3. Access modifiers needn't be specified
 4. No datatype declaration for params
*/
function add(a,b) {
    return a+b;
}

const sum = add(3,4);
console.log(sum);

// Arrow Functions
let add2 = (a,b) => a + b;
let sum2 = add2(4,5);
console.log(sum2);

let square = a => a * a; // no braces required if only one param

let sq = square(5);
console.log(sq);

let greet = name => `Hello, ${name}`; // template literals

let greet2 = () => `Hello Buddy!`; // braces required with no params