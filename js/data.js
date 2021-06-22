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
  Location
} from '/js/constants.js';

import {
  getRandomFloat,
  getRandomNumber,
  getRandomArrayElement,
  getRandomArrayItems,
  createGetRandomItem
} from '/js/util.js';

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

export { createAppartment };
