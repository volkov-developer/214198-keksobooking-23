import {
  AD_TYPES,
  ROOMS,
  GUESTS
} from './constants.js';

import {
  getPlural
} from './utils.js';

import {
  removeExtraFeatures,
  renderPhotos,
  setOrRemove
} from './dom-utils.js';

const CARD_TEMPLATE = document.querySelector('#card').content.querySelector('.popup');

const renderCard = (ad) => {
  const { offer, author } = ad;

  const card = CARD_TEMPLATE.cloneNode(true);
  const title = card.querySelector('.popup__title');
  const address = card.querySelector('.popup__text--address');
  const price = card.querySelector('.popup__text--price');
  const type = card.querySelector('.popup__type');
  const capacity = card.querySelector('.popup__text--capacity');
  const time = card.querySelector('.popup__text--time');
  const description = card.querySelector('.popup__description');
  const avatar = card.querySelector('.popup__avatar');
  const featuresContainer = card.querySelector('.popup__features');
  const features = featuresContainer.querySelectorAll('.popup__feature');
  const photosContainer = card.querySelector('.popup__photos');
  const photoElement = photosContainer.querySelector('.popup__photo');

  const capacityText = `${getPlural(offer.rooms, ROOMS)} для ${getPlural(offer.guests, GUESTS)}`;
  const timeText = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  setOrRemove(title, offer.title);
  setOrRemove(address, offer.address);
  setOrRemove(price, offer.price, `${offer.price} ₽/ночь`);
  setOrRemove(type, offer.type, `${AD_TYPES[offer.type] ? AD_TYPES[offer.type] : ''}`);
  setOrRemove(capacity, offer.rooms * offer.guests, capacityText);
  setOrRemove(time, (offer.checkin && offer.checkin.length) * (offer.checkout && offer.checkout.length), timeText);
  setOrRemove(description, offer.description);

  avatar.src = author.avatar;

  if (!author.avatar) {
    avatar.remove();
  }

  removeExtraFeatures(features, offer.features);

  photosContainer.appendChild(renderPhotos(photoElement, offer.photos));

  return card;
};

export { renderCard };
