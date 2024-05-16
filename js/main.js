"use strict"
// -------------- ОБЩИЕ НАСТРОЙКИ  -------------- 

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href'))
//       .scrollIntoView({ behavior: 'smooth' });
//       console.log(document.querySelector(this.getAttribute('href')));
//     });
//   });

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

const aboutUsText = document.querySelector('.about-us__text');
const aboutUsOpenText =  document.querySelector('.about-us__open-text');

aboutUsOpenText.addEventListener('click', openCloseText)
function openCloseText() {
    aboutUsText.classList.toggle('about-us__full-text')
    for (let child of aboutUsOpenText.children) {
        child.classList.toggle('hide')
    }
}
