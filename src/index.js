const keyboard = document.querySelector('.keyboard')
const textArea = document.querySelector('#text');
const backspace = document.querySelector('.backspace');
const space = document.querySelector('.space')



function listener() {
keyboard.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON'){
        textArea.textContent += event.target.textContent;
    }
})


backspace.addEventListener('click', () =>{
    textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1);
})

space.addEventListener('click', () => {
    textArea.textContent += ' ';
})
};

listener();