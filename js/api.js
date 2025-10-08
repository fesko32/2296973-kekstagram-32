import { renderGallery } from './image-modal.js';
// import { getRandomElementFromArray } from './'

fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    return response.json();
  })
  .then((pictures) => {
    renderGallery(pictures);
  })
  .catch((error) => {
    const errorTemplate = document.querySelector('#data-error');
  });
