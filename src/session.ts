// npm init
// npm i typescript --save-dev
// npx tsc --init => Create
// npx tsc -w

console.log("first");
type Title = "Employee" | "Employer"

interface Username { name: string, readonly title: Title, age?: number }

// Ternary if =>  condition ? true : false

5 > 4 ? console.log("OK") : console.log("No")
// Type safety


var x: number = 5;
var username: string | undefined = "Mohamed";

username = undefined

let user: Username = {
    name: "Khaled",
    title: "Employer"
}

let students: (string | number)[] = ['s', 'sdsd', 333333]


let test: unknown = "sdfs"

test = 784;

test = undefined;

// let testInput: HTMLElement | null = document.getElementById("testInput");

// type assertions
let testInput = document.getElementById("testInput") as HTMLInputElement;



testInput?.addEventListener('keyup', (ev: any) => {
    let result: string = ev.target.value
    console.log(result)
})



function myFun(value: string): number {
    return value.length
}


function testFun(): void {
    var item: HTMLElement | null = document.getElementById('output');
    item && (item.textContent = 'test')
    console.log("first")
}
// Generic
function myFun2<T>(value: T): T {
    return value
}


myFun2<string>('45')
myFun2<number>(45)


// Public & protected & private ..... readonly
