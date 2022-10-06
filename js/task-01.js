const animalsTitle = document.querySelector('.animals__title');
const animalsItem = document.querySelectorAll('.animals__items');

const productTitle = document.querySelector('.product__title');
const productItem = document.querySelectorAll('.product__item');

const technologiesTitle = document.querySelector('.technologies__title');
const technologiesItme = document.querySelectorAll('.technologies__item');

const catagoriesArray = [];
catagoriesArray.push(animalsTitle, productTitle, technologiesTitle);
// console.log(catagoriesArray)

console.log(`Number of categories: ${catagoriesArray.length}`);

console.log(`Categort : ${animalsTitle.textContent}`)
console.log(`Elements: ${animalsItem.length}`)

console.log(`Categort : ${productTitle.textContent}`)
console.log(`Elements: ${productItem.length}`)

console.log(`Categort : ${technologiesTitle.textContent}`)
console.log(`Elements: ${technologiesItme.length}`)