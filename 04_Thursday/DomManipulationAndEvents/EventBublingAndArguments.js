// a) Add a click handler to each id and write code, so when clicked, each div will write to the console "Hi from idOfTheDiv".
const paragraphElement = document.getElementById("p");
const div1 = document.getElementById('div1');
div1.addEventListener('click', () => {
    paragraphElement.innerText = 'Hi from ' + div1.id
});

const div2 = document.getElementById('div2');
div2.addEventListener('click', () => {
    paragraphElement.innerText = 'Hi from ' + div2.id
});

// b)  Now, using cut and paste, add 10 more divs (still each with a unique id). (...)
// Add a new div (without the myDiv class) with the id="outer" around all our div’s and assign a single event handler (with the event argument)  to this div.
const outerDiv = document.getElementById("outer");
outerDiv.addEventListener('click', ev => {
    paragraphElement.innerText = this.id + ' ' + ev.target;
});

// c) Add an empty paragraph tag, with an id, to your HTML and change the code for both exercises above, so that output is not written to the console, but into this paragraph.


