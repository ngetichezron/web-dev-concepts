document.querySelector();
document.querySelectorAll();
document.getElementById();
document.createElement();
document.createTextNode();
document.body();
document.head();
document.title();
document.cookie();
document.location();



document.querySelector();
// Returns the first element within the document that 
// matches the specified selector, or group of selectors.
const element1 = document.querySelector('.my-class');




document.querySelectorAll();
// Returns a NodeList of all elements within the document 
// that match the specified selector, or group of selectors.
const elements = document.querySelectorAll('.my-class');




document.getElementById();
// Returns the element with the specified ID.
const element2 = document.getElementById('my-id');



document.createElement();
// Creates HTML element with the specified tag name
const element3 = document.createElement('div');


document.createTextNode();
// creates a new text node with the specified text
const textNode = document.createTextNode('Hello, world!');


document.body();
// Returns <body> element of the document
const bodyElement = document.body;



document.head();
// Returns the <head> element of the document
const headElement = document.head;



document.title();
// Returns or sets title of the current document
const pageTitle = document.title;
document.title = 'New Page Title';



document.cookie();
// Returns or sets the cookies associated with 
// the current document
const cookies = document.cookie;
document.cookie = 'username=johndoe';




document.location();
// Returns information about current URL
const currentUrl = document.location.href;
const currentPathname = document.location.pathname;


