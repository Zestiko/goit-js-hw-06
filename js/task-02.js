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
const firstLiRef = document.createElement('li');
firstLiRef.textContent = `${ingredients[0]}`;
firstLiRef.classList = `item__${ingredients[0]}`

const secondLiRef = document.createElement('li');
secondLiRef.textContent = `${ingredients[1]}`;
secondLiRef.classList = `item__${ingredients[1]}`

const thirdLiRef = document.createElement('li');
thirdLiRef.textContent = `${ingredients[2]}`;
thirdLiRef.classList = `item__${ingredients[2]}`

const fourLiRef = document.createElement('li');
fourLiRef.textContent = `${ingredients[3]}`;
fourLiRef.classList = `item__${ingredients[3]}`

const fiveLiRef = document.createElement('li');
fiveLiRef.textContent = `${ingredients[4]}`;
fiveLiRef.classList = `item__${ingredients[4]}`

const sixLiRef = document.createElement('li');
sixLiRef.textContent = `${ingredients[5]}`;
sixLiRef.classList = `item__${ingredients[5]}`

ulRef.append(firstLiRef, secondLiRef, thirdLiRef, fourLiRef, fiveLiRef, secondLiRef);
