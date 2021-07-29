import { getAds } from './data.js';
import { renderCard } from './card.js';
import { enableForms, disableForms } from './dom-utils.js';
import { addValidators, validateForm } from './form.js';

disableForms();
setTimeout(enableForms, 500);

const ads = getAds();
renderCard(ads[0]);

validateForm();

addValidators();
