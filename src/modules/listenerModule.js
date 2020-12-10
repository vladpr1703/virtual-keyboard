export default function addListener() {
  document.addEventListener('click', (event) => {
    const textArea = document.querySelector('#text');
    switch (event.target.className) {
      case 'key backspace':
        textArea.value = textArea.value.slice(0, (textArea.selectionEnd - 1))  
          + textArea.value.slice(textArea.selectionEnd, textArea.value.length);
        break;
      case 'key enter':
        console.log(textArea.selectionEnd)
        console.log(textArea.value.length)
        textArea.value = textArea.value.slice(0, textArea.selectionEnd) + '\n' 
        + textArea.value.slice(textArea.selectionEnd, textArea.value.length);
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


// if (textArea.selectionEnd === textArea.textContent.length) {
//   textArea.value += '\n';
// }
// else {
//   textArea.value = textArea.value.slice(0, (textArea.selectionEnd))
//   + textArea.value.slice(textArea.selectionEnd, textArea.value.length);
// }