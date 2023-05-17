//// ====== click ======
// trigger event when user clicks
const button1 = document.querySelector('button');
button1.addEventListener('click', function() {
    console.log('Button clicked!');
});

//// ====== dblclick =====
// when user doubleclicks and element
const div1 = document.querySelector('div');
div1.addEventListener('dblclick', function() {
    console.log('Div double-clicked!');
});

//// ===== mousedown =====
// when user presses mouse button over element
const button2 = document.querySelector('button');
button2.addEventListener('mousedown', function() {
    console.log('Button pressed!');
});

//// ===== mouseup =====
// when the user releases a mouse button over an element.

const button3 = document.querySelector('button');
button3.addEventListener('mouseup', function() {
    console.log('Button released!');
});


//// ===== mousemove =====
// when the user moves the mouse over an element.

const div2 = document.querySelector('div');
div2.addEventListener('mousemove', function(event) {
    console.log('Mouse position: (' + event.clientX + ', ' + event.clientY + ')');
});



//// ===== mouseover =====
//when the user moves the mouse over an element, or one of its child elements.
const div3 = document.querySelector('div');
div3.addEventListener('mouseover', function() {
    console.log('Mouse over the div!');
});



//// ===== mouseout =====
// when the user moves the mouse out of an element, or one of its child elements.
const div4 = document.querySelector('div');
div4.addEventListener('mouseout', function() {
    console.log('Mouse out of the div!');
});



//// ===== contextmenu =====
// when the user right-clicks on an element.
const div5 = document.querySelector('div');
div5.addEventListener('contextmenu', function() {
    console.log('Context menu opened!');
});




//// ===== keydown =====
// when a key on the keyboard is pressed down.
document.addEventListener('keydown', function(event) {
    console.log('Key pressed: ' + event.key);
});



//// ===== keyup =====
// when a key on the keyboard is released.
document.addEventListener('keyup', function(event) {
    console.log('Key released: ' + event.key);
});




//// ===== load =====
// when a page or an element finishes loading.
window.addEventListener('load', function() {
    console.log('Page loaded!');
});





//// ===== unload =====
// when a page is unloaded.
window.addEventListener('unload', function() {
    console.log('Page unloaded!');
});



//// ===== resize =====
// when the browser window is resized.
window.addEventListener('resize', function() {
    console.log('Window resized!');
});



//// ===== scroll =====
// when an element is scrolled.
const div6 = document.querySelector('div');
div6.addEventListener('scroll', function() {
    console.log('Div scrolled!');
});





//// ===== select =====
// when the user selects some text in an element.
const input = document.querySelector('input');
input.addEventListener('select', function() {
    console.log('Text selected')
});