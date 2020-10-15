document.addEventListener('DOMContentLoaded', function(){

var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

});

var reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

});

var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function () {
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
});

var modalButton = document.querySelector('.booking__button');
modalButton.addEventListener('click', function () {
  document.querySelector('.modal__overlay').classList.add('modal__overlay--active');
  document.querySelector('.modal__dialog').classList.add('modal__dialog--active');
});

var modalClose = document.querySelector('.modal');
modalClose.addEventListener("click", function(event) {
  var target = event.target;
    if (target.classList.contains("close")) {
      event.preventDefault();
      document.querySelector('.modal__overlay').classList.remove('modal__overlay--active');
      document.querySelector('.modal__dialog').classList.remove('modal__dialog--active');
    } else {
      target = target.closest(".modal__dialog");
      if (!target) {
        document.querySelector('.modal__overlay').classList.remove('modal__overlay--active');
        document.querySelector('.modal__dialog').classList.remove('modal__dialog--active');
      }
    }
});
});
