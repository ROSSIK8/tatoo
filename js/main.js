"use strict"
// -------------- PAGE-HEADER  -------------- 

const navigation = document.querySelector('.page-header__nav');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', hideShowNav);
function hideShowNav() {
    navigation.classList.toggle('active');
}

document.addEventListener('click', function(e) {
    const target = e.target.closest('.burger');
    if (!target) {
        navigation.classList.remove('active');
    } else {
        return
    }
});



// -------------- ABOUT-US  -------------- 

const aboutUsText = document.querySelector('.about-us__text');
const aboutUsOpenText =  document.querySelector('.about-us__open-text');

aboutUsOpenText.addEventListener('click', openCloseText)
function openCloseText() {
    aboutUsText.classList.toggle('about-us__full-text')
    for (let child of aboutUsOpenText.children) {
        child.classList.toggle('hide')
    }
}
