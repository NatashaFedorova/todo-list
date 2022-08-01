import todoItemTemplate from './todoItemTemplate.js';
import mockData from './mockData.js';

const items = mockData;

const refs = {
  todoList: document.querySelector('.todo-list'),
};

const render = () => {
  const list = items.map(todoItemTemplate).join('');

  refs.todoList.innerHTML = '';
  refs.todoList.insertAdjacentHTML('afterbegin', list);
};

const handleAddItem = () => {
  const newTodo = {
    id: uuid.v4(),
    text: 'Dolor dolor',
    isDone: false,
  };
  console.log(newTodo);
  items.push(newTodo);
  render();
};

const handleRemoveItem = () => {
  items.shift();
  render();
};

render();

setTimeout(handleAddItem, 2000); //виконання функції через 2хв
setTimeout(handleRemoveItem, 6000);
