"use strict"


const aboutUsText = document.querySelector('.about-us__text');
const openCloseText =  document.querySelector('.about-us__open-text');

openCloseText.addEventListener('click', () => {
    aboutUsText.classList.toggle('about-us__full-text')
    for (let child of openCloseText.children) {
        child.classList.toggle('hide')
    }
})
