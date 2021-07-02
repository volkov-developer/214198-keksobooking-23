import { getAds } from '/js/data.js';
import { renderCard } from '/js/card.js';
import { enableForms, disableForms } from '/js/form.js';

disableForms();
setTimeout(enableForms, 1500);

const ads = getAds();
renderCard(ads[0]);
