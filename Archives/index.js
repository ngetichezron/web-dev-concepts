function foo( x ) {
    return 2 * x;
}

function bar ( y ) {
    return foo( y + 5 ) - 10;
}

console.log(bar(15));


setTimeout( () => {
    for( let i = 0; i < 2000000000; i++ ) {
        console.log('Done delaying');
    }
}, 0 );

setTimeout( () => {
    console.log(' Done!!!! ');
}, 0 );


