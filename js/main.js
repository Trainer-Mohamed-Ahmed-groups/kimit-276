// JSON => JavaScript Object Notation
// API => Application Programming Interface


let person = {
    name: "Kimit",
    age: 27
}
console.log(person)
console.log(typeof person)
console.log(JSON.stringify(person))

console.log("********************")
let personJson = `{"name": "Kimit","age": 27}`
console.log(personJson)
console.log(typeof personJson)
console.log(JSON.parse(personJson))


// Ajax => Asynchronous JavaScript And XML
// XML => eXtensible Markup Language
// XHR => XML Http Request
// HTTP => HyperText Transfer Protocol
// HTTPS => HyperText Transfer Protocol Secure


// 0- Connection not established
// 1- Connection established
// 2- Request sent
// 3- Processing request
// 4- Response is ready

let xhr = new XMLHttpRequest(),
    output = document.getElementById("output");

console.log(output)


// xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         let res = JSON.parse(this.responseText)
//         res.forEach(element => {
//             output.innerHTML += `<li>${element.name} - ${element.website}</li>`;
//             console.log(element.name)
//         });
//     }
// }


// xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
// xhr.send()


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(res => {
//         output.innerHTML = "";
//         res.forEach(element => {
//             output.innerHTML += `<li>${element.name} - ${element.website}</li>`;
//         });
//     }).catch(error => console.log(`Error: ${error}`));


fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(res => {
        output.innerHTML = "";
        res.forEach(product => {
            output.innerHTML += `<li>
            <img src="${product.image}" alt="${product.title}" style="width:50px;height:50px;object-fit:contain;margin-right:10px;vertical-align:middle;">
            <a href="/product-details.html?id=${product.id}">${product.title}</a>
             - ${product.price}
            </li>`;
        });
    }).catch(error => console.log(`Error: ${error}`));
