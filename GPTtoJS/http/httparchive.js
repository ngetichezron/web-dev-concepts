module.exports = {
    exportedVariable,
    exportedFn
}

const exportedVariable = 10;

function exportedFn( args ){
    console.log( 'exportedFn' ) ;
}



//------------------FS---------------------------
// // perplexed :)
// const fs = require( 'fs' );
// fs.createReadStream( './path/to/file.ext' ).on( 'data', data => {
//     console.log( data );
// })

// // data event attached to the stream and its handler funtion
// // logs the data from the file to the console
// // this allows for streaming large files and processing data 
// // in chunksas it comes in, rather than waiting for entire
// // file to be read  into memory.

const fs = require( 'fs' );
const writeable = fs.createWriteStream( './path/to/files.ext' );
writeable.write( 'some data' );
writeable.write( 'more data' );




const fileSystemStream = load( 'filePath' );
fileSystemStream.on( 'data', data => HTTP_Response.push( data ) );
fileSystemStream.on( 'end', HTTP_Response.end() );
// load not a built in Fn of Node.js
// use fs module to read file ( filePath )
// stream its data to an HTTP response
///////////// what is this .on(),,, where are the rest of the similar Fns

// code listens for data events emitted by fileSystemStream
// pushes data to HTTP response

// when end of file is reached, end event is triggered and HTTP response is ended

load( 'filePath' ) .pipe( HTTP_Response );
// efficient and readable way to handle large amounts of data
// between a file and a HTTP response.

// load() -> reads content of the file
//           returns a stream
// stream then piped to the HTTP response objet
// HTTP response object writes content of stream
// to response.


fs.existsSync( '/some/path/to/file.txt' );
fs.existsSync( Buffer.from( '/some/path/to/file.txt' ) );
fs.existsSync( new URL( 'file://some/path/to/file.txt' ) );

// fs.existSync() checks if specified file exist or not
// -- takes file path as arg, return boolean (exist or not)

// fs.existSync only works with file paths in string format
// may throw errors or unexpected results with 2nd & 3rd statements


////// = different methods of passing file path to fs.existSync()
// 1. uses string as file path
// 2. uses buffer object that represents file path
// 3. uses URL object that represents file path






//------------------------ HTTP ------------------------

const http = require ( 'http' );
const hostname = '127.0.0.1';
const port = 8000;



const server = http.createServer( ( req, res ) => {
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plain'); //'text/plain' -> type of content being sent
    res.end( 'Welcome to my server!\n') // res.end() -> signal the end of the response
    // look for further res.() functions

});

server.listen( port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    // server.listen called to start the server on the specified port and hostname
})






// ------------------------ Routes ---------------------

app.get( '/', ( req, res ) => res.end( 'Working express server!' ));
// HTTP GET request handler for root endpoint ('/') 
// of an express application

// When GET request made to root endpoint
// Fn passed to app.get is executed.
// Fn takes 2 args, req and res
// res.end -> send plain text response// confirm server is operational.

app.listen( port, hostname, () => console.log( `Server is running at http://${hostname}:${port}`) );


app.get( '/', ( req, res ) => res.end('GET request at /') );
app.post( '/user', ( req, res ) => res.end( 'POST request at /user') );
app.delete( '/cart/item', ( req, res ) => res.end('DELETE request at /cart/item') );


app.get( '/', ( req, res, next ) => next() );
app.get( '/', ( req, res ) => res.end( 'Second handler!' ) );
// uisng next() in middleware chain
// 1. sets up route for root URL / using app.get()
// next() -> move to next middleware Fn in the chain
// 1st fn simply passes control to the next m/w

// 2. another middleware Fn for same root URL 

// when request is made to the root URL,  1st m/w Fn executed,
// which calls next() and passes control to the second m/w Fn

// this is a common pattern in Express for breaking up complex logic
// into smaller, reusable m/w Fns

