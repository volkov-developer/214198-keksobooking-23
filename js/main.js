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

const getRandomAvatarIndex = createGetRandomItem(AVATAR_NUMBERS);

const padLeft = (index) => `${index}`.padStart(2, '0');

const getAvatarUrl = (index) => `img/avatars/user${padLeft(index)}.png`;

const createAppartment = () => {
  const appartmentLat = getRandomFloat(Location.MIN_LAT, Location.MAX_LAT, 5);
  const appartmentLng = getRandomFloat(Location.MIN_LNG, Location.MAX_LNG, 5);
  const checkinCheckout = getRandomArrayElement(CHECKINS);

  return {
    author: {
      avatar: getAvatarUrl(getRandomAvatarIndex()),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${appartmentLat}, ${appartmentLng}`,
      price: getRandomNumber(PriceRange.MIN_PRICE, PriceRange.MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(RoomRange.MIN_ROOMS, RoomRange.MAX_ROOMS),
      guest: getRandomNumber(GuestRange.MIN_GUESTS, GuestRange.MAX_GUESTS),
      checkin: checkinCheckout,
      checkout: checkinCheckout,
      features: getRandomArrayItems(FEATURES, false),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayItems(PHOTOS, false),
    },
    location: {
      lat: appartmentLat,
      lng: appartmentLng,
    },
  };
};

const appartmentsArray = new Array(APPARTMENT_COUNT).fill(null).map(() => createAppartment());

appartmentsArray;
