const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

// refs.text.style.fontSize = '25px';
console.log(refs.text.style.fontSize)
function changeFontSize(event) {
    console.log(refs.input.value)
    refs.text.style.fontSize = `${event.currentTarget.value}px`
}

refs.input.addEventListener(`input`,changeFontSize );