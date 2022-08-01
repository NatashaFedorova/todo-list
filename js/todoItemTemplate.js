const todoItemTemplate = ({ id, text, isDone }) => `
      <li class="todo-item" data-id="${id}">
        <input type="checkbox" name="todo-done" ${isDone ? 'checked' : ''}/>
        <span>${text}</span>
        <button class="btn btn-delete" type="button">X</button>
      </li>
      `;

export default todoItemTemplate;
