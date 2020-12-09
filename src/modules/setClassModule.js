export default function setClassList(elem) {
  switch (elem.textContent){
    case 'backspace':
      elem.classList.add('backspace');
      elem.innerHTML = '<i class="fas fa-backspace">  </i>';
      break;
    case 'caps':
      elem.classList.add('capslock');
      elem.innerHTML = '<span class="material-icons">keyboard_capslock</span>';
      break;
    case 'enter': 
      elem.classList.add('enter');
      elem.innerHTML = '<span class="material-icons">keyboard_return</span>';
      break;
    case 'space':
      elem.classList.add('space');
      elem.textContent = '  ';
      break;
    case 'lang':
      elem.classList.add('lang');
      elem.innerHTML = '<img src="src/russia.png" alt="russia language"/>';
      break;
    default:
      elem.classList.add('key');
  } }

