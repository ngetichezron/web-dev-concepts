// jQuerry is a JS lib that:
// simplifies html doc traversing
// event handling
// animating for rapid web development
// provides easy to use API for accessing and manipulating the DOM


// how to manipulate DOM with jQuerry


// ####### Document Ready Function ##########
// The $(document).ready() function is used to: 
// execute code when the document is fully loaded.
// Ensures that code inside the function
// is executed only when the document is ready to be manipulated.

$(document).ready(function() {
    // Code to execute after the document has loaded
});



// ############ Selecting Elements ################
// uses CSS-like selectors to select elements and returns
// a jQuerry object containing the selected elements

// Selecting elements by ID
$('#my-element')

// Selecting elements by class
$('.my-class')

// Selecting elements by tag name
$('p')





// ////////////########## Manipulating Elements ###########
// Once elements are selected jQuery provides a no of 
// methods for manipulating them: i.e text() method for 
// setting content of an element
// Setting the text content of an element
$('#my-element').text('Hello, world!')

//////Adding and Removing Classes
// jQuery provides methods for adding 
// and removing classes from elements.
    
/// Adding a class to an element
$('#my-element').addClass('my-class')

/// Removing a class from an element
$('#my-element').removeClass('my-class')


/// Binding events
// Provides a simple way to bind event handlers to elements
// .on() method used to bind event to an element
// callback Fn executed when event is triggered
$('#my-element').on('click', function() {
    // Code to execute when the element is clicked
})


/// Animations
// jQuery provides easy way to create animations
// .animate() used to animate CSS properties on an element
// over a period of time
$('#my-element').animate({ opacity: 0.5 }, 1000)


///////-----> These are but a few examples of what jQuery does.
// by using jQuery devs can write less code and achieve same
// results as writing plain javaScript.


