export default function addListener() {
  document.addEventListener('click', (event) => {
    const textArea = document.querySelector('#text');
    switch (event.target.className) {
      case 'key backspace':
        textArea.value = textArea.value.slice(0, textArea.value.length - 1);
        break;
      case 'key enter':
        textArea.value += '\n';
        break;
      case 'key space':
        textArea.value += ' ';
        break;
      case 'key': 
        textArea.value += event.target.textContent;
        break;
      case 'key key_caps':
        textArea.value += event.target.textContent.toUpperCase();
        break;
      case 'key capslock': 
        event.target.classList.add('caps_on');
        break;
      case 'key capslock caps_on':
        event.target.classList.remove('caps_on');
        break;
      default:
        break;
    }
  });
}