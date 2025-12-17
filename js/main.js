var car = {
    model: 2022,
    name: "mercedes",
    country: "Germany",
    isSold: false,
    isSold: true,
    owner: {
        firstName: "Mohamed",
        lastName: "Ahmed"
    },
    previous: [1, 2, 3, 4, 5]
}
// Key (property ) : value
console.log(car)

// Bracket notation
console.log(car["name"])
console.log(car["owner"]["lastName"])
console.log(car["previous"][2])

// Dot notation
console.log(car.country)
console.log(car.owner.lastName)
console.log(car.previous[2])

console.log(Object.keys(car))
// console.log(Object())
////////////////////////////////////////////////////////////////

let mySet = new Set([1, 20, 32, 4, 4, 1, 6]);

console.log(mySet)

// mySet.add(1);
// mySet.add('some text');
// mySet.add(true);
console.log(mySet)
console.log(mySet.size)
mySet.delete(32);
console.log(mySet)
console.log(mySet.size)

console.log(mySet.has(1));
console.log(mySet.has(32));

console.log(mySet.entries())

mySet.clear()
console.log(mySet)


console.log(typeof mySet)


/////////////////////////////////////////////
const myMap = new Map()

myMap.set("key1", 1)
myMap.set("key2", 20)
myMap.set(50, 30)
console.log(myMap)
console.log(myMap.get("key2"))



////////////////////////////////////////////////

console.log("*".repeat(20))
// let i = 0;
// while (i <= 10) {
//     console.log(i)
//     i += 2
// }

// console.log(i)

console.log("*".repeat(20))
let u = 1;

do {
    console.log(u);
    u++;
} while (u <= 10);

console.log("*".repeat(20))

for (let i = 0; i <= 10; i++) {
    console.log(i)
}
// console.log(i) // ERROR


var employees = ["Ahmed", "Nour", "Aya", "Mazen", "Malak"];

for (let index = 0; index < employees.length; index++) {
    const element = employees[index];
    console.log(element)
}


var myNumbers = [1, 2, 3, 4, 5, 6, 7],
    even = [];

for (let index = 0; index < myNumbers.length; index++) {
    const element = myNumbers[index];
    if (element % 2 === 0) {
        even.push(element)
    }
}
console.log(even)


let myStrings = ['a', 'b', 'c', 'a', 'c', 'a', 'z'],
    result = new Map(),
    result2 = {}

for (let index = 0; index < myStrings.length; index++) {
    const myString = myStrings[index];
    // if (result.has(myString)) {
    //     result.set(myString, result.get(myString) + 1)
    // } else {
    //     result.set(myString, 1)
    // }

    // /////////////////////////////////////////
    // result.set(myString, (result.get(myString) !== undefined ? result.get(myString) : 0) + 1)
    result.set(myString, (result.get(myString) || 0) + 1)
    // /////////////////////////////////////////

    result2[myString] = (result2[myString] || 0) + 1

}
// {'a' : 3 } {'b' : 1} {'c' : 2}

console.log(result2)
console.log(result)
var test =
{
    a: 10,
    b: 1,
    c: 1
}
console.log(test.a)

console.log("*".repeat(20))
console.log("*".repeat(20))

for (let index = 1; index <= 10; index++) {
    // if (index % 2 === 1) continue;
    // if (index % 2 === 0) continue;
    if (index === 5) break;
    console.log(index)
}
console.log("*".repeat(20))

// for (let index = 1; index <= 10; index += 2) {
for (let index = 1; index <= 10; index++) {
    if (index % 2 === 0) continue;
    console.log(index)
}

console.log("*".repeat(20))


for (let i = 1; i <= 10; i++) {
    console.log("i => " + i)
    for (let j = 1; j <= 10; j++) {
        console.log(i + j)
    }
    console.log("----")
}

let customers = [["Ahmed", 20], ["Ali", 50], ["Ibrahim", 24]]

for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];

    for (let j = 0; j < customer.length; j++) {
        const data = customer[j];
        console.log(data)
    }
    // console.log(customer)
}


for (const str of myStrings) {
    console.log(str)
}

console.log("*************")
// for (const key in car) {

//     // const element = car[key];
//     console.log(car[key])

// }
for (const i in myStrings) {

    console.log(i)

}

// Use for in [1,2,3,4,8,8] print sum
let nums = [1, 2, 3, 8, 4, 8],
    result3 = 0

// for (const element of nums) {
//     result3 += element
// }

for (const index in nums) {
    result3 += nums[index]
}
console.log(result3)
/////////////////////////////////////////////////////////////////

sayHello()
// Declaration function : Can hoisted
function sayHello() {
    console.log("Hello")
}

// Expression || anonymous function  : Not hoisted
var sayHello2 = function () {
    console.log("Hello 2 ")
}
sayHello2()

// Arrow function

var multi = (x = 1, y = 1) => { x * y }

console.log(multi(8, 5))

console.log(typeof sayHello)
console.log(typeof sayHello2)
console.log(typeof multi)


/* Returning value function & void function */

function sayHello4() {
    return 5
}

console.log(sayHello4())
console.log(sayHello4() * 5)

/* Function with parameters */

function sum(x = 0, y = 0) {
    return x + y
}

console.log(sum(6, 9))
console.log(sum(60, 79))
console.log(sum(60))
console.log(sum())



function outer() {

    let outerVar = "I am outside!";

    function inner() { console.log(outerVar); }

    return inner();

}

outer()
