// Get the task list and task form elements
const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const dueDateInput = document.getElementById('due-date-input');

// Initialize an empty task list array
let tasks = [];

// Function to add a new task
function addTask(task, dueDate) {
    tasks.push({ task, dueDate, completed: false });
    renderTaskList();
}

// Function to render the task list
function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskListItem = document.createElement('li');
        taskListItem.textContent = `${task.task} (Due: ${task.dueDate})`;
        if (task.completed) {
            taskListItem.classList.add('completed');
        }
        taskListItem.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTaskList();
        });
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTaskList();
        });
        taskListItem.appendChild(deleteBtn);
        taskList.appendChild(taskListItem);
    });
}

// Event listener for the add task button
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = taskInput.value.trim();
    const newDueDate = dueDateInput.value.trim();
    if (newTask && newDueDate) {
        addTask(newTask, newDueDate);
        taskInput.value = '';
        dueDateInput.value = '';
    }
});

// Initialize the task list
renderTaskList();


