'use strict';
// const listEl = document.querySelector('#categories');
// // console.log(listEl);
const listItemEl = document.querySelectorAll('.item');
// console.log(listItemEl);
console.log(`В списке ${listItemEl.length} категории.`);

const arrayCategories = [...listItemEl]
  .map(
    categories =>
      `Категория: ${categories.children[0].textContent}\nКоличество элементов: ${categories.children[1].children.length}`,
  )
  .join('\n');
console.log(arrayCategories);