app.get( '/abc?de', ( req, res ) => {
    console.log( 'Matched /abde or /abcde' );
} );
// route definition for handling GET requests to URLs
// with either '/abde' or '/abcde'

app.get( '/fo+d', ( req, res ) => {
    console.log( 'Matched /fod, /food, /foood, /fooooooooood' );
} );
// the + in the URL pattern mean:
// preceeding character(o) must be present 
// one or more times, so it matches url paths like:
// /fod, /food, /foood, and /fooooooooood.

app.get( '/fo*d', ( req, res ) => {
console.log( 'Matched /fd, /fod, /food, /foooooooood' );
} );


app.get( '/b(es)?t', ( req, res ) => {
console.log( 'Matched /bt and /best' );  // (es)? matches either 0 or 1 occurences 
} );
app.get( '/b(es)+t', ( req, res ) => {
console.log( 'Matched /best, /besest, /besesest' );  // (es)+ matches 1 or more occurrences of "es"
} );
app.get( '/b(es)*t', ( req, res ) => {
console.log( 'Matched /bt, /best, /besest, /besesest' ); // (es)* matches 0 or more occurrences of "es"
} );






//--------------------------------------------------------------


app.get( '/amazon/audible/:userId/books/:bookId', ( req, res ) => {
  console.log( req.params );
} );
// set up http get rout for url path starting with '/amazon/audible/'
// followed by dynamic parameter :userId
// followed by '/books/' , end with another dynamic param :bookId
// dynamic params specified with colon followed by param name
// req.params object -> contains all dynamic params passed in the URL path
//                     will contain object with keys userId and booId and their
//                     corresponding values
//                     for example:
//                     if url accessed is /amazon/audible/123/books/456
//                     req.params corresponding values wil be 123 and 456

// Common pattern used in Express for handling dynamic URL parameters and 
// building flexible routes
// values of params can be used to fetch data from db,
// render a specific page,
// perform any other logic that is specific to the route.



app.get( /^web.*/, ( req, res ) => {
  console.log( 'Matched strings like web, website, and webmail' );
} );
// matches all strings that start with web






app.use( ( req, res, next ) => {
    req.currentTime = new Date();
    next();
} );
app.get( '/', ( req, res ) => {
    console.log( req.currentTime );
} );
// uses express m/w Fn app.use() to
// add current time to requested object (req)

// m/w Fn executed b4 any subsequent route handlers
// next() -> pass control to next m/w Fn

// current time stored in req.currentTime logged to console
// this route handler executed only after m/w Fn has run




app.get( '/synchronousError', ( req, res ) => {
    throw new Error( 'Synchronous error' );
} );
app.get( '/asynchronousError', ( req, res, next ) => {
    setTimeout( () => next( new Error( 'Asynchronous error' ) ), 0 );
} );

// Two endpoints for a web app
// 1. throws new Error when GET request made to this endpoint
//     error halts request-response cycle and produces a stack trace
// 2. schedules error to be thrown with delay of 0 seconds
//    error passed to the next m/w in the chain using next()

// if there is no error handling m/w in the chain, the default error handler
// sends 500 Internal Server Error response to the client






 
app.get( '/', ( req, res ) => {
throw new Error( 'OH NO AN ERROR!' );
} );
app.use( ( err, req, res, next ) => {
  req.json( 'Got an error!' + err.message );
} );
// common pattern for handling errors in centralized location and
// providing a consistent error response to the clients

// 2. error handling m/w function
//    handle any errors that occur in the application
//    when error is thrown in a m/w Fn, Fn will be called 
//    with the error object and the original request and response objects

//    in this case, Fn sends JSON response back to client, with message
//    'Got an error!' and error mess. from err object

/*
    when a GET request is made to the root URL /, 

    an error is thrown with 
    the message "OH NO AN ERROR!". 

    This error is then handled by the error-handling middleware 
    function, which sends a JSON response back to the client with the message "Got an error!" 
    and the error message. 
*/















