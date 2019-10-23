'use strict';

var gNextId = 0
var gImgs = [];
var gKeyWords =[]

function init(){
    createImages();
    renderGallery();
}
function createImg(id) {
    return {
        id: id,
        url: `img/${id}.jpg`,
        keywords: gKeyWords[id]
    }
}
function createImages() {
    for (let i = 0; i < 24; i++) {
        let img = createImg(gNextId);
        img.keywords = gKeyWords[i];
        gNextId++;
        gImgs.push(img);
    }
}

function getKeyWords(){
    return gKeyWords;
}

function getImages(){
    return gImgs;
}

function addMeme(url,keyWords){
    var newImage = createImg(gNextId);
    newImage.url = url;
    gKeyWords.push(keyWords);
    newImage.keywords = keyWords; 
}


