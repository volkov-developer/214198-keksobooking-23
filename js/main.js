import { getAds } from './data.js';
import { renderCard } from './card.js';
import { enableForms, disableForms } from './form.js';

disableForms();
setTimeout(enableForms, 2500);

const ads = getAds();
renderCard(ads[0]);
