const counterTemplate = value =>
  `<fieldset class="widget">
    <legend>counter</legend>
    <button class="button decrement">-</button>
    <span class="value">${value}</span>
    <button class="button increment">+</button>
  </fieldset>`;

export default class Counter {
  constructor({ value, selector }) {
    this.refs = {}; //створили пустий об'єкт для значення кнопок decrement та  increment
    this.value = value;
    this.parent = document.querySelector(selector);

    this.parent.insertAdjacentHTML('beforeend', counterTemplate(this.value));

    this.refs.value = this.parent.querySelector('.value');
    this.refs.decrement = this.parent.querySelector('.button.decrement');
    this.refs.increment = this.parent.querySelector('.button.increment');

    //  по різному передаеться колбек  в  decrement та increment!!!!!!!
    this.refs.decrement.addEventListener('click', () => {
      this.decrement();
    });
    this.refs.increment.addEventListener('click', this.increment.bind(this));
  }

  // додаємо шаблон в HTML
  render() {
    this.refs.value.textContent = this.value;
  }

  // кнопка "відняти"
  decrement(step = 1) {
    this.value -= step;
    this.render();
  }

  // кнопка "додати"
  increment(e, step = 1) {
    this.value += step;
    this.render();
  }
}
