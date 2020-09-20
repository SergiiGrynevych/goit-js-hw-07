const inputEl = document.querySelector('#validation-input');

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
