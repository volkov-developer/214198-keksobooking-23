const AVATAR_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TITLES = [
  'Дворец',
  'Квартира',
  'Дом',
  'Бунгало',
  'Отель',
];

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

const LOCATION = {
  minLat: 35.65000,
  maxLat: 35.70000,
  minLng: 139.70000,
  maxLng: 139.80000,
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

const getAvatar = (index) => `img/avatars/user${padLeft(index)}.png`;

const createAppartment = () => {
  const appartmentLat = getRandomFloat(LOCATION.minLat, LOCATION.maxLat, 5);
  const appartmentLng = getRandomFloat(LOCATION.minLng, LOCATION.maxLng, 5);

  return {
    author: {
      avatar: getAvatar(getRandomAvatarIndex()),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${appartmentLat}, ${appartmentLng}`,
      price: getRandomNumber(10, 20),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(1, 5),
      guest: getRandomNumber(1, 10),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKINS),
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

appartmentsArray();
