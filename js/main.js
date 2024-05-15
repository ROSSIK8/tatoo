"use strict"


const aboutUsText = document.querySelector('.about-us__text');
const aboutUsOpenText =  document.querySelector('.about-us__open-text');

aboutUsOpenText.addEventListener('click', openCloseText)

function openCloseText() {
    aboutUsText.classList.toggle('about-us__full-text')
    for (let child of aboutUsOpenText.children) {
        child.classList.toggle('hide')
    }
}
