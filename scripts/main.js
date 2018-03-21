var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS ='is-tiny';
var ESC_KEY = 27;

function setDetails(imageUrl,titleText){
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-title')
}

function setDetailsFromThumb(thumbnail){
  'use strict'
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail))
}

function addThumbClickHandler(thumb){
  'use strict';
  thumb.addEventListener('click', function(event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetail();
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}


function hidenDetail(){
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetail(){
  'use strict';
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
  frame.classList.remove(TINY_EFFECT_CLASS);
}, 50)
}

function addKeyPressHandler(){
  'use strict';
  document.body.addEventListener('keyup', function(event){
    event.preventDefault()
    console.log(event.keyCode)
    if (event.keyCode === ESC_KEY){
      hidenDetail();
    }
  })
}


function initializeEvents(){
  'use strict';
  var thumbnails = getThumbnailsArray();
  // var randomthumb = thumbnails[Math.floor(Math.random() * thumbnails.length)];
  // thumbnails.pop(randomthumb);
  // setRadomImagediscrepancy(randomthumb);
  // thumbnails.push(randomthumb);
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

function setRadomImagediscrepancy(thumb){
  'use strict';
  thumb.setAttribute('data-image-url', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTb-ZUgVjU4XrtknYWXqxoESJ1f9bROjQlf6wLnDNuMM-BrJy")
}

initializeEvents();
