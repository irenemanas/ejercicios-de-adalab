"use strict";

document.querySelector("h1").innerHTML = "¡Hola mundo!";

var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Setup
var myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);

//Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  // Only change code above this line
  //return product;
  console.log(product);
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Harry", "lastName"));

//RANDOM RANGE
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  // Only change code above this line
}
console.log(randomRange(200, 500)); // Random
console.log(randomRange(10, 80)); // Random

//PARSEINT
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");
console.log(convertToInteger("56")); // Nan

//Use the parseInt Function with a RadixPassed

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
console.log(convertToInteger("10011")); // 19
console.log(convertToInteger("111001")); // 57

//TERNARY OPERATOR

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
console.log(checkEqual(1, 2)); // Not Equal
console.log(checkEqual(8, 8)); // Equal

//Multiple Conditional (Ternary) OperatorsPassed

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);
console.log(checkSign(10)); // positive
console.log(checkSign(-2)); // negative
console.log(checkSign(0)); // zero

// RECURSION Count Up
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

// RECURSION Count Down

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown(12));

//Recursion to Create a Range of NumbersPassed
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    let numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(3, 18));
console.log(rangeOfNumbers(5, 9));
console.log(rangeOfNumbers(7, 7));

//VAR
function checkScopeV() {
  var v = "function scope";
  if (true) {
    v = "block scope";
    console.log("Block scope v is: ", v);
  }
  console.log("Function scope v is: ", v);
  return v;
}
console.log(checkScopeV());

//LET
function checkScopeL() {
  let l = "function scope";
  if (true) {
    l = "block scope";
    console.log("Block scope l is: ", l);
  }
  console.log("Function scope l is: ", l);
  return l;
}
console.log(checkScopeL());

// FUNCTION SCOPE (LET)

function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "caca";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
console.log(checkScope());

//CONST

function printManyTimes(str) {
  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

  // Only change code above this line
}
printManyTimes("freeCodeCamp");

//Array length
let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length);

//Change Array content
let myArray = ["a", "b", "c", "d"];
myArray[1] = "Holi";
console.log(myArray);

//Add Items to an Array with push() and unshift()Passed

let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];

romanNumerals.unshift("XIX", "XX");
romanNumerals.push(twentyThree);

console.log(romanNumerals);

////////
function mixedNumbers(arr2) {
  arr2.unshift("I", 2, "three");
  arr2.push(7, "VIII", 9);
  return arr2;
}

console.log(mixedNumbers(["IV", 5, "six"]));

//Remove Items from an Array with pop() and shift()Passed and return their values

function popShift(arr3) {
  let popped = arr3.pop();
  let shifted = arr3.shift();
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"])); // [ 'challenge', 'complete' ]

//Remove Items Using splice()
//first parameter represents the index on the array from which (included) to begin removing elements
//second parameter indicates the number of elements to delete

let array4 = ["today", "was", "not", "so", "great"];
array4.splice(2, 2); //['today', 'was', 'great']
let array5 = ["I", "am", "feeling", "really", "happy"];
let newArray5 = array5.splice(3, 2);
console.log(newArray5); //["really", "happy"]

//Add Items Using splice()
function htmlColorNames(arr6) {
  arr6.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr6;
}
console.log(htmlColorNames(["DarkGoldenRod", "WhiteSmoke", "LavenderBlush", "PaleTurquoise", "FireBrick"]));
//(5) ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]

//Copy Array Items Using slice() - extracts a given number of elements to a new array - start index to end index(not included)
function forecast(arr7) {
  let forecastToday = arr7.slice(2, 4);
  return forecastToday;
}
console.log(forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]));
//(2) ["warm", "sunny"]

//Copy an Array with the Spread OperatorPassed
function copyMachine(arr8, num) {
  let newArr8 = [];
  while (num >= 1) {
    newArr8.push([...arr8]);
    num--;
  }
  return newArr8;
}

console.log(copyMachine([true, false, true], 2)); // [ [ true, false, true ], [ true, false, true ] ]

/////
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}

console.log(spreadOut()); // [ 'learning', 'to', 'code', 'is', 'fun' ]

