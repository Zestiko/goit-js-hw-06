const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const ulRef = document.querySelector('.gallery');

// const elements = images.map(image => {
//   const liRef = document.createElement('li')
//   const imagesRef = document.createElement('img');
//   imagesRef.src = image.url;
//   imagesRef.alt = image.alt;
//   imagesRef.width = 320;
//   imagesRef.height = 180;
//   liRef.appendChild(imagesRef);
//   return liRef;
// });

function makeImagesRefs(image) {
  return image.map(({url, alt}) => {
  const liRef = document.createElement('li')
  const imagesRef = document.createElement('img');
  imagesRef.src = url;
  imagesRef.alt = alt;
  imagesRef.width = 320;
  imagesRef.height = 180;
  liRef.appendChild(imagesRef);
  return liRef;
  
});
};

const elements = makeImagesRefs(images);

console.log(elements);

ulRef.append(...elements);

