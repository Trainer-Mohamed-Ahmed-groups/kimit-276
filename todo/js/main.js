const myForm = document.forms[0],
    myTask = document.getElementById('task'),
    output = document.getElementById('output'),
    tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];


window.onload = function () {
    renderTasks();
}
myForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (myTask.value.trim() === '') {
        alert('Please enter a task!');
    }
    else {
        beforeAdding();
        ///
        saveTasks();
        afterAdding();
    }
})


function afterAdding() {
    myTask.value = '';
    myTask.focus();
}

function beforeAdding() {
    if (tasks.indexOf(myTask.value) !== -1) {
        alert('This task already exists!');
    }
    else {
        tasks.push(myTask.value);
        output.innerHTML = '';
        renderTasks();
    }
}

function renderTasks() {
    for (let index = 0; index < tasks.length; index++) {
        const element = tasks[index];
        output.innerHTML += `<li>${element}</li>`;
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// console.log(confirm("Are u sure"))
// https://codepen.io/mohamed-ahmed10/pen/raxxKXa
