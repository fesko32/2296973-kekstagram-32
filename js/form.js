import {containerPictures} from './image-modal.js';
import {isEscapeKey} from './util.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-za-яё0-9]{1,19}$/i;
const errorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE: 'Хэштеши должны быть уникальными',
  INVALID_PATTERN: 'Неправильный хэштег',
};
const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const hastagField = document.querySelector('.text__hashtags');
const overlay = document.querySelector('.img-upload__overlay');
const canselButton = containerPictures.querySelector('.img-upload__cancel');
const commentForImage = document.querySelector('.text__description');
const fileField = document.querySelector('.img-upload__input');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const inFocus = () => document.activeElement === hastagField ||
         document.activeElement === commentForImage;


const hideModal = () => {
  form.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !inFocus()) {
    evt.preventDefault();
    hideModal();
  }
}

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};


const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const hasUnuqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};


const onCancelButtonClick = () => {
  hideModal();
};


const onFileInputChange = () => {
  showModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

pristine.addValidator(
  hastagField,
  hasValidCount,
  errorText.INVALID_COUNT,
  3,
  true
);

pristine.addValidator(
  hastagField,
  hasUnuqueTags,
  errorText.NOT_UNIQUE,
  2,
  true
);

pristine.addValidator(
  hastagField,
  hasValidTags,
  errorText.INVALID_PATTERN,
  1,
  true
);

fileField.addEventListener('change', onFileInputChange);
canselButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);


