const AVATAR_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TITLES = [
  'Дворец',
  'Квартира',
  'Дом',
  'Бунгало',
  'Отель',
];

const PriceRange = {
  MIN_PRICE: 1000,
  MAX_PRICE: 20000,
};

const RoomRange = {
  MIN_ROOMS: 1,
  MAX_ROOMS: 10,
};

const GuestRange = {
  MIN_GUESTS: 1,
  MAX_GUESTS: 10,
};

const DESCRIPTIONS = [
  'Ну очень крутой Дворец',
  'Ну очень крутая Квартира',
  'Ну очень крутой Дом',
  'Ну очень крутое Бунгало',
  'Ну очень крутой Отель',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS_ROOT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking';

const PHOTOS = [
  `${PHOTOS_ROOT}/duonguyen-8LrGtIxxa4w.jpg`,
  `${PHOTOS_ROOT}/brandon-hoogenboom-SNxQGWxZQi0.jpg`,
  `${PHOTOS_ROOT}/claire-rendall-b6kAwr1i0Iw.jpg`,
];

const Location = {
  MIN_LAT: 35.65000,
  MAX_LAT: 35.70000,
  MIN_LNG: 139.70000,
  MAX_LNG: 139.80000,
};

const APPARTMENT_COUNT = 10;

export {
  AVATAR_NUMBERS,
  TITLES,
  PriceRange,
  RoomRange,
  GuestRange,
  DESCRIPTIONS,
  TYPES,
  CHECKINS,
  FEATURES,
  PHOTOS,
  Location,
  APPARTMENT_COUNT
};
