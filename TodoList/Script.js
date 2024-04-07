const formEl = document.getElementById('task-area')
const inputEl = document.getElementById('single-task')
const UnOrderEl = document.getElementById('tasks')

// Add a new task to the list

function addTask(e){
    e.preventDefault()
    // console.log(inputEl.value);
    
    if(inputEl.value === "") return;

    const task = createTask(inputEl.value)
    UnOrderEl.appendChild(task)
    inputEl.value =""
}

// Create a new task element

function createTask(taskName){
    const task = document.createElement('li')
    task.classList.add('task')
    task.innerHTML = `
    <input type="checkbox"/>
    <label>${taskName}</label>
    <span class="delete">&times;</span>
    `

    // Add a delete button

    const deleteBtn = task.querySelector('.delete')
    deleteBtn.addEventListener('click',deleteTask)
    
    return task

}

// Delete a task from the list

function deleteTask(e){
    e.target.parentElement.remove()
}

formEl.addEventListener('submit',addTask)