export default function addListener() {
  document.addEventListener('click', (event) => {
    const textArea = document.querySelector('#text');
    const condition = textArea.value.length === textArea.selectionEnd || textArea.selectionEnd === 0;
    let cursor = textArea.selectionEnd;
    switch (event.target.className) {
      case 'key backspace':
        textArea.focus();
        if (condition) {
          textArea.value = textArea.value.slice(0, textArea.value.length - 1);
        }
        else { 
          textArea.value = textArea.value.slice(0, (cursor - 1))  
          + textArea.value.slice(cursor, textArea.value.length);
          textArea.selectionStart = textArea.selectionEnd = textArea.value.slice(0, (cursor - 1)).length;
        }
        break;
      case 'key enter':
        textArea.focus();
        textArea.value = textArea.value.slice(0, cursor) + '\n' + textArea.value.slice(cursor, textArea.value.length);
        textArea.selectionStart = textArea.selectionEnd = textArea.value.slice(0, (cursor + 1)).length;
        break;
      case 'key space':
        textArea.focus();
        if (condition) {
          textArea.value = textArea.value.slice(0, textArea.value.length) + ' ';
        }
        else { 
          textArea.value = textArea.value.slice(0, (cursor)) + ' ' 
          +  textArea.value.slice(cursor, textArea.value.length);
          textArea.selectionStart = textArea.selectionEnd = textArea.value.slice(0, (cursor + 1)).length;
        }
        break;
      case 'key': 
      textArea.focus();
        if (condition) {
          textArea.value = textArea.value.slice(0, textArea.value.length) + event.target.textContent;
        }
        else { 
          textArea.value = textArea.value.slice(0, (cursor))  
          + event.target.textContent + textArea.value.slice(cursor, textArea.value.length);
          textArea.selectionStart = textArea.selectionEnd = textArea.value.slice(0, (cursor+1)).length;
      }
        break;
      case 'key key_caps':
        textArea.focus();
        if (condition) {
          textArea.value = textArea.value.slice(0, textArea.value.length) + event.target.textContent.toUpperCase();
        }
        else { textArea.value = textArea.value.slice(0, (cursor))  
          + event.target.textContent.toUpperCase() +  textArea.value.slice(cursor, textArea.value.length);
          textArea.selectionStart = textArea.selectionEnd = textArea.value.slice(0, (cursor+1)).length;
        }
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