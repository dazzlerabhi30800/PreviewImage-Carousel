const carousel = document.querySelector('.carousel--wrapper');
const imgs = document.querySelectorAll('.carousel--wrapper img');
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right');

let index = 0;


leftArrow.addEventListener('click', () => {
    index--;
    if(index > imgs.length) {
        index = 0;
    }
    if(index < 0) { 
        index = imgs.length - 1;
    }

    carousel.style.transform = `translate(${-index * 500}px)`;
})

rightArrow.addEventListener('click', () => {
     index++;
    if(index > imgs.length-1) {
        index = 0;
    }
    if(index < 0) { 
        index = imgs.length - 1;
    }

    carousel.style.transform = `translateX(${-index * 500}px)`;

})

const previewContainer = document.querySelector('.preview--container');
const closeBtn = document.querySelector('#close-btn');
const previewImg = document.querySelector('.preview--carousel--container img');
const previewCarouselContainer = document.querySelector('.preview--carousel--container');

const showPreview = (e) => {
    const currentImg = e.originalTarget.currentSrc;
    if(currentImg){
        // previewImg.src = currentImg;
        previewCarouselContainer.style.transform = `translateX(${-index * 1000}px)`;
        previewContainer.classList.add('show');
    }
}

imgs.forEach(img => {
    img.addEventListener('click', showPreview)
})

const closePreview = () => {
    if(previewContainer.classList.contains('show')) {
        previewContainer.classList.remove('show');
    }
    else {
        previewContainer.classList.add('show');
    }
}

closeBtn.addEventListener('click', closePreview);


const leftArrowPreview = document.querySelector('.arrow-left');
const rightArrowPreview = document.querySelector('.arrow-right');

leftArrowPreview.addEventListener('click', () => {
    index--;
    if(index > imgs.length) {
        index = 0;
    }
    if(index < 0) { 
        index = imgs.length - 1;
    }

    previewCarouselContainer.style.transform = `translate(${-index * 1000}px)`;
})

rightArrowPreview.addEventListener('click', () => {
     index++;
    if(index > imgs.length-1) {
        index = 0;
    }
    if(index < 0) { 
        index = imgs.length - 1;
    }

    previewCarouselContainer.style.transform = `translateX(${-index * 1000}px)`;
})
