let x = 5;

if (x == 10) console.log("OK")
else if (x === 5) { console.log("NO"); }
else { console.log("NONE"); }


// ES 6
// Ternary Operator
5 > 4 ? console.log("YES") : console.log("NO");

let result = 50;

result > 100 ? console.log("BIG") : console.log("SMALL");

let score = 5;

let grade = score > 50 ? "PASS" : "FAIL";

console.log(grade)


console.log(5 % 2)
console.log(4 % 2)

var myNumber = 10;

if (myNumber % 2 == 0) {
    console.log("EVEN");
} else {
    console.log("ODD");
}

myNumber % 2 == 0 ? console.log("EVEN") : console.log("ODD");


// let username = prompt("Please enter your name"), password = +prompt('Please enter your password');

// console.log(username)
// console.log(password)

// if (username === "admin" && password === 1234) {
//     console.log("WELCOME ADMIN");
// } else {
//     console.log("ACCESS DENIED");
// }


let NewScore = 75

if (NewScore >= 90 && NewScore <= 100) {
    console.log("A");
}



// var employees2 = new Array("Ahmed", "Sayed", "Ali", "Omar", "Mahmoud");

// console.log(typeof employees2)
// console.log(employees2)
// console.log(employees2.length)

var employees = ["Ahmed", "Sayed", "Ali", "Omar", "Mahmoud", "Gamal", "Amr"],
    hr = ["Samah", "Eman", "Nour"];

console.log(typeof "")
console.log(typeof employees)
console.log(employees)
console.log(employees.length)
console.log(employees[0])
console.log(employees[1])
console.log(employees[employees.length - 1])
console.log(employees.at(-2))


/* Array methods */
console.log(employees.concat(hr))
console.log(employees.join(" - "))



console.log("first second".split(" "))


/************************* Array methods ****************************/
var arr1 = ["Mohamed", "Ahmed", "Ali", "Omar", "Mohamed", 5, 8, 87, 12],
    arr2 = ["Mahmoud", "Omar", "Shimaa"],
    arr3 = [5, 6];


/********************************************* concatenation ****************

console.log(arr1.concat(arr2, arr3));

/*********************************************  copy *

console.log(arr1.copyWithin(1, 0));

console.log(arr1);

/*********************************************   fill ***************

console.log(arr1.fill("Js", 2, 4));


/*********************************************   includes **************/
console.log(arr1);
console.log(arr1.includes("Mohamed"));

/*********************************************   index of  **************
console.log(arr1);

console.log(arr1.indexOf("Mohamed"));

console.log(arr1.indexOf("Ahme")) //error

/*********************************************   last index of  **************/
console.log(arr1);
console.log(arr1.lastIndexOf("Mohamed"))

/*********************************************   is array **************/

console.log(Array.isArray(arr1))

/*********************************************   join **************/
console.log(arr1.join(" & "));
console.log(typeof arr1.join(""));

/*********************************************   pop ************** x >> from main array *
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

/*********************************************   shift ************** from main array *
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);
/*********************************************   push ************** X >>> *
console.log(arr1);
arr1.push("MO");
console.log(arr1);

/*********************************************   unshift **************
console.log(arr1);
arr1.unshift("MO2");
console.log(arr1);

/*********************************************   splice *************
console.log(arr1);

console.log(arr1.splice(2, 3, "A", "B", "C")); // remove and add

console.log(arr1);
/*********************************************   reverse **************
console.log(arr1);
console.log(arr1.reverse());

/*********************************************   sort **************

var newArr = ["Mohamed", "Ali", "aza", 12, "aac", "abb"];
console.log(newArr.sort());

console.log([23, 32, 332, 2014, 123, 220].sort((a, b) => a - b)); // Ascending

/*********************************************   slice **************/
console.log(arr1);
console.log(arr1.slice(2, 4));
console.log(arr1);

/*********************************************   to string **************/

console.log(arr1.toString());
console.log(typeof arr1.toString());
// */



////////////////////////////////////////////////////////////////////
/*
1- contatenate two arrays and check if any item is num or not ( use every and typeof ) and output if greater then 3 .

2- create  a prompt to get tasks and push all in an array then output all at tour page .

3- create a  three prompt ages  and get it's values then check if any one is under age or not
EXAMPLE >>> [25 , 5 ,  12 , 25 , 55]
OUTPUT >>> you have all is not +18 (with every if return true) && you have just 5 and 12 is underage (with if condition)




4- create four prompt get text values then (display it in console ordered with sort ) [like >> 1-Mohamed]

5- create an array when you find (no) then convert all next elements in array to (thanks)
EXAMPLE >>> ["Mohamed" , 1 , "Hey" , "no" ,"Front" , "JS"]
OUTPUT >>> ["Mohamed" , 1 , "Hey" , "no" ,"thanks" , "thanks"]
hint : user loop , if and fill()
*/


let y = 10;
console.log(y)

{
    let y = 20;
    console.log(y)
}
console.log(y)

// { var u = 10; }
// console.log(u)

// Redeclare : with var is allowed but with let & const is not allowed
// Reassign : with var & let is allowed but with const is not allowed
// Block scope :  const & let is block scope but var is not
// Hoisting : var (Global scope) is hoisted but let & const are not hoisted
