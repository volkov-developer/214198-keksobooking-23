const getRandomFloat = (min, max, dec) => {
  const isPositiveNumber = (value) => value >= 0 && typeof value === 'number' && !Number.isNaN(value);

  if (!(isPositiveNumber(min) && isPositiveNumber(max) && isPositiveNumber(dec))) {
    throw new Error('Переданные агрументы должны быть числами и больше нуля включая');
  }

  const pow = Math.pow(10, dec);
  const result = Math.round((Math.random() * (max - min) + min) * pow) / pow;

  return result;
};

const getRandomNumber = (min, max) => getRandomFloat(min, max, 0);

getRandomFloat(10, 1, 2);
getRandomNumber(10, 1);
