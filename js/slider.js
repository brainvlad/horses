const slider1 = document.querySelector('.slider__row-1')
const sliderNext1 = document.querySelector('.slider__next-1')
const sliderPrev1 = document.querySelector('.slider__prev-1')
const sliderItem1 = document.querySelector('.slider__item-1')

let gapSlider1 = 0;


sliderNext1.addEventListener('click', () => {
    gapSlider1 -= sliderItem1.offsetWidth;
    if (gapSlider1 < -(sliderItem1.offsetWidth * 8)) {
        gapSlider1 = 0;
    }
    slider1.style.left = gapSlider1 + 'px'
})
sliderPrev1.addEventListener('click', () => {
    gapSlider1 += sliderItem1.offsetWidth;
    if (gapSlider1 > 0) {
        gapSlider1 = -sliderItem1.offsetWidth * 8;
    }
    slider1.style.left = gapSlider1 + 'px'
})

const slider2 = document.querySelector('.slider__row-2')
const sliderNext2 = document.querySelector('.slider__next-2')
const sliderPrev2 = document.querySelector('.slider__prev-2')
const sliderItem2 = document.querySelector('.slider__item-2')

let gapSlider2 = 0;


sliderNext2.addEventListener('click', () => {
    gapSlider2 -= sliderItem2.offsetWidth;
    if (gapSlider2 < -(sliderItem2.offsetWidth * 7)) {
        gapSlider2 = 0;
    }
    slider2.style.left = gapSlider2 + 'px'
})
sliderPrev2.addEventListener('click', () => {
    gapSlider2 += sliderItem2.offsetWidth;
    if (gapSlider2 > 0) {
        gapSlider2 = -sliderItem2.offsetWidth * 7;
    }
    slider2.style.left = gapSlider2 + 'px'
})