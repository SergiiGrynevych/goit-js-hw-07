const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function changeInput(event) {
  nameOutput.textContent = nameInput.value ? event.currentTarget.value : "незнакомец";
  // nameInput.value ? (nameOutput.textContent = event.currentTarget.value) : (nameOutput.textContent = 'незнакомец');
}

nameInput.addEventListener('input', changeInput);
