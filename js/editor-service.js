"use strict";

var gMeme = {
  selectedImgId: getImgId(),
  txts: [
    {
      id: getRandId(),
      line: "Top Line",
      left: 0,
      top: 0,
      size: 40,
      width: 0,
      align: "left",
      color: "white",
      strokeColor: "black",
      font: "Impact"
    }
  ]
};

function getSelectedImgId() {
  return gMeme.selectedImgId;
}

function getImgId() {
  var url = window.location.href;
  var params = url.split("?");
  var id = params[1];
  return id;
}

function getAllObjs(type) {
  return gMeme[type];
}

function addItem(type, newItem) {
  gMeme[type].push(newItem);
}

function getFirstLine() {
  if (gMeme.txts[0]) {
    return gMeme.txts[0].line;
  } else {
    return "myMeme";
  }
}

function addNewText() {
  var newText = {
    id: getRandId(),
    line: "Enter Text",
    left: 0,
    top: 0,
    size: 40,
    width: 240,
    align: "left",
    color: "white",
    strokeColor: "black",
    font: "Impact"
  };
  gMeme.txts.push(newText);
}

function updateTextWidth(lineIdx) {
  var line = gMeme.txts[lineIdx];
  gMeme.txts[lineIdx].width = getTextWidth(line);
}

function setDefaultLinesPos() {
  var img = document.querySelector("#meme-img");
  var imgPos = img.getBoundingClientRect();
  var imgWidth = imgPos.width;
  var imgHeight = imgPos.height;
  var lineTop = gMeme.txts[0];
  lineTop.top = lineTop.size;
  lineTop.width = getTextWidth(lineTop);
  gMeme.txts[0].left = imgWidth / 2 - lineTop.width / 2;
}

function changeEditableText(itemId) {
  gEditableTextId = itemId.id;
}

function updateItem(type, itemIdx, property, value) {
  gMeme[type][itemIdx][property] += value;
}

function setItemValue(type, itemIdx, property, value) {
  gMeme[type][itemIdx][property] = value;
}

//Service function
function getItemIdxByIdAndType(id, type) {
  return gMeme[type].findIndex(function(item) {
    return item.id === id;
  });
}
