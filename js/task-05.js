const refs = {
    input: document.querySelector('#name-input'),
    text: document.querySelector('#name-output')
}

function inputTextChenger(event) {
    console.log(event.currentTarget.value);
    
    if (event.currentTarget.value === '') {
        refs.text.textContent = "Anonymous"
    } else {
        refs.text.textContent = event.currentTarget.value;
    }
}

refs.input.addEventListener('input', inputTextChenger)