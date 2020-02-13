document.getElementById('getUserById').addEventListener('click', ev => {
    ev.preventDefault();
    document.getElementById('tableBody').innerHTML = '';
    const id = document.getElementById('userId').value;
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    fetch(url)
        .then(response => response.json())
        .then(data => populateTable(data))
});

document.getElementById('getAllUsers').addEventListener('click', ev => {
    ev.preventDefault();
    document.getElementById('tableBody').innerHTML = '';
    const url = 'https://jsonplaceholder.typicode.com/users/';
    fetch(url)
        .then(response => response.json())
        .then(data => data.forEach(user => populateTable(user)))
});

const populateTable = data => {
    const nameHtml =  '<td>' + data.name + '</td> ';
    const phoneHtml = '<td>' + data.phone + '</td> ';
    document.getElementById('tableBody').innerHTML += '<tr>' + nameHtml + phoneHtml + '</tr>';
};
