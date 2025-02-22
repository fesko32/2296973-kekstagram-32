

const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const DEFAULT_SCALE = 100;
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');

/**
 * Функция обновляет значение поля масштаба
 * @param {string} newScale строка со значением маштаба
 */

const scaleImage = (value) => {
  scaleControlValue.value = `${value}%`;
  imageElement.style.transform = `scale(${value / 100})`;
};


const onSmallerButtonClick = () => {
  scaleImage(
    Math.max(parseInt(scaleControlValue.value, 10) - SCALE_STEP, SCALE_MIN)
  );
};

const onBiggerButtonClick = () => {
  scaleImage(
    Math.min(parseInt(scaleControlValue.value, 10) + SCALE_STEP, SCALE_MAX)
  );
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

scaleControlSmaller.addEventListener('click', onSmallerButtonClick);
scaleControlBigger.addEventListener('click', onBiggerButtonClick);


export {resetScale};
