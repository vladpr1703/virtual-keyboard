export default function addListener() {
  const textArea = document.querySelector('#text');
  document.addEventListener('click', (event) => {
    switch (event.target.className) {
      case 'key backspace':
        textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1);
        break;
      case 'key enter':
        textArea.textContent += '\n';
        break;
      case 'key space':
        textArea.textContent += ' ';
        break;
      case 'key': 
        textArea.textContent += event.target.textContent;
        break;
      default:
        break;
    }
  });
}