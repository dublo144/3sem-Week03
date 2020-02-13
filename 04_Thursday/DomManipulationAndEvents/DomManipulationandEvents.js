// a) When the page initially is loaded all divs should be given a colour of your choice
const divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "red"
}

// b) Add a button, and assign a click handler to the button. When the button is clicked each div should be given a unique colour.
//     Hints: use document.getElementById(..) to get the individual div’s
const button = document.getElementById("button");
button.addEventListener('click', ev => {
    ev.preventDefault();
    document.getElementById("1").style.backgroundColor = "blue"
    document.getElementById("2").style.backgroundColor = "green"
    document.getElementById("3").style.backgroundColor = "yellow"
});