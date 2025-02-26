const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const DEFAULT_SCALE = 100;
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');
const effectRange = document.querySelector('.effect-level__slider');
const effectInput = document.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');

let currentEffect = 'none';

const effects = {
  'none': { min: 0, max: 100, step: 1, unit: '', filter: 'none' },
  'chrome': { min: 0, max: 1, step: 0.1, unit: '', filter: 'grayscale' },
  'sepia': { min: 0, max: 1, step: 0.1, unit: '', filter: 'sepia' },
  'marvin': { min: 0, max: 100, step: 1, unit: '%', filter: 'invert' },
  'phobos': { min: 0, max: 3, step: 0.1, unit: 'px', filter: 'blur' },
  'heat': { min: 1, max: 3, step: 0.1, unit: '', filter: 'brightness' },
};

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

const slider = noUiSlider.create(effectRange, {
  start: 100,
  step: 1,
  connect: 'lower',
  range: {
    min: 0,
    max: 100,
  }
});

const updateFilter = (value) => {
  const effect = effects[currentEffect];
  if (currentEffect === 'none') {
    imageElement.style.filter = 'none';
  } else {
    imageElement.style.filter = `${effect.filter}(${value}${effect.unit})`;
  }
};

const setupSlider = (effect) => {
  slider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max,
    },
    step: effect.step,
    start: effect.max,
  });

  effectInput.value = effect.max; // Устанавливаем значение
  updateFilter(effect.max); // Применяем фильтр
};

const resetFilter = () => {
  currentEffect = 'none'; // Сбрасываем эффект на стандартный
  imageElement.style.filter = 'none'; // Убираем стиль фильтра
  effectInput.value = ''; // Очищаем поле значения

  slider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
  });

  slider.set(100); // Ставим слайдер в начальное положение
};



effectRange.noUiSlider.on('update', (values) => {
  const value = values[0]; // Получаем текущее значение слайдера
  effectInput.value = value; // Обновляем поле ввода
  updateFilter(value); // Применяем эффект
});


effectList.addEventListener('change', (event) => {
  if (event.target.matches('input[type="radio"]')) {
    currentEffect = event.target.value;
    setupSlider(effects[currentEffect]); // Теперь передаём объект фильтра
  }
});


scaleControlSmaller.addEventListener('click', onSmallerButtonClick);
scaleControlBigger.addEventListener('click', onBiggerButtonClick);


export {resetScale, resetFilter};
