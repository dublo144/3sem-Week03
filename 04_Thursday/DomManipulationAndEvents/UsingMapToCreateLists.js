// Using map to create list’s (ul’s, tables etc.)

const htmlFromNames = names => {
    const html = names.map(name => '<li>'.concat(name, '</li>'));
    html.unshift('<ul>');
    html.push('</ul>');
    return html.join('')
};

// a) Yesterday you used the array types map and join methods to create a UL with a number of names
const names =  ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];
const list = document.getElementById('list');
list.innerHTML = htmlFromNames(names);

// b) Create a FORM with an input field + a submit button as sketched here.
document.getElementById('addName').addEventListener('click', ev => {
    ev.preventDefault();
    const name = document.getElementById('name').value;
    names.push(name);
    list.innerHTML = htmlFromNames(names)
});

// c) Add two more buttons to the form with the text:  “remove first” and  “remove last”. Implement the behaviour inspired by how you solved part-b.
document.getElementById('removeFirst').addEventListener('click', ev => {
    ev.preventDefault();
    names.shift();
    list.innerHTML = htmlFromNames(names);
});

document.getElementById('removeLast').addEventListener('click', ev => {
    ev.preventDefault();
    names.pop();
    list.innerHTML = htmlFromNames(names);
});