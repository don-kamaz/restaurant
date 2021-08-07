(function ($) {
  "use strict"

  /* 1. Preloder (готовый код, можно использовать в любом проекте) */
  $(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });

  /* 2. Sticky And Scroll UP */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $(".header-sticky").removeClass("sticky-bar");
      $('#back-top').fadeOut(500);
    } else {
      $(".header-sticky").addClass("sticky-bar");
      $('#back-top').fadeIn(500);
    }
  });

  // Scroll Up
  $('#back-top a').on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });


})(jQuery);


/* parallax */
new Parallax($('#scene').get(0))

/* TABS */
$('.nav-item').on('click', function () {
  let currTab = $(this).index();
  console.log(currTab);
  $('.nav-item').removeClass('active');
  $(this).addClass('active');

  $('.tab-pane').removeClass('active');
  $('.tab-pane').removeClass('show');
  
  $('.tab-pane').eq(currTab).addClass('active');
  $('.tab-pane').eq(currTab).addClass('show');
});

/* HAMBURGER MENU */
$('.slicknav_btn').on('click', function() {
  console.log(1);
  $('.display-menu').toggleClass('display-active');
})

/* MODAL WINDOW */

$('.border-btn').on('click', function() {
  $('#wrapper-modal').fadeIn();
  $('.submenu').fadeIn()
})

$('#overlay-form').on('click', function(){
  $('#wrapper-modal').fadeOut();
});

/*  слайдер  */
$('.hero-slide').slick({
  autoplay: true,
  autoplaySpeed: 2000,
});

/*  VALIDATE */

$.validator.addMethod("regex", function(value, element, regexp) {
  var regExsp = new RegExp(regexp);
  return regExsp.test(value);
},"Please check your input."
);

$("form").validate({
  rules: {
    firstName: {
      required: true,
      regex : "[A-Za-z]{1,32}"   
    },
    phoneNumber: {
      digits : true,
      required: true,
      minlength: 10,
      maxlength: 11,
      regex: "[0-9]+"
    }
  },
  messages: {
    firstName: "Введите ваше имя правильно",
    phoneNumber: "Введите ваш номер"
  }
});

/*  map  */
ymaps.ready(init);
  function init(){
    let myMap = new ymaps.Map("map", {
      center: [56.31, 44.01],
      zoom: 10,
      controls: ['zoomControl','geolocationControl']
    });

    let myPlacemark = new ymaps.Placemark([56.31,44.01],{} , {
      iconImageSize : [32, 40]
    })

    myMap.balloon.open([51,85, 38,37], 'Содержание балуна', {
        closeButton: false
    })

    myMap.geoObjects.add(myPlacemark);
  }











