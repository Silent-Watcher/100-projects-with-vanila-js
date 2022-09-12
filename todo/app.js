const $ = document;
const addTaskBtn = $.querySelector('#addTask');

addTaskBtn.addEventListener('click', (event) => {
  addNewTask(event.target.previousElementSibling.value);
  event.target.previousElementSibling.value = null;
});

function addNewTask(content) {
  let taskTemplate = `
    <section class="todo">
        <p class="todo__content">${content}</p>
        <button class="trash"><i class="uil uil-trash"></i></button>
    </section>
    `;
  $.querySelector('#list').insertAdjacentHTML('beforeend', taskTemplate);
}

$.querySelector('#list').addEventListener('click', (event) => {
  if (event.target.classList.contains('todo__content')) {
    event.target.classList[
      event.target.classList.contains('done') ? 'remove' : 'add'
    ]('done');
  } else if (event.target.className === 'uil uil-trash')
    event.target.parentElement.parentElement.remove();
});
