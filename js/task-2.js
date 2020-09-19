const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map(ingredient => {
  const createTagLi = document.createElement('li');
  createTagLi.textContent = ingredient;
  return createTagLi;
});
listEl.append(...ingredientsEl);
console.log(listEl);
