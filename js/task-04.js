const decrementBtnRef = document.querySelector('[data-action= decrement]');
const incrementBtnRef = document.querySelector('[data-action= increment]');
const valueRef = document.querySelector('#value');

let counerValue = 0;

function decrement() {
    counerValue -= 1;
    console.log(counerValue);
    valueRef.innerText = counerValue;
}

function increment() {
    counerValue += 1;
    console.log(counerValue);
    valueRef.innerText = counerValue;
}
console.log(valueRef)

decrementBtnRef.addEventListener("click", decrement);


incrementBtnRef.addEventListener('click', increment);

