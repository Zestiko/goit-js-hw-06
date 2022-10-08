const animalsTitleRef = document.querySelector('.animals__title');
const animalsItemRef = document.querySelectorAll('.animals__items');

const productTitleRef = document.querySelector('.product__title');
const productItemRef = document.querySelectorAll('.product__item');

const technologiesTitleRef = document.querySelector('.technologies__title');
const technologiesItmeRef = document.querySelectorAll('.technologies__item');

const catagoriesArray = [];
catagoriesArray.push(animalsTitleRef, productTitleRef, technologiesTitleRef);
// console.log(catagoriesArray)

console.log(`Number of categories: ${catagoriesArray.length}`);

console.log(`Categort : ${animalsTitleRef.textContent}`)
console.log(`Elements: ${animalsItemRef.length}`)

console.log(`Categort : ${productTitleRef.textContent}`)
console.log(`Elements: ${productItemRef.length}`)

console.log(`Categort : ${technologiesTitleRef.textContent}`)
console.log(`Elements: ${technologiesItmeRef.length}`)