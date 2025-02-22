const controlInput = document.querySelector('.scale__control--value');
const effectRange = document.querySelector('.effect-level__slider');


noUiSlider.create(effectRange, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
});
