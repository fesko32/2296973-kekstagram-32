import { getRandomInteger, getRandomElementFromArray, createRandomIdFromRangeGenerator } from './util.js';





const SIMILAR_PHOTO_COUNT = 25;
const getRandomId = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);
const getRandomUrl = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);
const getRandomCommentId = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);

/**
 * Функция создает массив случайных комментариев
 * @returns {object} - объект со свойствами: id, avatar, message, name
 */
// const createComments = () => ({
//   id: getRandomCommentId(),
//   avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
//   message: getRandomElementFromArray(MESSAGES),
//   name: getRandomElementFromArray(NAMES)
// });

// /**
//  * Функция создает массив случайных фотографий
//  * @returns {object} - объект со свойствами: id, url, description, likes, comments
//  */
// const createPhoto = () => ({
//   id: getRandomId(),
//   url: `photos/${getRandomUrl()}.jpg`,
//   description: getRandomElementFromArray(DESCRIPTIONS),
//   likes: getRandomInteger(15, 200),
//   comments: Array.from({ length: getRandomInteger(1, 10) }, createComments),
// });

//  * Функция создает массив фотографий из функции createPhotos
//  * @returns {Array} - новый массив заданное кол-во раз
// //  */
// const generatePhotos = () => Array.from({ length: SIMILAR_PHOTO_COUNT }, createPhoto);

export { SIMILAR_PHOTO_COUNT, generatePhotos };
