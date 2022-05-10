import dayjs from 'dayjs';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomFloatInteger = (min, max, float = 1) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }


  return (Math.random() * (max - min) + min).toFixed(float);
};

const getRandomArrayElement = (element) => element[getRandomInteger(0, element.length - 1)];

const getRandomBoolean = () => (getRandomInteger(0, 1)) !== 0;

const getRandomArrayList = (element) => {
  const lengthOfArray = getRandomInteger(1, element.length);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomInteger(0, element.length - 1);
    const el = element[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }

  return array;
};

const humanizeFilmDueDate = (releaseData) => dayjs(releaseData).format('D MMMM');

export {getRandomInteger, humanizeFilmDueDate, getRandomFloatInteger, getRandomArrayElement, getRandomBoolean, getRandomArrayList};
