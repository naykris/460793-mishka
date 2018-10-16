var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var modalOverlay = document.querySelector('.modal');
var orderButton = document.querySelector('.best-product__btn');
var modalButton = document.querySelector('.modal__btn');

/* Меню */
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/* Модальное окно */
orderButton.addEventListener('click', function() {
  modalOverlay.classList.add('modal--show');
});

modalButton.addEventListener('click', function() {
  if (modalOverlay.classList.contains('modal--show')) {
    modalOverlay.classList.remove('modal--show');
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalOverlay.classList.contains("modal--show")) {
      modalOverlay.classList.remove("modal--show");
    }
  }
});
