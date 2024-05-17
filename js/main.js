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

function showSlide(slides_, totalSlides, currentIndex) {
    const slides = document.querySelector(slides_);
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// функции смены слайдов для address__slider
const nextSlideAddres = document.querySelector('.address__btn--right');
const prevSlideAddres = document.querySelector('.address__btn--left');
nextSlideAddres.addEventListener('click', nextSlideForAddress)
prevSlideAddres.addEventListener('click', prevSlideForAddress)

function nextSlideForAddress() {
    currentIndexAddress++
    if (currentIndexAddress > totalSlidesAdress - 1) {
        currentIndexAddress = totalSlidesAdress - 1;
    }
    showSlide('.address__imgs', totalSlidesAdress, currentIndexAddress);
}

function prevSlideForAddress() {
    currentIndexAddress--
    if (currentIndexAddress < 0) {
        currentIndexAddress = 0;
    }
    showSlide('.address__imgs', totalSlidesAdress, currentIndexAddress);
}

// функции смены слайдов для my-works__slider
const nextSlideMyWorks = document.querySelector('.my-works__btn--right');
const prevSlideMyWorks = document.querySelector('.my-works__btn--left');
nextSlideMyWorks.addEventListener('click', nextSlideForMyWorks)
prevSlideMyWorks.addEventListener('click', prevSlideForMyWorks)

function nextSlideForMyWorks() {
    currentIndexMyWorks++
    if (currentIndexMyWorks > totalSlidesMyMorks - 1) {
        currentIndexMyWorks = totalSlidesMyMorks - 1;
    }
    showSlide('.my-works__imgs', totalSlidesMyMorks, currentIndexMyWorks);
}

function prevSlideForMyWorks() {
    currentIndexMyWorks--
    if (currentIndexMyWorks < 0) {
        currentIndexMyWorks = 0;
    }
    showSlide('.my-works__imgs', totalSlidesMyMorks, currentIndexMyWorks);
}





// let currentIndexAddress = 0;
// let currentIndexMyWorks = 0;
// const totalSlidesAdress = document.querySelectorAll('.address__img').length;
// const totalSlidesMyMorks = document.querySelectorAll('.my-works__img').length;

// function showSlide(index, slides_, currentIndex) {
//     const slides = document.querySelector(slides_);
//     console.log(totalSlides);
//     console.log(index);

//     currentIndex = index;
//     console.log(currentIndex);
//     console.log('--------------------------------');

//     const offset = -currentIndex * 100;
//     slides.style.transform = `translateX(${offset}%)`;
// }

// // функции смены слайдов для address__slider
// const nextSlideAddres = document.querySelector('.address__btn--right');
// const prevSlideAddres = document.querySelector('.address__btn--left');
// nextSlideAddres.addEventListener('click', nextSlideForAddress)
// prevSlideAddres.addEventListener('click', prevSlideForAddress)

// function nextSlideForAddress() {
//     currentIndexAddress++
//     if (index > (totalSlides - 1)) {
//         index = totalSlides - 1;
//         currentIndex = totalSlides - 1;
//     } else if (index < 0) {
//         index = 0;
//         currentIndex = 0;
//     }
//     showSlide(currentIndexAddress, '.address__imgs', currentIndexAddress);
// }

// function prevSlideForAddress() {
//     currentIndexAddress--
//     if (index > (totalSlides - 1)) {
//         index = totalSlides - 1;
//         currentIndex = totalSlides - 1;
//     } else if (index < 0) {
//         index = 0;
//         currentIndex = 0;
//     }
//     showSlide(currentIndexAddress, '.address__imgs', currentIndexAddress);
// }

// // функции смены слайдов для my-works__slider
// const nextSlideMyWorks = document.querySelector('.my-works__btn--right');
// const prevSlideMyWorks = document.querySelector('.my-works__btn--left');
// nextSlideMyWorks.addEventListener('click', nextSlideForMyWorks)
// prevSlideMyWorks.addEventListener('click', prevSlideForMyWorks)

// function nextSlideForMyWorks() {
//     currentIndexMyWorks++
//     if (index > (totalSlides - 1)) {
//         index = totalSlides - 1;
//         currentIndex = totalSlides - 1;
//     } else if (index < 0) {
//         index = 0;
//         currentIndex = 0;
//     }
//     showSlide(currentIndexMyWorks, '.my-works__imgs', '.my-works__item', currentIndexMyWorks);
// }

// function prevSlideForMyWorks() {
//     currentIndexMyWorks--
//     if (index > (totalSlides - 1)) {
//         index = totalSlides - 1;
//         currentIndex = totalSlides - 1;
//     } else if (index < 0) {
//         index = 0;
//         currentIndex = 0;
//     }
//     showSlide(currentIndexMyWorks, '.my-works__imgs', '.my-works__item', currentIndexMyWorks);
// }
