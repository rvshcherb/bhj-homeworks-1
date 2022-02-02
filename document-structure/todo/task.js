(function() {
  const taskList = document.getElementById('tasks__list');
  const taskInput = document.getElementById('task__input');
  const form = document.getElementById('tasks__form');

  form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    taskList.insertAdjacentHTML('afterBegin', 
    `<div class="task">
      <div class="task__title">
        ${taskInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>` );
    form.reset();
  });

  taskList.addEventListener('click', function(evt) {
    if(evt.target.className === 'task__remove') {
      evt.target.closest('.task').remove();
    }
  });

})();