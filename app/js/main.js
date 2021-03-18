$(function () {
  $('.product__small-slider').slick({
    asNavFor: '.product__big-slider',
    arrows: false,
    focusOnSelect: true,
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
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
    autoplaySpeed: 3000
  });

$(function () {

  $('.product-form__range').styler();

});

});