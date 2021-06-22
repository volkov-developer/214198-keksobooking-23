import {
  APPARTMENT_COUNT
} from '/js/constants.js';

import {
  createAppartment
} from '/js/data.js';

const appartmentsArray = new Array(APPARTMENT_COUNT).fill(null).map(() => createAppartment());

appartmentsArray;
