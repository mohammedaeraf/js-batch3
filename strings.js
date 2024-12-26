let str = " Hello, World!  ";
console.log(str.length);

console.log(str.charAt(4));
console.log(str.charCodeAt(4));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf('l'));
console.log(str.lastIndexOf('l'));
console.log(str.includes('World',8));

console.log(str.startsWith('Hey'));
console.log(str.endsWith('World'));  // returns true

console.log(str.replace('World', 'Universe'));
console.log(str);
console.log(str.trim());

let subStr = str.trim().substring(0,5).toUpperCase();
console.log(subStr);