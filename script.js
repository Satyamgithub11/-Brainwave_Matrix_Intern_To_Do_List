document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const newTaskText = taskInput.value.trim();

    if (newTaskText) {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.innerText = newTaskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');
        
        // Delete task on button click
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });
        
        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);

        // Clear the input
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});