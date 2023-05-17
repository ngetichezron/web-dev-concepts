// takes one or more functions as arguments
// returns a function as its result
// allows for writing more concise, modular and re-usable code by :
// abstacting away common patterns and behaviors
// create code that is easier to reason and modify
// Essential part of Functional programming
// 


// ======= MAP ========
// takes an array and a function as arguments 
// returns a new array with the result of applying the function
// to each element of the array

const numbers = [ 1, 2, 3 ];
const squares = numbers.map( x => x * x );
console.log( squares );  // [1, 4, 9]



// ======= FILTER =======
// takes an array and Fns as args
// returns new array with only the elements that satisfy conditions in the Fn
const nos = [1, 2, 3, 4, 5];
const evens = nos.filter( x => x % 2 === 0 );
console.log( evens );  // [2, 4]


// ====== REDUCE =======    // Not yet understood
// takes array and Fn as args
// returns single value -> Result of applying the Fn
// to the elems of the array
// the Fn takes 2 args: accumulated value, Current value being processed


const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce( ( acc, curr ) => acc + curr, 0 );
console.log( sum ); // 15



// ====== forEach ======
// takes array and Fn as args
// Executes the Fn for @ element in the array. 
// it does not return a value
const newnums = [ 1, 2, 3 ];
newnums.forEach( x => console.log( x ));
// Output: 1
//         2
//         3



// ====== sort =======  // needs some extra learning 
// takes array and Fn as args
// Fn takes 2 args: 1st and 2nd elems to be compared
// returns new sorted array, according to the result of the Fn
const shake = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sorted = shake.sort( ( a, b ) => a - b );
console.log( sorted );   // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]


    // // ====== compose =====
    // // takes one or more Fns as args
    // // returns new Fn that applies the Fn in reverse order

    // const add = x => x + 1;
    // const square = x => x * x;
    // const addAndSquare = compose( square, add );
    // console.log( addAndSquare); // 9   // ReferenceError: compose is not defined




