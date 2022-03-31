// Init fancyBox
$().fancybox({
  // selector : '.slick-slide:not(.slick-cloned)',
  hash: false
});

($(".certificates").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
  dots: false,
  arrows: false,
  responsive: [{
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

  ]
}));



// видаляє ектів при обертанні
window.addEventListener("orientationchange", function resss () {

  if ($(window).width() > 768) {
    $('.header-info').removeClass('header-info--activ');
    $('.burger-menu').removeClass('burger-menu--open');
    $('.burger-clous').removeClass('burger-clous--open');
    $('.menu__list').removeClass('menu__list--active');
    $('.main').removeClass('overlay');
    $('.footer').removeClass('overlay');
    
    
    
  } else {
    $('.header-info').removeClass('header-info--activ');
    $('.burger-menu').removeClass('burger-menu--open');
    $('.burger-clous').removeClass('burger-clous--open');
    $('.menu__list').removeClass('menu__list--active');
    $('.main').removeClass('overlay');
    $('.footer').removeClass('overlay');
  }
    
});




// lagn
var nav = $('.lang');
var selection = $('.select');
var select = selection.find('li');

nav.click(function (event) {
  if (nav.hasClass('active')) {
    nav.removeClass('active');
    selection.stop().slideUp(200);
  } else {
    nav.addClass('active');
    selection.stop().slideDown(200);
  }
  event.preventDefault();
});

select.click(function (event) {
  select.removeClass('mlp-current-language-item');
  $(this).addClass('mlp-current-language-item');
  var $lang = $(this).text();
  nav.text($lang);
  nav.trigger('click');
  //alert($lang);
  // alert ("location.href = 'index.php?lang=" + $(this).attr('data-value'));
});

//cookies

var cookieNotice = document.querySelector('#cookie-notice'),
  cookieDisplay = document.querySelector('.cookieValue'),
  cookieValue = false;

function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
}

function addEvent(el, type, handler) {
  if (el.attachEvent) el.attachEvent('on' + type, handler);
  else el.addEventListener(type, handler);
}

function getStorage(key) {
  if (!window['localStorage']) return;
  return localStorage.getItem(key);
}

function setStorage(key, value) {
  if (!window['localStorage']) return;
  localStorage.setItem(key, value);
  return true;
}

addEvent(document.querySelector('#cookie-yep'), 'click', function () {
  setStorage('cookie', 'yep');
});

addEvent(document.querySelector('#cookie-nope'), 'click', function () {
  setStorage('cookie', 'no');
});

addEvent(document.querySelector('#clear'), 'click', function () {
  localStorage.clear();
});

function checkCookie() {
  cookieValue = getStorage('cookie');
  cookieDisplay.innerHTML = cookieValue;
  //console.log(cookieValue);
  switch (cookieValue) {
    case 'no':
    case 'yep':
      if (hasClass(cookieNotice, 'active')) {
        removeClass(cookieNotice, 'active');
      }
      break;
    default:
      if (!hasClass(cookieNotice, 'active')) {
        addClass(cookieNotice, 'active');
      }
      break;
  }
}

setInterval(checkCookie, 1000);
checkCookie();


//кнопка дивитися більше
$('.myBtn').on('click', function () {
  $('.more').toggleClass('active');
  $('.btnspan').toggleClass('mod__active');
  $('.service-instructions__img').toggleClass('active');
});


//tabs
$(".tab_content").hide();
$(".tab_content:first").show();
/* в режиме вкладок */
$("ul.tabs li").click(function () {
  $(".tab_content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");
  $(".tab_accordion").removeClass("d_active");
  $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
  $('.btnspan').removeClass('active');
  $(".certificates").slick('slickSetOption', 'adaptiveHeight', true, true);

});

//acordeon
$(".tab_accordion").click(function () {
  $(".tab_content").hide();
  var d_activeTab = $(this).attr("rel");
  $("#" + d_activeTab).fadeIn();
  $(".tab_accordion").removeClass("d_active");
  $(this).addClass("d_active");
  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
  $('.btnspan').removeClass('active');
  $(".certificates").slick('slickSetOption', 'adaptiveHeight', true, true);
});

$('ul.tabs li').last().addClass("tab_last");




$('.tab-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button class="slick-prev"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1515 2.91667L17.2456 0L4.79199 12.5L17.2456 25L20.1515 22.0833L10.6037 12.5L20.1515 2.91667Z" fill="#045394"/></svg></button>',
  nextArrow: '<button class="slick-next"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.84853 2.91667L7.75438 0L20.208 12.5L7.75438 25L4.84853 22.0833L14.3963 12.5L4.84853 2.91667Z" fill="#045394"/></svg></button>',
  dots: true,
  responsive: [{
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },

    {
      breakpoint: 540,
      settings: {
        dots: false,
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
        infinite: true,
      }
    },
  ]
});



$(function () {

  $('.burger-menu, .burger-clous').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.burger-clous').toggleClass('burger-clous--open');
    $('.burger-menu').toggleClass('burger-menu--open');
    $('.header-info').toggleClass('header-info--activ');
    $('.main').toggleClass('overlay');
    $('.footer').toggleClass('overlay');
  });

  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('menu__link--line');
    $(this).addClass('menu__link--line');
  });

  $('.header-info__link').on('click', function () {
    $('.header-info__link').removeClass('header-info__link--line');
    $(this).addClass('header-info__link--line');
  });

  $('.mobi-lang__item').on('click', function () {
    $('.mobi-lang__item').removeClass('mobi-lang__link--active');
    $(this).addClass('mobi-lang__link--active');
  });

  $('.lang__link').on('click', function () {
    $('.lang__link').removeClass('lang__link--active');
    $(this).addClass('lang__link--active');
  });

  $('.news__slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    responsive: [{
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    }, {
      breakpoint: 445,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }
    }, ]
  });

  $('.choice__slider').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    responsive: [{
      breakpoint: 1150,
      settings: {
        slidesToShow: 4,
      }
    }, {
      breakpoint: 860,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 410,
      settings: {
        slidesToShow: 1,
      }
    }, ]
  });

  $('.person__slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    responsive: [{
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    }, {
      breakpoint: 445,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }

    }, ]
  });

  $('.certificate__slider').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    }, {
      breakpoint: 860,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 440,
      settings: {
        slidesToShow: 2,
      }
    }, ]
  });

  // випраляє помилку ініцалізації слайдера в аккордеоні
  $('ul.tabs li').click(function () {
    $(".tab-slider").slick('slickSetOption', 'adaptiveHeight', true, true);
  });

  $('.tab_accordion').click(function () {
    $(".tab-slider").slick('slickSetOption', 'adaptiveHeight', true, true);
  });



});
// маска на телефон
// var selector = document.getElementById('masks');
// Inputmask('+41(999)-999-99-99').mask(selector);

// Радио кнопки
function myFunction() {
  let radioBox = document.querySelector('.form-send__checkbox-1');
  let text = document.querySelector('.form-send__hidden-one');
  let text2 = document.querySelector('.form-send__hidden-second');
  let cheks = document.querySelector('.form-send__label-check--action');
  let cheks2 = document.querySelector('.form-send__label-check--active');
  if (radioBox.checked) {
    text.style.display = "block";
    text2.style.display = "none";
    cheks.style.color = "#045394";
    cheks2.style.color = "#0B2D49";
  } else {
    text.style.display = "none";
    text2.style.display = "block";
    cheks.style.color = "#0B2D49";
    cheks2.style.color = "#045394";
  }
}