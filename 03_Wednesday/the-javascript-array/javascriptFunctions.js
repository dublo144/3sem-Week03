
//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 +n2;
}

//Function Expression
const sub = function(n1,n2){
    return n1 - n2
};

// Callback example
const cb = function(n1,n2, callback){
    if (typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function") {
        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } else {
        throw new Error("Invalid input")
    }
};

// 4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
const mul = (n1, n2) => (n1 / n2);

// 5) Call cb, this time with an anonymous function that divides the first argument with the second

// Getting comfortable with filter, map and forEach:

// 1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). Use the filter method to create a new array with only names of length <=3.
// Use the forEach method to iterate and print (console.log) both the original and the new array.
const names =  ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];
const nameLongerThan3 = names.filter(name => name.length <= 3);
names.forEach(name => console.log(name));
nameLongerThan3.forEach(name => console.log(name));

// 2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.
const namesUppercase = names.map(name => name.toUpperCase());

// 3) Use map, join + just a little bit more to create a function, which given the array of names, for example: ["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul>
const htmlFromNames = names => {
    const html = names.map(name => '<li>'.concat(name, '</li>'));
    html.unshift('<ul>');
    html.push('</ul>');
    return html.join('')
};

// 4)  Given this JavaScript array (...)
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

// a) Use the filter filter function to get arrays with only:
//  Cars newer than 1999
const newerThan1999 = cars.filter(car => car.year > 1999);
console.log(newerThan1999);

//  Al  Volvo’s
const volvos = cars.filter(car => car.make === 'Volvo');
console.log(volvos);

//  All cars with a price below 5000
const below5000 = cars.filter(car => car.price < 5000);
console.log(below5000);

// 4a) Use map, join + just a little bit more to implement a function, that , given the cars array used above, will create,
// and return a string with valid SQL statements to insert the data into a table with matching column names (id, year, make, model, price):
const arrayToSql = cars => {
    const infoToSql = (id, year, make, model, price) => `INSERT INTO cars (id,year,make,model,price) VALUES (${id}, ${year}, ${make}, ${model}, ${price});`
    return cars.map(car => infoToSql(car.id, car.year, car.make, car.model, car.price));
};

// Asynchronous Callbacks

// 1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
// A
// D
// F
// E
// B

var msgPrinter = function(msg,delay){
    setTimeout(function(){
        console.log(msg);
    },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

// this and constructor functions

// 1) Add this code
function Person(name){
    this.name = name;
    console.log("Name: " + this.name); // This refers to the Person class.
    setTimeout(function(){
        console.log("Hi  "+ this.name);  // This refers to the callback for the timeout
    },2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //Explain this TODO

// 2) Create a Person instance and rerun the example as sketched below:
var p = new Person("Kurt Wonnegut");  // Create an instance using the constructor function
console.log("I'm global: "+ name);  // What’s different ? TODO

// 3) Change your code to fix the problem, using both strategies given below.
//Store a reference to the outer this
function Person2(name){
    this.name = name;
    const self = this;
    console.log("Name: "+ this.name);
    setTimeout(function(){
        console.log("Hi  "+self.name);
    },2000);
}

function Person3(name){
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function(){
        console.log("Hi  "+ this.name);
    }.bind(this),2000);
}

// 4) Write, run and UNDERSTAND the example below
const greeter = function () {
    console.log(this.message);
};
const comp1 = {message: "Hello World"};
const comp2 = {message: "Hi"};

const g1 = greeter.bind(comp1);// We can store a reference, with a specific “this” to use
const g2 = greeter.bind(comp2);// And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);

// JavaScript Objects

// 1) Create an object with four different properties, with values, of your own choice (ex: name, birthday, hobby, email).
const myObj = {
    name: 'some name',
    birthday: 101010,
    hobby: 'some hobby',
    email: 'some email'
};
// Use a for-in loop (as sketched below) to demonstrate that we can iterate over the properties in an object.
for (prop in myObj) {
    console.log(prop, myObj[prop])
}

// Use the delete keyword to demonstrate we can delete existing properties from an object (delete a property, and iterate over the properties again)
delete myObj.birthday;
for (prop in myObj) {
    console.log(prop, myObj[prop])
}

// Add a new property to your object to demonstrate that we can add new properties to existing objects
myObj.someValue = 'inserted value';

// 2) Create a Constructor function to create new Persons having:
function Person4(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getDetails = () => `${this.firstName} ${this.lastName} ${this.age}`
}

// Reusable Modules with Closures

// 1) Implement and test the Closure Counter Example from the Slides TODO





