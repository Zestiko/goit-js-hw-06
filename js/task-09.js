function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};


refs.button.addEventListener('click',changeBgcolor);


function changeBgcolor(event) {
  let randomHex = getRandomHexColor();
  refs.span.textContent = randomHex;
  refs.body.style.backgroundColor = `${randomHex}`;

}

