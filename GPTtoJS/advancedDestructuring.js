// let names = [ 'John', 'Michael' ];
// let [ name1 ] = names
// let [ name2, name3, name4 ] = names; // name4 undefined

// console.log( name4 );

let names = [ 'John', 'Michael', 'Jessica', 'Susan' ];
let [ name1,, name3 ] = names; // Note the missing variable name for the second array item
let [ ,,, ] = names; // Ignores all items in the array

console.log( name1 ); // 'John'
console.log( name3 ); // 'Jessica'


//--------------------------------------------------------
let [ a = 1, b = 2, c = 3 ] = [ 'cat', null ];
console.log( a ); //'cat'
console.log( b ); // null
console.log( c ); // 3

//------------------------------
let x = 10;
let y = 5;

[ x, y ] = [ y, x ];

console.log( x ); //5
console.log( y ); //10

//---------------------------------------
const obj = { firstName: 'Bob', lastName: 'Smith' };
const { firstName, lastName } = obj;

console.log( firstName ); // 'Bob'
console.log( lastName ); // 'Smith'

//---------------------------------------
const obj2 = { firstName2: 'Bob', lastName: 'Smith' };
const { firstName2, middleName } = obj;

console.log( firstName ); // 'Bob'
console.log( middleName ); //  undefined

//---------------------------------------
const obj3 = { firstName: 'Bob', lastName2: 'Smith' };
const { firstName: first, lastName2 } = obj3;

console.log( first ); // Expected output: 'Bob'
console.log( lastName ); // Expected output: 'Smith'


//---------------------------------------
const obj4 = { firstName: 'Bob', lastName: 'Smith' };
const { firstName3 = 'Samantha', middleName1 = 'Chris' } = obj4;

console.log( firstName ); // Expected output: 'Bob'
console.log( middleName1 ); // Expected output: 'Chris'



//--------------------------------------- // quiz: why first1 not Samantha
const obj5 = { firstName: 'Bob', lastName: 'Smith' };
const { firstName: first1 = 'Samantha', middleName: middle = 'Chris' } = obj;

console.log( first1 ); // Expected output: 'Bob'
console.log( middle); // Expected output: 'Chris'


//--------------------------------------- // Error to be solved. first6 not defined.
const obj6 = { firstName6: 'Dr', lastName6: 'Rockwell' };
let firstName6, lastName6;

( { firstName6: first6, lastName6 } = obj6 );  // Note the parenthesis around the expression
console.log( firstName6 );
console.log( lastName6 );

//---------------------------------------
const obj7 = { firstName7: 'Jay', middleName: 'Johnson', lastName: 'Junior' };
const { firstName7, ...otherNames } = obj7;

console.log( firstName7 ); // Expected output: 'Bob'
console.log( otherNames ); // Expected output: { middleName: 'Chris', lastName: 'Smith' }




//---------------------------------------
const [ n1, n2, n3, ...remaining ] = [ 1, 2, 3, 4, 5, 6 ];
console.log( n1 ); // 1
console.log( n2 ); // 2
console.log( n3 ); // 3
console.log( remaining ); // [ 4, 5, 6 ]



// ###########   ############
// Destructure indefinite no of Fn params into array args;
// excluding first 2 args passed in.

function fn ( num1, num2, ...args ) {
    console.log( num1 );
    console.log( num2 );
    console.log( args );
}

fn ( 1, 2, 3, 4, 5, 6 );
// Output
// 1
// 2
// [ 3, 4, 5, 6 ]


// ########   ##########   // need further explanation
// Destructure indefinite no of Fn params into array args
// then destructure into 3 vars
function fn2 ( ...[ n1, n2, n3 ] ) {
    console.log( n1, n2, n3 );
}

fn( 1, 2 );    //1, 2, []

// -----------------------------------------
function fn3( n1, n2, n3 ) {
    console.log( n1, n2, n3 );
}
const values = [ 1, 2, 3 ];
fn3( ...values );  // output: 1, 2, 3 
