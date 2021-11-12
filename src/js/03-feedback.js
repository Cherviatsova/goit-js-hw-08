import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};
populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const formElements = evt.currentTarget;
  const email = formElements.email.value;
  const message = formElements.message.value;

  if (email === '' || message === '') {
    return;
  }

  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateTextarea() {
  const savedInfo = localStorage.getItem(LOCALSTORAGE_KEY);
  const savedMessage = JSON.parse(savedInfo);
  if (savedMessage) {
    refs.input.value = savedMessage.email;
    refs.textarea.value = savedMessage.message;
  }
}
