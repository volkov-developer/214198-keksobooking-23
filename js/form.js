const AD_FORM = document.querySelector('.ad-form');
const MAP_FILTERS = document.querySelector('.map__filters');

const FORMS = [
  {
    element: AD_FORM,
    disabledClass: 'ad-form--disabled',
    selector: 'fieldset',
  },
  {
    element: MAP_FILTERS,
    disabledClass: 'map__filters--disabled',
    selector: 'fieldset, select',
  },
];

const switchForm = (form, className, selector, enable) => {
  if (enable) {
    form.classList.remove(className);
  } else {
    form.classList.add(className);
  }

  const controls = form.querySelectorAll(selector);

  controls.forEach((control) => {
    if (enable) {
      control.removeAttribute('disabled');
    } else {
      control.setAttribute('disabled', true);
    }
  });
};

const switchForms = (enable) => {
  FORMS.forEach(({element, disabledClass, selector}) => {
    switchForm(element, disabledClass, selector, enable);
  });
};

const disableForms = () => switchForms(false);
const enableForms = () => switchForms(true);

export { enableForms, disableForms};
