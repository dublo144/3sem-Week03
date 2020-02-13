

// A - Create the two arrays below, spelled exactly as they are given. This will form the start for all the following questions.

const boys = ["Peter", "lars", "Ole"];
const girls = ["Janne", "hanne", "Sanne"];

// B - Create a new array called all, which should be a concatenation of the two arrays given above, starting with the boys and ending with the girls.
const all = boys.concat(girls);

// c) The array type has a cool method to reduce an array into a single string join() (you will love this method)
// · Create a comma separated string containing all the names from the all-array, separated by commas.
const reducedAllCommas = all.join(', ');

// · Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.
const reducedAllHyphens = all.join(' - ');

// The array type provides methods to add items to the start - unshift() and to the end push(..) of an array.
// d)  Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)
all.push("Lone", "Gitte");

// e)  Add the names Hans and Kurt to the start of the array
all.unshift("Hans", "Kurt");

// The array type provides methods to remove items from the start shift() and from the end pop(..) of an array.
// f)  Remove the first name in the array (Hans)
all.shift();

// g)  Remove the last name from the array (Gitte)
all.pop();

// The array type provides a method splice(..) which changes the array by removing existing elements and/or adding new
// h) Remove Ole and Janne from the middle of the array
all.splice(3, 2);

// The array type provides a method reverse() to reverse the elements of an array
// i) Sanne thinks it’s unfair that the boys have to come first, reverse the all array, so that the girls come first.
all.reverse();

// The array type provides a method sort() to sort the elements of an array
// j) Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.
all.sort();

// k) The default sort algorithm doesn’t handle the situation where the name can be either capitalized or not. Write a user-defined sort method to fix this problem.
all.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// l) Convert all the names in the array to uppercase.
const uppercaseAll = all.map(name => name.toUpperCase());

// m) Create a new array containing all the names that start with either “l” or “L” (hint: use the filter function with a sufficient callback)
const startsWithL = all.filter(name => name.toLowerCase().startsWith('l'));


