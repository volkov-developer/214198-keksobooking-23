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

const fillBy = (count, cb) => {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(cb());
  }

  return result;
};

const getPluralIdx = (count) => {
  const c10 = count % 10;
  const c100 = count % 100;

  if (c10 === 1 && c100 !== 11) {
    return 0;
  }

  if (c10 >= 2 && c100 <=4 && (c100 < 10 || c10 >= 20)) {
    return 1;
  }

  return 2;
};

const plurilize = (count, plurals) => plurals[getPluralIdx(count)];

const getPlural = (count, plurals) => `${count} ${plurilize(count, plurals)}`;

export {
  getRandomFloat,
  getRandomNumber,
  getRandomArrayElement,
  getRandomArrayItems,
  createGetRandomItem,
  fillBy,
  getPlural
};
