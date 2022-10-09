const refs = {
    input: document.querySelector('#validation-input'),
};

console.log(refs.input.dataset.length)

function chekInputLength(event) {
    refs.input.classList.remove('valid')
    refs.input.classList.remove('invalid')
    if (event.currentTarget.value.length == refs.input.dataset.length) {
       refs.input.classList.toggle('valid')
    } else {
        refs.input.classList.toggle('invalid')
    };
};

refs.input.addEventListener('blur', chekInputLength);