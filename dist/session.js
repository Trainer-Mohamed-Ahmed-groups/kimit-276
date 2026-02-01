"use strict";
// npm init
// npm i typescript --save-dev
// npx tsc --init => Create
// npx tsc -w
console.log("first");
// Ternary if =>  condition ? true : false
5 > 4 ? console.log("OK") : console.log("No");
// Type safety
var x = 5;
var username = "Mohamed";
username = undefined;
let user = {
    name: "Khaled",
    title: "Employer"
};
let students = ['s', 'sdsd', 333333];
let test = "sdfs";
test = 784;
test = undefined;
// let testInput: HTMLElement | null = document.getElementById("testInput");
// type assertions
let testInput = document.getElementById("testInput");
testInput?.addEventListener('keyup', (ev) => {
    let result = ev.target.value;
    console.log(result);
});
function myFun(value) {
    return value.length;
}
function testFun() {
    var item = document.getElementById('output');
    item && (item.textContent = 'test');
    console.log("first");
}
// Generic
function myFun2(value) {
    return value;
}
myFun2('45');
myFun2(45);
// Public & protected & private ..... readonly
