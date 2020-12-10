import addListener from './modules/listenerModule.js';
import setClassList from './modules/setClassModule.js';
import { engKey, rusKey, keyCodes } from './modules/langaugesModule.js';

const div = document.querySelector('div');
const lang = document.querySelector('button');

addListener();

engKey.forEach((key) => {
  const keyElement = document.createElement('button');
  const newLine = ['backspace', ']', 'enter', '?'].indexOf(key) !== -1;
  keyElement.classList.add('key');
  keyElement.innerText = key;
  setClassList(keyElement);
  div.appendChild(keyElement);
  if (newLine) {
    div.appendChild(document.createElement('br'));
  }
});

lang.addEventListener('click', () => {
  let buttons = div.querySelectorAll('button');
  buttons = Array.prototype.slice.call(buttons);
  if (buttons[12].textContent === 'q') {
    lang.innerHTML = '<img src="src/russia.png" alt="english"/>';
    buttons.forEach((value, i) => {
      value.textContent = rusKey[i];
      setClassList(value);
    });
  }
  else {
    lang.innerHTML = '<img src="src/usa.png" alt="english"/>';
    buttons.forEach((value, i) => {
      value.textContent = engKey[i];
      setClassList(value);
    });
  }
});

document.addEventListener('click', (event) => {
  let buttons = div.querySelectorAll('button');
  buttons = Array.prototype.slice.call(buttons);
  if (event.target.className == 'key capslock caps_on') {
    event.target.classList.add('caps_on');
    buttons.forEach((el) => {
      if (el.textContent.length < 2) {
        el.classList.add('key_caps');
      }
    });
  }
  else if (event.target.className === 'key capslock') {
    event.target.classList.remove('caps_on');
    buttons.forEach((el) => {
      if (el.textContent.length < 2) {
        el.classList.remove('key_caps');
      }
    });
  }
});

document.addEventListener('keydown', (event) => {
  let buttons = div.querySelectorAll('button');
  buttons = Array.prototype.slice.call(buttons);
  if (keyCodes.indexOf(event.code) !== -1) {
    buttons.forEach(el => el.blur());
    const keyCodeID = keyCodes.findIndex((el) => el == event.code);
    const setStyle = function() {
      buttons[keyCodeID].classList.add('hover');
      setTimeout(() => buttons[keyCodeID].classList.remove('hover'), 200);
    };
    setStyle();
  }
});