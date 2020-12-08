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
  if (buttons[11].textContent === 'q') {
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


document.addEventListener('keydown', (event) => {
  let buttons = div.querySelectorAll('button');
  buttons = Array.prototype.slice.call(buttons);
  if (event.code) {
    const keyCodeID = keyCodes.findIndex((el) => el == event.code);
    buttons[keyCodeID].click();
    const setStyle = function() {
      buttons[keyCodeID].classList.add('hover');
      setTimeout(() => buttons[keyCodeID].classList.remove('hover'), 200);
    };
    setStyle();
  }
  });