import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

const storageValue = {
  email: '',
  message: '',
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onMessageInput, 500));

function onEmailInput(evt) {
  storageValue.email = evt.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storageValue));
}

function onMessageInput(evt) {
  storageValue.message = evt.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storageValue));
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedMessage) {
    refs.input.value = savedMessage.email;
    refs.textarea.value = savedMessage.message;
  }
}
populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  }

  localStorage.removeItem(LOCALSTORAGE_KEY);
}
