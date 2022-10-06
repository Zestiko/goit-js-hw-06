const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.createElement("li");
// console.log(list)
// list.textContent = ingredients[0];
// console.log(list.outerHTML)

const makeIngredientsList = ingredients => {
  return ingredients.map(list => {
    const listEl = document.createElement("li");
    listEl.textContent(list);
    return listEl;
  });
};
makeIngredientsList;
console.table(makeIngredientsList)