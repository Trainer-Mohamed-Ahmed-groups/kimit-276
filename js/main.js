var arr = new Array(5).fill('test')

console.log(arr)


var myNum = 5.872;

console.log(Math.E)
console.log(Math.round(5.3))
console.log(Math.round(5.5))
console.log(Math.ceil(5.01))
console.log(Math.floor(5.99))
console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.round(Math.random() * 10))
console.log(Math.PI) // 22/7

// .9999 * 10 = 9.999 Ceil => 10 Floor => 9
// .0001 * 10 = .001  Ceil => 1  Floor => 0


var employees = ["Ahmed", "Ali", "Mohamed", "Khaled", "Sayed"]

console.log(Math.floor(Math.random() * 4))


console.log(employees[Math.floor(Math.random() * employees.length)])

console.log(Math.pow(5, 3))
console.log(Math.sqrt(25))
var myNums = [45, 87, 5, 15, 48, 43, 1, 40, 7]
console.log(Math.max(...myNums))
console.log(Math.min(...myNums))
console.log(...myNums)


///////////////////////////////////////////////////



console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.isFinite(1 / 0))
console.log(Number.isInteger(55))


var x = 500.4623
console.log(parseInt(x))
console.log(parseFloat(x))
console.log(x.toPrecision(2))
console.log(x.toFixed(2))


const myDate = new Date();

console.log(myDate)


const d = new Date("2024-12-28");
const b = new Date("2025-01-05");

console.log(d.getTime() / 1000 / 60 / 60 / 24)
console.log(b.getTime() / 1000 / 60 / 60 / 24)
console.log(b.getTime() / 1000 / 60 / 60 / 24 - d.getTime() / 1000 / 60 / 60 / 24)


/************************************************** */

let person = {
    name: "Ali",
    age: 50,
    gender: "Male"
}

// let name = person.name,
//     age = person.age;
let { name: username, age } = person

console.log(person)
console.log(username)
console.log(age)



export let students = ["Ali", "Khaled", "Othman"]

let [leader, , member] = students;

console.log(leader)
console.log(member)

///////////////////////////////
export function sum(a, b, ...c) {
    console.log(c)
    return a + b
}

console.log(sum(5, 8, 3, 4, 5, 8))


//////////////////////////////

var x = 5
export default x;
