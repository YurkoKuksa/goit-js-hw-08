import throttle from 'lodash.throttle';
import storage from './localstorage.js';

// локальне сховище
const STORAGE_KEY = 'feedback-form-state';

// об'єкт форми
const refs = {
  form: document.querySelector('form'),
  eMail: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

// ставимо слухачі
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

// очищаємо форму при передачі данних
function onFormSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const email = elements.email.value;
  const message = elements.message.value;

  if (email === '' || message === '') {
    return alert('Please, fill in all the fields');
  }

  console.log({ email, message });

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(event) {
  const { name, value } = event.target;
  const savedFormData = storage.load(STORAGE_KEY) || {};
  savedFormData[name] = value;
  storage.save(STORAGE_KEY, savedFormData);
}

// дістає незбережені дані
function output() {
  const savedFormData = storage.load(STORAGE_KEY);

  if (savedFormData) {
    refs.eMail.value = savedFormData.email || '';
    refs.message.value = savedFormData.message || '';
  }
}

output();
