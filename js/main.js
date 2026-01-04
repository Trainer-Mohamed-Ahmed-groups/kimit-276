console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.forms)
console.log(document.images)
console.log(document.links)


var myId = document.getElementById('myId'),
    myClass = document.getElementsByClassName('myClass'),
    myTag = document.getElementsByTagName("div"),
    myName = document.getElementsByName('username')

console.log(myId)
console.log(myClass)
console.log(myTag)
console.log(myTag.myId)
console.log(myName)


let myClass2 = document.querySelectorAll('.parent > .myClass')

console.log(myClass2)


console.log(myName[1].getAttribute("placeholder"))


function addNewAttr() {
    myName[0].setAttribute('kimit', 'academy')
}




let myPasswordInput = document.getElementById('userPass'),
    passwordBtn = document.querySelector('#passwordBtn')

console.log(passwordBtn)
function handleShow() {
    // if (myPasswordInput.getAttribute('type') === 'password') {
    //     myPasswordInput.setAttribute('type', 'text')
    //     passwordBtn.textContent = "Hide"
    // } else {
    //     myPasswordInput.setAttribute('type', 'password')
    //     passwordBtn.textContent = "Show"
    // }
}


/******************************************************* */
var myCreatedTag = document.createElement('p'),
    myText = document.createTextNode('This is from Js'),
    myComment = document.createComment("This comment from JS"),
    output = document.getElementById('output');


myCreatedTag.append(myText, myComment)
console.log(myCreatedTag)


// output.appendChild(myCreatedTag)


console.log(output.innerHTML)
output.innerHTML += 'Hello Js'

var myName = "Mohamed"

output.innerHTML = `<div>This is div from JS => ${myName}</div>`


// Todo

let testDivision = document.getElementById('testDivision');
function handleClass() {
    // testDivision.style.fontWeight = 'bold'
    // testDivision.className = "text-blue"


    // testDivision.classList.add('text-blue')
    // testDivision.classList.remove('test')
    // testDivision.classList.toggle('text-blue')
    // console.log(testDivision.classList.contains('test'))
    console.log(testDivision.classList.item(1))
}


console.log(document.getElementsByClassName('parent')[0].children)
console.log(document.getElementsByClassName('parent')[0].childNodes)
console.log(document.getElementsByClassName('parent')[0].children[2].children[0])
