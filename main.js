
const minus = document.querySelector('.minus');

const p = document.querySelector('p');

let count = 0;


minus.addEventListener('click', () => {
  count= count - 1;
  p.textContent = count;
});


const plyus = document.querySelector('.plyus');





plyus.addEventListener('click', () => {
  count = count + 1;
  p.textContent = count;
});
