import { getAds } from './data.js';
import { renderCard } from './card.js';
import { MAP_CANVAS_ELEMENT } from './map.js';
import { enableForms, disableForms } from './dom-utils.js';
import { addValidators, validateForm } from './form.js';

disableForms();
setTimeout(enableForms, 500);

const ads = getAds();

MAP_CANVAS_ELEMENT.appendChild(renderCard(ads[0]));

validateForm();

addValidators();