//IndexOf()
function quickCheck(arr9, elem) {
  if (arr9.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms")); // false
///////
function quickCheck(arr10, elem) {
  return arr10.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms")); // false

/// Iterate an Array
function greaterThanTen(arr11) {
  let newArr11 = [];
  for (let i = 0; i < arr11.length; i++) {
    if (arr11[i] > 10) {
      newArr11.push(arr11[i]);
    }
  }
  //return newArr;
  console.log(newArr11);
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]); // (3) [12, 14, 80]

/////
function filteredArray(arr12, elem) {
  let newArr12 = [];
  for (let i = 0; i < arr12.length; i++) {
    if (arr12[i].indexOf(elem) == -1) {
      newArr12.push(arr12[i]);
    }
  }
  return newArr12;
}
console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
console.log(
  filteredArray(
    [
      ["trumpets", 2],
      ["flutes", 4],
      ["saxophones", 2],
    ],
    2
  )
);
console.log(
  filteredArray(
    [
      ["amy", "beth", "sam"],
      ["dave", "sean", "peter"],
    ],
    "peter"
  )
);

//Add key values to an object
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods.bananas = 13;
foods["grapes"] = 35;
const strawberries = "strawberries ";
foods["strawberries"] = 27;

console.log(foods);

//Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

userActivity.data.online = 45;

console.log(userActivity);

//Write Arrow Functions with Parameters
const doubler = (item) => item * 2;
doubler(4);
console.log(doubler(4));
console.log(doubler(11));

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
console.log(multiplier(3, 2));

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

const increment = (number = 1, value) => number + 6;
console.log(increment()); //7
console.log(increment(4)); //10

const increment1 = (number, value = 1) => number + value;
console.log(increment1()); // NaN
console.log(increment1(3)); //4

/// REDUCE
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(2, 4, 6)); //12
console.log(sum(1, 3, 6, 10)); //20

const product = (...n) => {
  return n.reduce((a, b) => a * b, 1);
};
console.log(product(2, 4, 6)); //48
console.log(product(3, 5)); //15

//apply()
var arr13 = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr13);
console.log(maximus); //89

const arr14 = [6, 89, 3, 45];
const maximus2 = Math.max(...arr14);
console.log(maximus2); //89

/// spread operator [...]
const arr15 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr16;

arr16 = [...arr15];
console.log(arr16);

//Destructuring Assignment
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
  dayAfterTomorrow: 95,
};

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;
console.log(HIGH_TEMPERATURES.today); //77
console.log(HIGH_TEMPERATURES.tomorrow); //80

const { yesterday, dayAfterTomorrow } = HIGH_TEMPERATURES;
console.log(HIGH_TEMPERATURES.yesterday); //75
console.log(HIGH_TEMPERATURES.dayAfterTomorrow); //95

const HIGH_TEMPERATURES2 = {
  yesterday2: 75,
  today2: 105,
  tomorrow2: 80,
};
const { today2: highToday, tomorrow2: highTomorrow } = HIGH_TEMPERATURES2;
console.log(highToday); //105

const LOCAL_FORECAST = {
  yesterday3: { low3: 61, high3: 75 },
  today3: { low3: 64, high3: 77 },
  tomorrow3: { low3: 68, high3: 80 },
};
const {
  today3: { low3: lowToday3, high3: highToday3 },
} = LOCAL_FORECAST;
console.log(lowToday3); //64

////////
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

let x = 8,
  y = 6;
[x, y] = [y, x];
console.log(y, x); //8 6

//Use Destructuring Assignment with the Rest Parameter to Reassign Array ElementsPassed
//Array.prototype.slice()
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [a, b, ...arr17] = list;
  return arr17;
}
const arr17 = removeFirstTwo(source);
console.log(arr17);

//////
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0;
console.log(half(stats)); //28.015

////
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);

//////
const createPerson = (name, age, gender) => {
  return { name, age, gender };
};
console.log(createPerson("Irene", 51, "female"));

/////
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);

///////
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); // carrot

///Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);
console.log(convertToF(45)); //133

///REVERSE A STRING

function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

reverseString("hello");
console.log(reverseString("hello"));
console.log(reverseString("irene"));

//Factorialize a NumberPassed
function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}
factorialize(5);
console.log(factorialize(5));
console.log(factorialize(7));

