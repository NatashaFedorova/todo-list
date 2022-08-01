import Counter from './counter.js';
console.log('widgets');

const counter1 = new Counter({ value: 1, selector: '.counter-1' });
const counter2 = new Counter({ value: 10, selector: '.counter-2' });
const counter3 = new Counter({ value: 100, selector: '.counter-3' });

console.log(counter1);
console.log(counter2);
console.log(counter3);

// для прикладу, як керувати ззовні
setInterval(() => {
  counter1.increment(10);
}, 1000);
