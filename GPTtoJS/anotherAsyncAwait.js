// ES2017 introduced new syntax for working with promise:
// async and await:
// enables us to to write async code that looks and behaves
// like synchronous code.

//-----JavaScript
function delay( time ) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve();
        }, time);
    });
}


async function doSomething() {
    console.log( 'Doing something...' );
    // pause execution of Fn till Promise returned by 
    // delay has resolved.
    await delay( 1000 );
    console.log( 'Done' );
}

doSomething();


// Error handling with Async/Await
// async / await allow error handling using traditional
// try / catch syntax.

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    if (userId === 1) {
      resolve({ name: 'Alice' });
    } else {
      reject(new Error('User not found'));
    }
  });
}

async function getUserData( userId ) {
    try {
        const userData = await fetchUserData(userId);
        console.log(userData.name);
    } catch (error) {
        console.error( error );
    }
}

getUserData( 1 );
getUserData( 2 );
// getUserData() -> uses async/await to handle errors returned by
// fetchUserData()
// if promise resolves, userData.name logged to the console
// if it rejects, error caught and logged to the console.


//---------------------------------------------------Not yet quite
// Promise decorators           
/// Promises can be decorated with additionla functionality
/// to make them more powerful...

function retry( promiseFn, maxRetries = 3, delay = 1000 ) {
    let retries = 0;

    function tryPromise() {
        return promiseFn().catch( ( error ) => {
            if ( retries < maxRetries ) {
                retries++;
                console.warn(`Retrying after ${delay} ms ...`);
                return new Promise( ( resolve ) => setTimeout( resolve, delay )).then( tryPromise);
            }
            throw error;
        });
    }

    return tryPromise();
}

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('Success!');
    } else {
      reject(new Error('Something went wrong'));
    }
  }, 1000);
});

retry(() => myPromise).then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});

//-------------------------------------------------
