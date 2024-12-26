// Hoisting in JS
const addLambda = (x,y) => x + y;

function add(x,y) {
    return x + y;
}

console.log(`Add function (normal) => ${add(3,4)}`);  
console.log(`Add function (lambda) => ${addLambda(3,4)}`);

var x = undefined;

console.log(x);
var x = 10;