// Find the longest word in a string
//console.log(str.length); //44
//console.log(str.split("")); //["T", "h", "e", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x", " ", "j", "u", "m", "p", "e", "d", " ", "o", "v", "e", "r", " ", "t", "h", "e", " ", "l", "a", "z", "y", " ", "d", "o", "g"]

function findLongestWordLength(str) {
  let words = str.split(" "); // don't forget 1 space between (" ") string
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//Using.reduce()
function findLongestWordLength2(s) {
  return s.split(" ").reduce(function (longest, word) {
    return Math.max(longest, word.length);
  }, 0);
}

findLongestWordLength2("May the force be with you");
console.log(findLongestWordLength2("May the force be with you"));

////Return Largest Numbers in Arrays
function largestOfFour(arr20) {
  let results = [];
  for (let i = 0; i < arr20.length; i++) {
    let largestNumber = arr20[i][0];
    for (let j = 1; j < arr20[i].length; j++) {
      if (arr20[i][j] > largestNumber) {
        largestNumber = arr20[i][j];
      }
    }
    results[i] = largestNumber;
  }
  console.log(results);
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]); //[5, 27, 39, 1001]

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]); //[25, 48, 21, -3]

//Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "n")); //true
console.log(confirmEnding("Irene", "r")); //false

//Repeat STRING
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
}

repeatStringNumTimes("abc", 3);
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("ca", 8));

//Truncate a STRING
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));

/// typeof
const text = "¿De qué tipo soy?";
console.log("Soy de tipo:", typeof text); // con paréntesis
console.log("Soy de tipo:", typeof text); // sin paréntesis

//parseInt; change string into num
const userAge = document.querySelector(".user__age");
console.log(userAge.innerHTML); // esto es un string
const yearsToRetirement = 67 - parseInt(userAge.innerHTML);
console.log(`Te quedan ${yearsToRetirement} años para jubilarte`);

//isNaN
let userAge2 = document.querySelector(".user__age2");
userAge2 = parseInt(userAge2.value);
console.log("La usuaria no ha introducido una edad válida:", isNaN(userAge2));

//Dog age
const firstYearDog = 15;
const secondYearDog = 9;
const restYearDog = 5;

const humanYear = 8;
let resultA = 0;

if (humanYear === 1) {
  resultA = firstYearDog;
  console.log("La edad del perro es: " + resultA);
} else if (humanYear === 2) {
  resultA = firstYearDog + secondYearDog;
  console.log("La edad del perro es: " + resultA);
} else {
  resultA = firstYearDog + secondYearDog + (humanYear - 2) * restYearDog;
  console.log("La edad del perro es: " + resultA);
}

//////
// The global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");

console.log(bookList);
console.log(newestBookList);

//// PALINDROME CHECKER
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}

palindrome("eye");
console.log(palindrome("eye")); // true
console.log(palindrome("irene")); // false

//// ROMAN NUMERAL CONVERTER
function convertToRoman(num) {
  if (isNaN(num)) return NaN;
  var digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    roman = "",
    i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

convertToRoman(36);
console.log(convertToRoman(36)); //XXXVI

///Caesars Cipher
const A_CODE = "A".charCodeAt(0);
function rot13(str) {
  let output = "";
  for (const c of str) {
    if (!/[A-Z]/.test(c)) {
      output += c;
    } else {
      let code = c.charCodeAt(0);
      code -= 13;
      if (code < A_CODE) {
        code += 26;
      }
      output += String.fromCharCode(code);
    }
  }

  return output;
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC")); /// FREE CODE CAMP

///////
function telephoneCheck(str) {
  if (str.indexOf("(") === -1 && str.indexOf(")") > -1) return false;
  if (str.indexOf(")") - str.indexOf("(") >= 5) return false;
  if (str[0] === "-") return false;

  let tel = str.replace(/-| /g, "");

  if (tel.indexOf("(") < tel.indexOf(")")) {
    tel = tel.replace(/\(|\)/g, "");
  }
  if (tel.length === 10) {
    return true;
  } else if (tel.length === 11 && tel[0] === "1") {
    return true;
  }
  return false;
}

telephoneCheck("555-555-5555");
console.log(telephoneCheck("55 55-55-555-5")); //true but should be false. Solution???

/////
var re =
  /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck12(str12) {
  return re.test(str12);
}

telephoneCheck12("555-555-5555");
console.log(telephoneCheck12("55 55-55-555-5")); //false
