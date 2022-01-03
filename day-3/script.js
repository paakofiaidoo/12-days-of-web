const p = document.querySelector('.child p');

const setColor = () => p.style.setProperty('--primary', p.offsetWidth);
window.onresize = setColor;
setColor();