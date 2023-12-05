import throttle from 'lodash.throttle';

// локальне сховище
const STORAGE_KEY = 'feedback-form-state';
// створюємо новий об'єкт для збереження усіх даних з форми
const formData = { email: '', message: '' };

// об'єкт форми
const refs = {
  form: document.querySelector('form'),
  eMail: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

console.log(refs);

// ставимо слухачі
refs.form.addEventListener('submit', onFormSubmit);
refs.eMail.addEventListener('input', throttle(onInput, 500));
refs.message.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('input', onInput);

// очищаємо форму при передачі данних
function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(event) {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  formData[fieldName] = fieldValue;
  saveFormDataToLocalStorage();
}

function saveFormDataToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// дістає незбережені дані
function output() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);

  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    refs.eMail.value = parsedFormData.email;
    refs.message.value = parsedFormData.message;
  }
}

output();

// зупиннямо поведінку за замовчуванням
// забираємо повідомлення зі сховища
// очищуємо форму

// function onFormSubmit(event) {
//   event.preventDefault();
//   // Додати код для відправки даних
//   JSON.stringify(formData);

//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }
// // отримуємо значення в полі, зберігаємо в сховищі
// function onEMailInput(event) {
//   const eMail = event.target.value;
//   localStorage.setItem(STORAGE_KEY, eMail);
// }

// function onMessageInput(event) {
//   const text = event.target.value;

//   localStorage.setItem(STORAGE_KEY, text);
// }

// // отримуемо значення зі сховища
// // якщо щось було, обновляємо DOM
// function outPut() {
//   const savedEMail = localStorage.getItem(STORAGE_KEY);
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedEMail) {
//     refs.eMail.value = savedEMail;
//   }

//   if (savedMessage) {
//     refs.message.value = savedMessage;
//   }
// }
