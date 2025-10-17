import { bodyElement } from './image-modal.js';
// import { getRandomElementFromArray } from './'

const getData = (onSuccess) => {
  fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка загрузки: ${response.status}`);
      }
      return response.json();
    })

    .then((pictures) => onSuccess(pictures))
    .catch(() => {
      const errorTemplate = document.querySelector('#data-error').content.cloneNode(true);
      bodyElement.append(errorTemplate);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://32.javascript.htmlacademy.pro/kekstagram', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return response.json();
    })
    .then(() => {
      onSuccess();
    })
    .catch(() => {
      onFail();
    });
};

export { sendData, getData }
