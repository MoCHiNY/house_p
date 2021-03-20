$(function () {

  $('.burger-menu').on('click', function () {
    $('.header__list').toggleClass('header__list--active');
    $('.burger-menu').toggleClass('burger-menu--open');
  });

  $('.product__small-slider').slick({
    asNavFor: '.product__big-slider',
    arrows: false,
    focusOnSelect: true,
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    responsive: [{
      breakpoint: 680,
      settings: {
        vertical: false,
        slidesToShow: 2
      }
    }]
  });

  $('.product__big-slider').slick({
    asNavFor: '.product__small-slider',
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    fade: true,
  });

  $('.product__more-slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 1565,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1195,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true
        }
      }
    ]
  });

  $(function () {
    $('.product-form__range').styler();
  });
});

const accord = document.querySelectorAll('[data-name="accordeon-title"]');

accord.forEach(function (item) {
  item.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('accordeon-body');
    this.classList.toggle('accordeon-active');
  });
});


const butnOpen = document.querySelector('[data-btn="open"]');
const modal = document.querySelector('[data-modal="modal"]');
const btnClouse = document.querySelector('[data-btn="modal-clouse"]');

butnOpen.addEventListener('click', function () {
  modal.classList.remove('hidden');
});

btnClouse.addEventListener('click', function () {
  modal.classList.add('hidden');
});

modal.addEventListener('click', function () {
  modal.classList.add('hidden');
});

modal.querySelector('[data-modal="modal-window"]').addEventListener('click', function (even) {
  even.stopPropagation();
});