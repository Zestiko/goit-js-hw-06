const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');
console.log(ulRef)



const newArray = ingredients.map(idndex => {
    const listRef = document.createElement('li');
    listRef.textContent = `${idndex}`;
    listRef.classList = `item__${idndex}`;
    return listRef;
});
console.log(newArray)

ulRef.append(...newArray);
