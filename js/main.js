console.log("Hello external")


var username = "Mohamed",
    lastName = "Ali";
console.log(username)
console.log(username + " " + lastName) // Concatenation
console.log(`${username} ${lastName}`) // Concatenation
username = "Ahmed"; //string
console.log(username);
console.log(typeof username)

let age = 25;
console.log(age)

age = 30; // number
console.log(age)
console.log(typeof age)

const country = "Egypt";
console.log(country)

// country = "USA"; // This will cause an error
// console.log(country)


console.log("first")


/* Data types */
const isVisited = false; // Boolean
console.log(isVisited)
console.log(typeof isVisited)

console.log("******************")
var found;
console.log(found) // undefined
console.log(typeof found)

console.log("******************")

var salary = null;
console.log(typeof salary);

console.log(document.getElementById('test'))

var x = 10;
console.log(x)
/*
1- reserved words in JavaScript not allowed as variable names
2- variable name should not start with a number
3- no special characters allowed except _ and $
4- no spaces allowed in variable names
5- case sensitive
6- use camelCase for multi-word variable names
*/

/* Naming conventions
1- camelCase
2- PascalCase
3- snake_case
4- kebab-case (not allowed in JS)
*/


// var firstName = prompt("Enter your first name");
// console.log("Your first name is: " + firstName);


// Binary arithmetic operators: +, -, *, /, % , **

var a = 10;
var b = 3;

console.log(12 % 3)

console.log(5 ** 4)
// Unary arithmetic operators: ++, --

var c = 5;
console.log(c)
c++;
console.log(c); // 6
console.log(++c) // 7
console.log(c--) // 7
console.log(c) // 6


// Assignment operators: =, +=, -=, *=, /=, %=
console.log("****************")
var i = 20;
console.log(i)

// i = i + 5;
i %= 5;
console.log(i)


// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
console.log("****************")
let m = 10;
let n = "10";

console.log(m == n) // true
console.log(m === n) // false
console.log(m != 10) // false
console.log(m !== n) // true
console.log("50" > 40);
console.log(5 * "4");
console.log(5 + "4");


//  Logical operators: &&, ||, !
console.log("****************")
console.log(!true)
console.log(5 > 4 && 20 > 15)
console.log(5 > 5 || 20 > 15)


console.log(5 && 8 && 10);
console.log(5 && 0 && 10);
console.log(5 && " " && 10);
console.log(5 && undefined && 10);
console.log(5 && null && 10);
// And operator returns the first falsy value or the last value if all are truthy


console.log(5 || 8 || 10);
console.log(5 || 0 || 10);
console.log(5 || " " || 10);
console.log(undefined || 9 || 10);
console.log(5 || null || 10);
// Or operator returns the first truthy value or the last value if all are falsy


// String methods
console.log(new String)

let academy = "Kimit Academy",
    AcademyLocation = "Nasr city";

console.log(academy.length)
console.log(academy.charAt(0))  // K
console.log(academy.charAt(academy.length - 1))  // y
console.log(academy.charCodeAt(0))  // 75
console.log(academy.indexOf("a")) // 6
console.log(academy.lastIndexOf("a")) // 8
console.log(academy.indexOf("z")) // -1
console.log(academy + " " + AcademyLocation)
console.log(`${academy} ${AcademyLocation}`)
console.log(academy.concat(AcademyLocation))
console.log(academy.toUpperCase())
console.log(academy.toLowerCase())
console.log(academy.includes("de"))
console.log(academy.startsWith("Kie"))
console.log(academy.endsWith("ky"))
console.log(academy.slice(2, 7))
console.log(academy.substring(2, 7))
console.log(academy.substr(2, 7))
console.log(academy.replace("i", "e"))
console.log(academy.replaceAll("i", "e"))
console.log(academy.split(''))
console.log(academy.split(' '))


var user = "Ahmed Ali";
console.log(user.slice(0, 5))
console.log(user.split(' ')[0])

// "Kimit Academy"
var regex = /a/igm

console.log(typeof regex)
console.log(academy.match(regex))
console.log(academy.search(/a/i))
console.log(regex.test(academy))


let input = "12 34 Gfr@5#$ 8e78T6";

console.log(input.match(/\d/g))
console.log(input.match(/\D/g))

console.log(input.match(/\w/g))
console.log(input.match(/\W/g))

console.log(input.match(/\s/g))
console.log(input.match(/\S/g))


console.log(input.match(/./g))
console.log(input.match(/^\w/g))
console.log(input.match(/\w$/g))

console.log(input.match(/[a-z,A-Z]/g))
console.log(input.match(/[1-5]/g))
console.log(input.match(/[^1-5]/g))

let userId = "Ahmed_12";
console.log(userId.match(/^[A-Z,a-z]*_?\d+$/g))
console.log(userId.match(/^[A-Z,a-z]{3,}[_]{1}\d{2,}$/g))
console.log(userId.match(/^[A-Z,a-z]{3,}[_]{1}\d?$/g))



let email = "test@example.";

let emailPattern = /^\S+@\S+\.\S+$/;


console.log((emailPattern.test(email) && "Valid Email") || "Invalid Email");
