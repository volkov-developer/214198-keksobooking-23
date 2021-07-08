import {
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
} from './constants.js';

import {
  getRandomFloat,
  getRandomNumber,
  getRandomArrayElement,
  getRandomArrayItems,
  createGetRandomItem,
  fillBy
} from './utils.js';

const getRandomAvatarIndex = createGetRandomItem(AVATAR_NUMBERS);

const padLeft = (index) => `${index}`.padStart(2, '0');

const getAvatarUrl = (index) => `img/avatars/user${padLeft(index)}.png`;

const getRandomAd = () => {
  const lat = getRandomFloat(Location.LAT_MIN, Location.LAT_MAX, 5);
  const lng = getRandomFloat(Location.LNG_MIN, Location.LNG_MAX, 5);
  const time = getRandomArrayElement(CHECKINS);

  return {
    author: {
      avatar: getAvatarUrl(getRandomAvatarIndex()),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomNumber(PriceRange.MIN, PriceRange.MAX),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(RoomRange.MIN, RoomRange.MAX),
      guests: getRandomNumber(GuestRange.MIN, GuestRange.MAX),
      checkin: time,
      checkout: time,
      features: getRandomArrayItems(FEATURES, false),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayItems(PHOTOS, false),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
};

const getAds = () => fillBy(APPARTMENT_COUNT, getRandomAd);

export { getAds };
