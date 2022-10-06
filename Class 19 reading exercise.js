/* Musketeers
Write a program that:

Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop */

const Musketeers = ["Athos", "Porthos", "Aramis"];
for(i = 0; i < Musketeers.length; i++){
    console.log(Musketeers[i])
};

const Musketeers = ["Athos", "Porthos", "Aramis"];
Musketeers.push("D'Artagnan")
Musketeers.forEach(x => console.log(x)
    );
Musketeers.pop("Aramis");
console.log(Musketeers)

const Musketeers = ["Athos", "Porthos", "Aramis"];
Musketeers.push("D'Artagnan");
Musketeers.splice(2, 1)
console.log(Musketeers);

//for-of loop
const Musketeers = ["Athos", "Porthos", "Aramis"];
Musketeers.push("D'Artagnan");
for (const item of Musketeers){
    console.log(item);
}

/* Sum of values
Write a program that creates the following array, 
then calculates and shows the sum of its values (42 in that case). */

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
for(i = 0; i < values.length; i++){
    sum += values[i];
}
console.log(sum);

/* Array maximum
Write a program that creates the following array, then calculates and shows the array's maximum value. */
const values = [3, 11, 7, 2, 9, 10];

function ebe(arr) {
    let maxVal = Math.max(...arr);
    let result = [maxVal];
    return result;
};

ebe([3, 11, 7, 2, 9, 10]);
//look for more solution

/* List of words
Write a program that asks the user for a word until the user types "stop". 
The program then shows each of these words, except "stop". */
//find a solution later


let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements


let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"


/* Negative indexes allowed
Here and in other array methods, negative indexes are allowed. 
They specify the position from the end of the array, like here: */
let arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5


const Musketeers = ["Athos", "Porthos", "Aramis"];
Musketeers.push(3);
console.log(Musketeers)

let arr = [1, 2];
// create an array from: arr and [3,4]
arr.concat([3, 4]) // [1, 2, 3, 4]

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => alert(`${item} is 
at index ${index} in ${array}`));


//Transform an array
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  let arr = [ 1, 2, 15 ];
  arr.sort(compareNumeric);
  alert(arr);  // 1, 2, 15   ??? Revisit later

//reverse
let abs = [1, 2, 3, 4, 5]
abs.reverse()
console.log(abs)// 5, 4, 3, 2, 1

//split
let names = 'abs, shsha, ken';
let arr = names.split(', ')
for (let name of arr){
alert(`a message to ${name}`)}

Split into letters
let yam = 'food';
alert (yam.split(''));
// f, o, o, d

//join
let abs = ['Bilbo', 'Gandalf', 'Nazgul'];
let pit = abs.join(';');
console.log (pit);  // Bilbo;Gandalf;Nazgul

//map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6


// reduce/reduceRight
let arr = [1, 2, 3, 4, 5];
// removed initial value from reduce (no 0)
let result = arr.reduce((sum, current) => sum + current);
alert( result ); // 15

//The method arr.reduceRight does the same, but goes from right to left.

Array.isArray
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true


/* A cheat sheet of array methods:

To add/remove elements:

push(...items) – adds items to the end,
pop() – extracts an item from the end,
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
includes(value) – returns true if the array has value, otherwise false.
find/filter(func) – filter elements through the function, return first/all values that make it return true.
findIndex is like find, but returns the index instead of a value.
To iterate over elements:

forEach(func) – calls func for every element, does not return anything.
To transform the array:

map(func) – creates a new array from results of calling func for every element.
sort(func) – sorts the array in-place, then returns it.
reverse() – reverses the array in-place, then returns it.
split/join – convert a string to array and back.
reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
Additionally:

Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
Please note that methods sort, reverse and splice modify the array itself.

These methods are the most used ones, they cover 99% of use cases. But there are few others:

arr.some(fn)/arr.every(fn) check the array. */






/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into 
camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor'; */

//solution

    function joinTogether(asopo) {
        return asopo
          .split('-')
          .map((a, b) => b == 0 ? a : a[0].toUpperCase() + a.slice(1))
          .join('');
    }
    joinTogether('eyin-funfun-bi-lekeleke');





/* Write a function filterRange(arr, a, b) that gets an array arr, 
looks for elements with values higher or equal to a and lower or equal to b and 
return a result as an array.

The function should not modify the array. It should return the new array.

For instance: */

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

//solution
function filterRange(arr, y, z) {
    return arr.filter(item => (y <= item && item <= z))
}
let arr = [7, 6, 5, 2];
let filtered = filterRange(arr, 2, 6);
alert( filtered ); // 6, 5, 2 (matching values)
alert( arr ); // 7, 6, 5, 2 (not modified)





Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes 
from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]

//solution
function filterRangeInPlace(arr, a, b){
    return arr.filter(item => (a <= item && item <= b))
   }
   let arr = [5, 3, 8, 1];
   let filtered = filterRange(arr, 1, 4);
   arr = filtered;
   alert (arr);


   function copySorted(arr){
    return arr.sort((a, b) => b - a)
   }
   let arr = ["HTML", "JavaScript", "CSS"];
   let sorted = copySorted(arr);
   alert (sorted);


   function calculate(str){
    return Number(str)
   }
   calculate('8 * 7')


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(item => item.age);
alert( names );



let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let Mapped = [ smith, hunt, key ];
let usersMapped = users.map(item => item.id, item.name, item.surname)
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName )



//sort by age
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arr = [ pete, john, mary ];
  
  sortByAge(arr);
  
  // now sorted is: [john, mary, pete]
  alert(arr[0].name); // John
  alert(arr[1].name); // Mary
  alert(arr[2].name); // Pete


  function getAverageAge(users){
    let avg = sum( arr[i] ) / arr.length
  }

  //get average age
  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  
  let arr = [ john, pete, mary ];
  
  alert( getAverageAge(arr) ); // 28


/* Filter unique array members
importance: 4
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
For instance: */

function unique(arr) {
  /* your code */
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
  
//solution
/* Let’s walk the array items:

For each item we’ll check if the resulting array already has that item.
If it is so, then ignore, otherwise add to results. */
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

