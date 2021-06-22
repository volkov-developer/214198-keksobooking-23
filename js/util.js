const isPositiveNumber = (value) => typeof value === 'number' && !Number.isNaN(value) && value >= 0;

const getRandomFloat = (min, max, dec) => {
  if (!(isPositiveNumber(min) && isPositiveNumber(max) && isPositiveNumber(dec))) {
    throw new Error('Переданные агрументы должны быть числами и больше нуля включая');
  }

  const pow = Math.pow(10, dec);
  const result = Math.round((Math.random() * (max - min) + min) * pow) / pow;

  return result;
};

const getRandomNumber = (min, max) => getRandomFloat(min, max, 0);

const getRandomBoolean = () => Math.random() >= 0.5;

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const getRandomArrayItems = (array, canBeEmpty = true) => {
  const result = array.filter(getRandomBoolean);

  if (!canBeEmpty && result.length < 1) {
    result.push(getRandomArrayElement(array));
  }

  return result;
};

const getRandomSorter = () => Math.floor(Math.random() * 3) - 1;

const createGetRandomItem = (data) => {
  const mixed = [...data].sort(getRandomSorter);
  const mixedLength = mixed.length;
  let i = 0;

  return () => mixed[i++ % mixedLength];
};

export {
  getRandomFloat,
  getRandomNumber,
  getRandomArrayElement,
  getRandomArrayItems,
  createGetRandomItem
};
