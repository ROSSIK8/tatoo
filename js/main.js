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
// динамическое выявление высоты кнопки слайдеров
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
    if (e.target.closest('.about-us__open-text.close')) {    
        this.classList.remove('close'); 
        aboutUsText.style.maxHeight = '150px';
    }
    else if (e.target.closest('.about-us__open-text')) {
        this.classList.add('close');
        aboutUsText.style.maxHeight = textHeight + 'px';
    } 
    for (let child of aboutUsOpenText.children) {
        child.classList.toggle('hide')
    }
}

// функционал слайдера

let currentIndexAddress = 0;
let currentIndexMyWorks = 0;
const totalSlidesAdress = document.querySelectorAll('.address__img').length;
const totalSlidesMyMorks = document.querySelectorAll('.my-works__item').length;

const nextSlideAddress = document.querySelector('.address__btn--right');
const prevSlideAddress = document.querySelector('.address__btn--left');
nextSlideAddress.addEventListener('click', nextSlideForAddress)
prevSlideAddress.addEventListener('click', prevSlideForAddress)

const nextSlideMyWorks = document.querySelector('.my-works__btn--right');
const prevSlideMyWorks = document.querySelector('.my-works__btn--left');
nextSlideMyWorks.addEventListener('click', nextSlideForMyWorks)
prevSlideMyWorks.addEventListener('click', prevSlideForMyWorks)

prevSlideAddress.style.display = 'none';
prevSlideMyWorks.style.display = 'none';

function showSlide(slides_, currentIndex, totalSlides, prevSlide, nextSlide) {
    const slides = document.querySelector(slides_);
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;

    if (currentIndex == 0) {
        prevSlide.style.display = 'none';
    } else {
        prevSlide.style.display = 'block';
    }
    
    if (currentIndex == totalSlides - 1) {
        nextSlide.style.display = 'none';
    } else {
        nextSlide.style.display = 'block';
    }
}

// функции смены слайдов для address__slider

function nextSlideForAddress() {
    currentIndexAddress++
    if (currentIndexAddress > totalSlidesAdress - 1) {
        currentIndexAddress = totalSlidesAdress - 1;
    }
    showSlide('.address__imgs', currentIndexAddress, totalSlidesAdress, prevSlideAddress, nextSlideAddress);
}

function prevSlideForAddress() {
    currentIndexAddress--
    if (currentIndexAddress < 0) {
        currentIndexAddress = 0;
    }
    showSlide('.address__imgs', currentIndexAddress, totalSlidesAdress, prevSlideAddress, nextSlideAddress);
}

// функции смены слайдов для my-works__slider

function nextSlideForMyWorks() {
    currentIndexMyWorks++
    if (currentIndexMyWorks > totalSlidesMyMorks - 1) {
        currentIndexMyWorks = totalSlidesMyMorks - 1;
    }
    showSlide('.my-works__imgs', currentIndexMyWorks, totalSlidesMyMorks, prevSlideMyWorks, nextSlideMyWorks);
}

function prevSlideForMyWorks() {
    currentIndexMyWorks--
    if (currentIndexMyWorks < 0) {
        currentIndexMyWorks = 0;
    }
    showSlide('.my-works__imgs', currentIndexMyWorks, totalSlidesMyMorks, prevSlideMyWorks, nextSlideMyWorks);
}
console.log(currentIndexMyWorks)



