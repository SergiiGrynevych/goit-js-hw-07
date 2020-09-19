const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

const decreaseValue = () => {
  value.textContent = counterValue -= 1;
};

const increaseValue = () => {
  value.textContent = counterValue += 1;
};

decrement.addEventListener('click', decreaseValue);
increment.addEventListener('click', increaseValue);
