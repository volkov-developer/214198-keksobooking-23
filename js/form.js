import {validateHeader, validatePrice, HeaderLength, PriceValue } from './validation.js';

const FORM = document.querySelector('.ad-form');
const HEADER = FORM.querySelector('#title');
const ADDRESS = FORM.querySelector('#address');
const PRICE = FORM.querySelector('#price');
const ROOM_NUMBER = FORM.querySelector('#room_number');
const CAPACITY = FORM.querySelector('#capacity');

const prepareHeader = () => {
  HEADER.setAttribute('required', true);
  HEADER.setAttribute('minlength', HeaderLength.MIN);
  HEADER.setAttribute('maxlength', HeaderLength.MAX);
};

const preparePrice = () => {
  PRICE.setAttribute('required', true);
  PRICE.setAttribute('min', PriceValue.MIN);
  PRICE.setAttribute('max', PriceValue.MAX);
};

const prepareAddress = () => {
  ADDRESS.setAttribute('required', true);
  ADDRESS.setAttribute('value', 'Введите адрес');
};

const prepareForm = () => {
  prepareHeader();
  preparePrice();
  prepareAddress();
};

const handleHeaderChange = (evt) => {
  const element = evt.target;
  const value = element.value;

  if (!validateHeader(value)) {
    element.setCustomValidity(`Мин. ${HeaderLength.MIN} знаков, макс. знаков ${HeaderLength.MAX}`);
  } else {
    element.setCustomValidity('');
  }

  element.reportValidity();
};

const handlePriceChange = (evt) => {
  const element = evt.target;
  const value = element.value;

  if (!validatePrice(Number(value))) {
    element.setCustomValidity(`Мин. ${PriceValue.MIN}, макс. ${PriceValue.MAX}`);
  } else {
    element.setCustomValidity('');
  }

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

const addValidators = () => {
  HEADER.addEventListener('input', handleHeaderChange);
  PRICE.addEventListener('input', handlePriceChange);
  ROOM_NUMBER.addEventListener('change', handleRoomsCapacityChange);
  CAPACITY.addEventListener('change', handleRoomsCapacityChange);
};

const validateForm = () => {

};

prepareForm();

export { validateForm,  addValidators };
