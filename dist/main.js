(()=>{"use strict";function e(e){switch(e.textContent){case"backspace":e.classList.add("backspace"),e.innerHTML='<i class="fas fa-backspace"></i>';break;case"enter":e.classList.add("enter"),e.innerHTML='<span class="material-icons">keyboard_return</span>';break;case"space":e.classList.add("space"),e.textContent="";break;case"lang":e.classList.add("lang"),e.innerHTML='<img src="src/russia.png" alt="russia language"/>';break;default:e.classList.add("key")}}const t=["1","2","3","4","5","6","7","8","9","0","backspace","q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l",";",'"',"enter","z","x","c","v","b","n","m",",",".","?","space"],a=["1","2","3","4","5","6","7","8","9","0","backspace","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","ж","э","enter","я","ч","с","м","и","т","ь","б","ю",".","space"],n=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Backspace","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","Space"],c=document.querySelector("div"),s=document.querySelector("button");!function(){const e=document.querySelector("#text");document.addEventListener("click",(t=>{switch(t.target.className){case"key backspace":e.textContent=e.textContent.slice(0,e.textContent.length-1);break;case"key enter":e.textContent+="\n";break;case"key space":e.textContent+=" ";break;case"key":e.textContent+=t.target.textContent}}))}(),t.forEach((t=>{const a=document.createElement("button"),n=-1!==["backspace","]","enter","?"].indexOf(t);a.classList.add("key"),a.innerText=t,e(a),c.appendChild(a),n&&c.appendChild(document.createElement("br"))})),s.addEventListener("click",(()=>{let n=c.querySelectorAll("button");n=Array.prototype.slice.call(n),"q"===n[11].textContent?(s.innerHTML='<img src="src/russia.png" alt="english"/>',n.forEach(((t,n)=>{t.textContent=a[n],e(t)}))):(s.innerHTML='<img src="src/usa.png" alt="english"/>',n.forEach(((a,n)=>{a.textContent=t[n],e(a)})))})),document.addEventListener("keydown",(e=>{let t=c.querySelectorAll("button");if(t=Array.prototype.slice.call(t),e.code){const a=n.findIndex((t=>t==e.code));t[a].click(),t[a].classList.add("hover"),setTimeout((()=>t[a].classList.remove("hover")),200)}}))})();