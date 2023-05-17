// async Fns;
// way of writing async JS code that looks like synchronous code
// async keyword used to define a function that returns a 
// Promise, and the await keyword to wait for the
// resolution of a Promise

async function foo() {
    const result = await someAsyncOperation();
    return result;
}


// a more advanced example that uses Promise.all to run 
// multiple async operations in parallel

// fetchUserData() -> async fn fetches data from 2 diff urls
// using fetch() fn
// Promise.all -> used to wait for both requests to complete in parallel
// await -> wait for the resolution of @ Promise returned by fetch()
// .json() -> extract JSON data from @ response

// once both Promises have resolved, data is combined to single object
// and returned by the async Fn

async function fetchUserData( userId ) {
    const [ user, posts ] = await Promise.all( [
        fetch('https://api.example.com/users/${userId}'),
        fetch('https://api.example.com/posts?userId=${userId}')
    ]);
    const userData = {
        user: await user.json(),
        posts: await posts.json()
    };
    return userData;
}


// Another advanced example using with error handling try-catch blocks:

async function foo() {
    try {
        const result = await someAsyncOperation();
        return result;
    } catch ( error ) {
        console.error( error );
        throw new Error ( 'Something went wrong' );
    }
}

