"use strict"
// -------------- ОБЩИЕ НАСТРОЙКИ  -------------- 

const anchors = document.querySelectorAll('a[href^="#"')
anchors.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const element = document.querySelector(item.getAttribute('href'));
        window.scrollBy({
            top: element.getBoundingClientRect().top - 60,
            behavior: 'smooth',
        })

    })
})
  

// -------------- PAGE-HEADER  -------------- 

// функционал burger menu
const navigation = document.querySelector('.page-header__nav');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', hideShowNav);
function hideShowNav() {
    navigation.classList.toggle('active');
}

document.addEventListener('click', hideNav);
document.addEventListener('scroll', () => {
    navigation.classList.remove('active');
}
);
function hideNav(e) {
    const target = e.target.closest('.burger');
    if (!target) {
        navigation.classList.remove('active');
    } else {
        return
    }
}



// -------------- ABOUT-US  -------------- 
// динамическое выевление высоты кнопки слайдеров
function updateArrowHeight() {
    const arrows = document.querySelectorAll('.arrow');
    Array.from(arrows).forEach((item) => {
        let itemParent = item.parentElement;
        item.style.height = `${itemParent.offsetHeight}px`
        }
    )
}

window.onload = updateArrowHeight;
window.onresize = updateArrowHeight;

// функционал кнопки скрытия/открытия текста
const aboutUsText = document.querySelector('.about-us__text');
const aboutUsOpenText =  document.querySelector('.about-us__open-text');

aboutUsOpenText.addEventListener('click', openCloseText)
function openCloseText(e) {
    let textHeight = aboutUsText.scrollHeight;
    console.log(textHeight);
    if (e.target.closest('.about-us__arrow-down')) {    
        aboutUsText.style.maxHeight = textHeight + 'px';
    }
    if (e.target.closest('.about-us__arrow-up')) {    
        aboutUsText.style.maxHeight = '150px';
    }

    for (let child of aboutUsOpenText.children) {
        child.classList.toggle('hide')
    }
}
