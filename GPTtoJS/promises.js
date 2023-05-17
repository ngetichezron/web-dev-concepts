// Basic Promise
/// Simplest - one that resolves after a period of time.

const myPromise = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( 'success' );
    }, 1000);
});

myPromise.then( ( result ) => {
    console.log( result );
}).catch( ( error ) => {
    console.error( error );
});

// Promise with error handling
// const myPromise2 = new Promise( ( resolve, reject ) => {
//     setTimeout( () => {
//         const error = new Error( 'Something went wrong!' )
//         reject( error );
//     }, 1000);
// });

// myPromise2.then( (result) => {
//     console.log( result );    
// }).catch( ( error ) => {
//     console.error( error );
// });



// Chaining promises
// chain Promises, so that output of one promise used as
// input for another.

const promise1 = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( 1 );
    }, 1000);
});

const promise2 = promise1.then( ( result ) => {
    console.log( result );
    return result + 1;
});

const promise3 = promise2.then( ( result ) => {
    console.log( result );
    return result + 1;
});

promise3.then( ( result ) => {
    console.log( result );
});


// Promise.all
/// used to await for multiple promises to resolve before continuing:

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

Promise.all( [ promise4, promise5, promise6 ]).then( ( shake ) => {
    console.log( shake );
})

