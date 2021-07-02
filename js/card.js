import {
  AD_TYPES,
  ROOMS,
  GUESTS
} from '/js/constants.js';

import {
  getPlural
} from '/js/utils.js';

import {
  removeExtraFeatures,
  renderPhotos,
  setOrRemove
} from '/js/dom-utils.js';

const CARD_TEMPLATE = document.querySelector('#card').content.querySelector('.popup');
const MAP_ELEMENT = document.querySelector('.map');
const MAP_CANVAS_ELEMENT = MAP_ELEMENT.querySelector('#map-canvas');

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

  const capacityText = `${getPlural(offer && offer.rooms, ROOMS)} для ${getPlural(offer && offer.guests, GUESTS)}`;
  const timeText = `Заезд после ${offer && offer.checkin}, выезд до ${offer && offer.checkout}`;

  setOrRemove(title, offer && offer.title);
  setOrRemove(address, offer && offer.address);
  setOrRemove(price, offer && offer.price, `${offer && offer.price} ₽/ночь`);
  setOrRemove(type, offer && offer.type, `${AD_TYPES[offer && offer.type] ? AD_TYPES[offer && offer.type] : ''}`);
  setOrRemove(capacity, (offer && offer.rooms) * (offer && offer.guests), capacityText);
  setOrRemove(time, (offer && offer.checkin && offer.checkin.length) * (offer && offer.checkout && offer.checkout.length), timeText);
  setOrRemove(description, offer && offer.description);

  avatar.src = author.avatar;

  if (!author.avatar) {
    avatar.remove();
  }

  removeExtraFeatures(features, offer.features);

  photosContainer.appendChild(renderPhotos(photoElement, offer.photos));

  MAP_CANVAS_ELEMENT.appendChild(card);
};

export { renderCard };
