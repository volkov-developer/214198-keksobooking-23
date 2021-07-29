const HeaderLength = {
  MIN: 30,
  MAX: 100,
};

const PriceValue = {
  MIN: {
    bungalow: 0,
    flat: 1000,
    hotel: 3000,
    house: 5000,
    palace: 10000,
  },
  MAX: 1000000,
};

const isString = (value) => typeof value === 'string';
const isNumber = (value) => typeof value === 'number' && !Number.isNaN(value);

const validateNumber = (value, min, max) => isNumber(value) && value >= min && value <= max;

const validateLength = (value, minLength, maxLength) => isString(value) && validateNumber(value.length, minLength, maxLength);

const validateHeader = (header) => validateLength(header, HeaderLength.MIN, HeaderLength.MAX);

const validatePrice = (price, minPrice) => {
  validateNumber(price, PriceValue.MIN[minPrice], PriceValue.MAX);
};

export { validateHeader, validatePrice, HeaderLength, PriceValue };
