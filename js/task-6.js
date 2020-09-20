const inputEl = document.querySelector('#validation-input');
let totalLenght = inputEl.getAttribute('data-length');

function removeOrAddClass() {
  if (inputEl.value.length === 6) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}

inputEl.addEventListener('blur', removeOrAddClass);
