"use strict";

var pageName = document.querySelector('.js-pageName');
var topBar = document.querySelector('.topBar');
var fixed = document.querySelector('#fixed');
var menu = document.querySelectorAll('.menu a');
var steps = document.querySelectorAll('.js-steps li');
var checkoutStep = document.querySelector('.js-checkoutStep'); //swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
}); //index 滾動監聽menu

if (pageName.getAttribute('data-pageName') === 'index') {
  var fixedMenu = function fixedMenu() {
    var topBarHeight = topBar.offsetHeight;
    var topOfMenu = topBarHeight + 480;

    if (window.scrollY >= topOfMenu - topBarHeight) {
      fixed.setAttribute('class', 'fixed');
    } else {
      fixed.setAttribute('class', '');
    }
  };

  window.addEventListener('scroll', fixedMenu);
} //menu active


menu.forEach(function (item) {
  if (item.getAttribute('data-name') === item.getAttribute('data-current')) {
    item.setAttribute('class', 'active');
  }
}); //結帳頁 步驟判斷

if (pageName.getAttribute('data-pageName') === 'checkout') {
  if (parseInt(pageName.getAttribute('data-step')) >= 1) {
    steps[0].setAttribute('class', 'col-3');
  }

  if (parseInt(pageName.getAttribute('data-step')) >= 2) {
    steps[1].setAttribute('class', 'col-3');
  }

  if (parseInt(pageName.getAttribute('data-step')) >= 3) {
    steps[2].setAttribute('class', 'col-3 step');
  }

  if (parseInt(pageName.getAttribute('data-step')) >= 4) {
    checkoutStep.setAttribute('class', "".concat(checkoutStep.getAttribute('class'), " d-none"));
  }

  steps[parseInt(pageName.getAttribute('data-step')) - 1].setAttribute('class', 'col-3 currentStep');
}
//# sourceMappingURL=all.js.map
