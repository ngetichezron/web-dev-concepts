// introduced ECMAScript 6
// extract values from arrays or objects
// assign them to variables in a concise way


// ===== Array destructuring =====
// use square bracs [] to create array pattern corresponding 
// to values in original array
const myArray = [ 1, 2, 3 ];
const [ a, b, c ] = myArray;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// skip certain elems in array pattern by
// leaving corresponding variable name empty
// ----- const [ a, , c ] = myArray;




// ====== Object destructuring =======
// use curly braces {} to create object pattern corresponding to:
// properties in the original object
const myObject = { x: 4, y: 5, z: 6 };
const { x, y, z } = myObject;
console.log(x); // 4
console.log(y); // 5
console.log(z); // 6
// properties in myObject assigned to vars x, y, and z.

// assign value of a property to a new variable with diff name
const myObject1 = { x: 7, y: 8, z: 9 };
const { x: m, y: n, z: o } = myObject1;
console.log(m); // 7
console.log(n); // 8
console.log(o); // 9


// ====== ADVANCED DESTRUCTURING =====
// --- Default values
// assign default value to destructured var incase value in 
// original array/obj is undefined.
const myArray1 = [ 10, 12 ];
const [ j, k, l=0 ] = myArray1;
console.log(j); // 10
console.log(k); // 12
console.log(l); // 0

const myObject2 = { u: 13, v: 14 };
const { u, v, w = 15 } = myObject2;

console.log(u); // 13
console.log(v); // 14
console.log(w); // 15
// before setting the values to u and v in original object
// brought undefined error

