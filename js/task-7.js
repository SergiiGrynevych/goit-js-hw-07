const resizeControlEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

resizeControlEl.oninput = function () {
  textEl.setAttribute('style', `font-size: ${resizeControlEl.value}px`);
};

console.log(resizeControlEl);
