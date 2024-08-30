document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (!username) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('usernameDisplay').textContent = username;
    }

    document.getElementById('addTaskBtn').addEventListener('click', addTask);
    document.getElementById('taskInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTask();
    });

    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Remover';
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });

            li.appendChild(deleteBtn);
            document.getElementById('taskList').appendChild(li);
            taskInput.value = '';
        }
    }
});
