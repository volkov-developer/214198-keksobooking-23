const AVATAR_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TITLES = [
  'Дворец',
  'Квартира',
  'Дом',
  'Бунгало',
  'Отель',
];

const PriceRange = {
  MIN: 1000,
  MAX: 20000,
};

const RoomRange = {
  MIN: 1,
  MAX: 10,
};

const GuestRange = {
  MIN: 1,
  MAX: 10,
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

const AD_TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow:'Бунгало',
  hotel: 'Отель',
};

const ROOMS = ['комната', 'комнаты', 'комнат'];

const GUESTS = ['гостя', 'гостей', 'гостей'];

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
  LAT_MIN: 35.65000,
  LAT_MAX: 35.70000,
  LNG_MIN: 139.70000,
  LNG_MAX: 139.80000,
};

const APPARTMENT_COUNT = 10;

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

const ROOMS_CAPACITY_DEFAULT = 1;

export {
  AVATAR_NUMBERS,
  TITLES,
  PriceRange,
  RoomRange,
  GuestRange,
  DESCRIPTIONS,
  TYPES,
  AD_TYPES,
  ROOMS,
  GUESTS,
  CHECKINS,
  FEATURES,
  PHOTOS,
  Location,
  APPARTMENT_COUNT,
  HeaderLength,
  PriceValue,
  ROOMS_CAPACITY_DEFAULT
};
