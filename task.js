const leftArrow = Array.from(document.getElementsByClassName('slider__arrow_prev'));
const rightArrow = Array.from(document.getElementsByClassName('slider__arrow_next'));
const sliderImages = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot');


let nowActiveImgNumber;
nowActiveImg(sliderImages);
let nowActiveDot = nowActiveImgNumber;
sliderDots[nowActiveDot].classList.add('slider__dot_active');

function nowActiveImg(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].className.includes('slider__item_active')) {
        nowActiveImgNumber = i;
        }
    }
}

function nowActiveDotNumb(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].className.includes('slider__dot_active')) {
            nowActiveDot = i;
        }
    }
}

function dotClick() {
    sliderDots[nowActiveDot].classList.remove('slider__dot_active');
    event.target.classList.add('slider__dot_active');
    nowActiveDotNumb(sliderDots);
    sliderImages[nowActiveImgNumber].classList.remove('slider__item_active');
    nowActiveImgNumber = nowActiveDot;
    sliderImages[nowActiveImgNumber].classList.add('slider__item_active');
}

sliderDots.forEach( element =>
    element.addEventListener("click" , dotClick)
);


rightArrow.forEach( element =>
    element.addEventListener("click", function() {
        nowActiveImg(sliderImages);
        sliderImages[nowActiveImgNumber].classList.remove('slider__item_active');
        sliderDots[nowActiveDot].classList.remove('slider__dot_active');
        if (nowActiveImgNumber === (sliderImages.length - 1)) {
            nowActiveImgNumber = 0;
            nowActiveDot = 0;
        } else {
            nowActiveImgNumber = nowActiveImgNumber + 1;
            nowActiveDot = nowActiveDot + 1;
        }
        sliderImages[nowActiveImgNumber].classList.add('slider__item_active');
        sliderDots[nowActiveDot].classList.add('slider__dot_active');
    })
);

leftArrow.forEach( element =>
    element.addEventListener("click", function() {
        nowActiveImg(sliderImages);
        sliderImages[nowActiveImgNumber].classList.remove('slider__item_active');
        sliderDots[nowActiveDot].classList.remove('slider__dot_active');
        if (nowActiveImgNumber === 0) {
            nowActiveImgNumber = sliderImages.length - 1;
            nowActiveDot = nowActiveImgNumber;
        } else {
            nowActiveImgNumber = nowActiveImgNumber - 1;
            nowActiveDot = nowActiveDot - 1;
        }
        sliderImages[nowActiveImgNumber].classList.add('slider__item_active');
        sliderDots[nowActiveDot].classList.add('slider__dot_active');
    })
);


const priceLeftArrow = Array.from(document.getElementsByClassName('price__arrow_prev'));
const priceRightArrow = Array.from(document.getElementsByClassName('price__arrow_next'));
const priceCard = document.querySelectorAll('.price_card');

let nowActivePriceNumber;
nowPriceActiveImg(priceCard);

function nowPriceActiveImg(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].className.includes('price_card_active')) {
            nowActivePriceNumber = i;
        }
    }
}

priceRightArrow.forEach( element =>
    element.addEventListener("click", function() {
        nowActiveImg(priceCard);
        priceCard[nowActivePriceNumber].classList.remove('price_card_active');
        if (nowActivePriceNumber === (priceCard.length - 1)) {
            nowActivePriceNumber = 0;
        } else {
            nowActivePriceNumber = nowActivePriceNumber + 1;
        }
        priceCard[nowActivePriceNumber].classList.add('price_card_active');
    })
);


priceLeftArrow.forEach( element =>
    element.addEventListener("click", function() {
        nowActiveImg(priceCard);
        priceCard[nowActivePriceNumber].classList.remove('price_card_active');
        if (nowActivePriceNumber === 0) {
            nowActivePriceNumber = priceCard.length - 1;
        } else {
            nowActivePriceNumber = nowActivePriceNumber - 1;
        }
        priceCard[nowActivePriceNumber].classList.add('price_card_active');
    })
);

let talk = Array.from(document.getElementsByClassName('talk'));

let talkpicture = talk[0];

function reflection(input) {
  input.classList.toggle('reflection');
}

let talkReflection = setInterval(reflection, 2000, talkpicture);


const revealPrice = Array.from(document.getElementsByClassName('price_card_wrapper'));
const revealExample = Array.from(document.getElementsByClassName('slider'));

document.addEventListener('scroll', function() {
    let elementBottom = revealPrice[0].getBoundingClientRect().bottom;
    let elementTop = revealPrice[0].getBoundingClientRect().top;
    let viewportHeight = window.innerHeight;
    let middle = elementBottom - ((elementBottom - elementTop) / 2);
    if (middle < viewportHeight) {
        ym(52097337, 'reachGoal', 'ymone');
        // return true;
        //Вариант 1
        // yaCounter52097337.reachGoal("scrollPrice");
        // return true;
    }
});

document.addEventListener('scroll', function() {
    let elementBottom = revealExample[0].getBoundingClientRect().bottom;
    let elementTop = revealExample[0].getBoundingClientRect().top;
    let viewportHeight = window.innerHeight;
    let middle = elementBottom - ((elementBottom - elementTop) / 2);
    if (middle < viewportHeight) {
        //Вариант 2
        // ym(52097337, 'reachGoal', 'scrollExample'); return true;
        yaCounter52097337.reachGoal("yctwo");
        // return true;
    }
});
