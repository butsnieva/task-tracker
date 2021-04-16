var buttonEl = document.querySelector("#save-task");
var tasksTodoEl = document.querySelector('#tasks-todo');

var createTaskHandler = function() {
    var listItemEl = document.createElement('li');
    listItemEl.textContent = 'New task';
    listItemEl.className = 'task-item';
    tasksTodoEl.appendChild(listItemEl);
};
buttonEl.addEventListener('click', createTaskHandler);