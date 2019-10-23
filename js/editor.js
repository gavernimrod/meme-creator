"use strict";

var gImgId;
var gMemeImgSrc;
var gIsMemeReady;
var gEditableTextId;

function init() {
  gIsMemeReady = false;
  gImgId = getImgId();
  gMemeImgSrc = `img/${gImgId}.jpg`;
  gEditableTextId;
  renderImg();
  var initMeme = setTimeout(() => {
    setDefaultLinesPos();
    renderItems();
    clearTimeout(initMeme);
  }, 100);
}

function renderImg() {
  var strHtml = `<img class="img" style="z-index:-1"  id="meme-img" src="img/${gImgId}.jpg" alt="">`;
  document.querySelector(".meme-container").innerHTML = strHtml;
}

function renderItems() {
  document.querySelector(".meme-container").innerHTML = "";
  var strHtml = renderLines();
  strHtml += `<img class="img" id="meme-img" src="img/${gImgId}.jpg" alt="">`;
  document.querySelector(".meme-container").innerHTML = strHtml;
}

function renderLines() {
  var lines = getAllObjs("txts");
  return lines.map(line => getLineStrHtml(line)).join("");
}

function getLineStrHtml(line) {
  var strHtml = `
			<input 
			 class="txt" 
			 data-type="txts"
			 data-id="${line.id}"
			 type="texts"
             onchange="updateLineText(this)"
             id="${line.id}"
             value = ""
             placeholder = "${line.line}" 
			 style = "text-align:${line.align}; color:${line.color}; font-family: ${line.font}; 
			 		 width: ${line.width}px; font-size:${line.size}px; top:${line.top}px; left:${line.left}px"
             >
			 `;
  return strHtml;
}

function onAddText() {
  addNewText();
  renderItems();
}

function getTextWidth(textObj) {
  var canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement("canvas"));
  var ctx = canvas.getContext("2d");
  ctx.font = `${textObj.size}px ${textObj.font}`;
  var metrics = ctx.measureText(textObj.line);
  return metrics.width + 20;
}

function updateLineText(line) {
  var type = line.dataset.type;
  var lineId = line.id;
  var lineTxt = line.value;
  var lineIdx = getItemIdxByIdAndType(lineId, type);
  setItemValue("txts", lineIdx, "line", lineTxt);
  updateTextWidth(lineIdx);
  renderItems();
}
