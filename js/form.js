import { HeaderLength, PriceValue } from './constants.js';
import { validateHeader, validatePrice } from './validation.js';

const FORM = document.querySelector('.ad-form');
const HEADER = FORM.querySelector('#title');
const ADDRESS = FORM.querySelector('#address');
const PRICE = FORM.querySelector('#price');
const ROOM_NUMBER = FORM.querySelector('#room_number');
const CAPACITY = FORM.querySelector('#capacity');
const TYPE = FORM.querySelector('#type');
const TIME_IN = FORM.querySelector('#timein');
const TIME_OUT = FORM.querySelector('#timeout');

const prepareHeader = () => {
  HEADER.setAttribute('required', true);
  HEADER.setAttribute('minlength', HeaderLength.MIN);
  HEADER.setAttribute('maxlength', HeaderLength.MAX);
};

const preparePrice = () => {
  PRICE.setAttribute('required', true);
  PRICE.setAttribute('placeholder', PriceValue.MIN[TYPE.value]);
  PRICE.setAttribute('min', PriceValue.MIN[TYPE.value]);
  PRICE.setAttribute('max', PriceValue.MAX);
};

const prepareAddress = () => {
  ADDRESS.setAttribute('required', true);
};

const prepareForm = () => {
  prepareHeader();
  preparePrice();
  prepareAddress();
};

const handleHeaderChange = (evt) => {
  const element = evt.target;
  const value = element.value;

  const message = validateHeader(value) ? '' : `Мин. ${HeaderLength.MIN} знаков, макс. знаков ${HeaderLength.MAX}`;

  element.setCustomValidity(message);
  element.reportValidity();
};

const handlePriceChange = (evt) => {
  const element = evt.target;
  const value = element.value;

  const type = TYPE.value;

  const message = validatePrice(Number(value), type) ? '' : `Мин. ${PriceValue.MIN[TYPE.value]}, макс. ${PriceValue.MAX}`;

  element.setCustomValidity(message);

  element.reportValidity();
};

const handleRoomsCapacityChange = () => {
  const rooms = Number(ROOM_NUMBER.value);
  const count = Number(CAPACITY.value);

  let message = '';

  if (rooms === 100) {
    if (count !== 0) {
      message = '100 комнат не для гостей';
    }
  } else {
    if (count === 0 || rooms < count) {
      message = 'Гостей должно быть меньше или равно количеству комнат';
    }
  }

  CAPACITY.setCustomValidity(message);
  CAPACITY.reportValidity();
};

const handleTypeChange = (evt) => {
  const element = evt.target;
  const value = element.value;

  PRICE.setAttribute('min', PriceValue.MIN[value]);
  PRICE.setAttribute('placeholder', PriceValue.MIN[value]);
};

const handleTimeChange = (evt) => {
  const element = evt.target;
  const value = element.value;

  TIME_IN.value = value;
  TIME_OUT.value = value;
};

const handleTimeInChange = (evt) => handleTimeChange(evt);
const handleTimeOutChange = (evt) => handleTimeChange(evt);

const addValidators = () => {
  handleRoomsCapacityChange();

  HEADER.addEventListener('input', handleHeaderChange);
  PRICE.addEventListener('input', handlePriceChange);
  ROOM_NUMBER.addEventListener('change', handleRoomsCapacityChange);
  CAPACITY.addEventListener('change', handleRoomsCapacityChange);
  TYPE.addEventListener('change', handleTypeChange);
  TIME_IN.addEventListener('change', handleTimeInChange);
  TIME_OUT.addEventListener('change', handleTimeOutChange);
};

const validateForm = () => {
  prepareForm();
  addValidators();
};

export { validateForm };
