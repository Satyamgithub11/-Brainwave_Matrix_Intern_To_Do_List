document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✖';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);
    taskInput.value = ''; // Clear input field
}