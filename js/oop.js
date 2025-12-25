function testFn() {
    console.log(this)
}

document.getElementById('btn').onclick = () => console.log(this)
// document.getElementById('btn').onclick = function () { console.log(this) }


var person = {
    name: "Ali",
    age: 20,
    getName: function () {
        return "Hello " + this.name
    }
}

console.log(person)

console.log(person.getName())
///////////////////////////////////////////////////////
// function Person(name, gender) {
//     this.name = name;
//     this.gender = gender
// }

class Person {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }
}

var personOne = new Person("Ali", "Male")
var personTwo = new Person("ahmed", 22)
console.log(personOne)
console.log(personTwo)


class Doctor extends Person {
    constructor(name, gender, title) {
        super(name, gender)
        this.title = title
    }
}

var doctorOne = new Doctor("Mahmoud", "Male", "Prof")

console.log(doctorOne)


String.prototype.sayHello = function (name) {
    return "Hello " + name
}

console.log(String.prototype)

console.log("Mohamed".sayHello("Mohamed"))