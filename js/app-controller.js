'use strict';
var gImgSrc = '';
var gSlideIndex = 0;

function renderGallery() {
        let elGallery = document.querySelector('.gallery-container');
        elGallery.classList.add('grid');
        elGallery.classList.add('gallery-grid');
        let elCarouselBtn = document.querySelectorAll('.w3-button');
        elCarouselBtn[0].classList.add('hide');
        elCarouselBtn[1].classList.add('hide');
        let strHtml = '';
        gImgs.map(function (img) {
            strHtml += `<a href="editor.html?${img.id}"><img class="my-slides"  src="${img.url}" alt="">`;
        })
        elGallery.innerHTML=strHtml;
}

