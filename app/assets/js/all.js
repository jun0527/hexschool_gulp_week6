const pageName = document.querySelector('.js-pageName');
const topBar = document.querySelector('.topBar');
const fixed = document.querySelector('#fixed');
const menu = document.querySelectorAll('.menu a');
const steps = document.querySelectorAll('.js-steps li');
const checkoutStep = document.querySelector('.js-checkoutStep');

//swiper
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: { 
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

//index 滾動監聽menu
if (pageName.getAttribute('data-pageName') === 'index') {
  function fixedMenu() {
    const topBarHeight = topBar.offsetHeight;
    const topOfMenu = topBarHeight + 480;
    if (window.scrollY >= topOfMenu - topBarHeight) {
      fixed.setAttribute('class', 'fixed');
    } else {
      fixed.setAttribute('class', '');
    }
  }
  window.addEventListener('scroll', fixedMenu);
}

//menu active
menu.forEach((item) => {
  if (item.getAttribute('data-name') === item.getAttribute('data-current')) {
    item.setAttribute('class', 'active');
  }
})

//結帳頁 步驟判斷
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
    checkoutStep.setAttribute('class', `${checkoutStep.getAttribute('class')} d-none`);
  }
  steps[parseInt(pageName.getAttribute('data-step'))-1].setAttribute('class', 'col-3 currentStep');
}