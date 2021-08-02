import { HeaderLength, PriceValue } from './constants.js';

const isString = (value) => typeof value === 'string';
const isNumber = (value) => typeof value === 'number' && !Number.isNaN(value);

const validateNumber = (value, min, max) => isNumber(value) && value >= min && value <= max;

const validateLength = (value, minLength, maxLength) => isString(value) && validateNumber(value.length, minLength, maxLength);

const validateHeader = (header) => validateLength(header, HeaderLength.MIN, HeaderLength.MAX);

const validatePrice = (price, minPrice) => {
  validateNumber(price, PriceValue.MIN[minPrice], PriceValue.MAX);
};

export { validateHeader, validatePrice };
