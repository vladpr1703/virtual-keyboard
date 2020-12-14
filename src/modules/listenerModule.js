export default function addListener() {
  document.addEventListener('click', (event) => {
    const textArea = document.querySelector('#text');
    const condition = textArea.value.length === textArea.selectionEnd || textArea.selectionEnd === 0;
    let cursorEnd = textArea.selectionEnd;
    let cursorStart = textArea.selectionStart;
    const content = textArea.value;
    switch (event.target.className) {
      case 'key backspace':
        textArea.focus();
        if (condition) {
          textArea.value = content.slice(0, content.length - 1);
        }
        else if (cursorEnd > cursorStart) {
          textArea.value = content.slice(0, cursorStart) 
          + content.slice(cursorEnd, content.length );
          cursorStart = textArea.selectionEnd = content.slice(0, cursorStart).length;
        }
        else { 
          textArea.value = content.slice(0, (cursorEnd - 1))  
          + content.slice(cursorEnd, content.length);
          cursorStart = textArea.selectionEnd = content.slice(0, (cursorEnd - 1)).length;
        }
        break;
      case 'key enter':
        textArea.focus();
        textArea.value = content.slice(0, cursorEnd) + '\n' + content.slice(cursorEnd, content.length);
        cursorStart = textArea.selectionEnd = content.slice(0, (cursorEnd + 1)).length;
        break;
      case 'key space':
        textArea.focus();
        if (condition) {
          textArea.value = content.slice(0, content.length) + ' ';
        }
        else if (cursorEnd > cursorStart) {
          textArea.value = content.slice(0, cursorStart) + ' '  
          + content.slice(cursorEnd, content.length );
          cursorStart = textArea.selectionEnd = content.slice(0, cursorStart + 1).length;
        }
        else { 
          textArea.value = content.slice(0, (cursorEnd)) + ' ' 
          +  content.slice(cursorEnd, content.length);
          cursorStart = textArea.selectionEnd = content.slice(0, (cursorEnd + 1)).length;
        }
        break;
      case 'key': 
      textArea.focus();
        if (condition) {
          textArea.value = content.slice(0, content.length) + event.target.textContent;
        }
        else { 
          textArea.value = content.slice(0, (cursorEnd))  
          + event.target.textContent + content.slice(cursorEnd, content.length);
          cursorEnd = textArea.selectionEnd = content.slice(0, (cursorEnd + 1)).length;
      }
        break;
      case 'key key_caps':
        textArea.focus();
        if (condition) {
          textArea.value = content.slice(0, content.length) + event.target.textContent.toUpperCase();
        }
        else {
          textArea.value = textArea.value.slice(0, (cursorEnd))
          + event.target.textContent.toUpperCase() + content.slice(cursorEnd, content.length);
          cursorStart = textArea.selectionEnd = content.slice(0, (cursorEnd + 1)).length;
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