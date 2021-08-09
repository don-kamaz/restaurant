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
$('[data-submit]').on('click', function(e) {
  e.preventDefault();
  $(this).parent('form').submit();
})
$.validator.addMethod("regex", function(value, element, regexp) {
  var regExsp = new RegExp(regexp);
  return regExsp.test(value);
},"Please check your input"
);


function valEl(el) {
  el.validate({
    rules : {
      name : {
        required : true,
        regex : "^[A-Za-z]+$"   
      },
      email : {
        required : true,
        email: true
      },
      phone : {
        digits : true,
        required: true,
        minlength: 10,
        maxlength: 12,
        regex: '[0-9]+'
      }
    },
     messages : {
        name : {
        required : 'This is required',
        regex : 'Please enter a valid name'   
      },
      email : {
        required : 'This is required',
        regex : 'Please enter a valid email'
      },
      phone : {
        required: 'This is required',
        regex : 'Please enter a valid phone number'
      }
    },

    submitHandler: function(form) {
      $('#preloader-active').fadeIn();
      var $form = $(form);
      var $formId = $(form).attr('id');
      switch ($formId) {


          case 'modals__window':
            $.ajax({
              type: 'POST',
                url: $form.attr('action'), 
                data: $form.serialize()
              })
              .done(function() {
                console.log('Success');
              })
              .fail(function() {
                console.log('Fail');
              })
                .always(function() {
                  console.log('always');
                  setTimeout(function() {
                    $form.trigger('reset');
                    $('#preloader-active').fadeIn();
                  }, 1100);
                  setTimeout(function() {
                    $('#preloader-active').fadeOut();
                    $('.modals__wrapper').removeClass('active');
                    $('body').css('overflow', 'auto', 'padding-right', '0px');
                  }, 1300);
                  $('#message-for-user').on('click', function(e) {
                    $(this).fadeOut();
                  });

                });
              break;

          case 'booking':
            $.ajax({
              type: 'POST',
                url: $form.attr('action'), 
                data: $form.serialize()
            })
            .done(function() {
              console.log('Success');
            })
            .fail(function() {
              console.log('Fail');
            })
            .always(function() {
              console.log('Always');
              setTimeout(function() {
                $form.trigger('reset');
                $('#preloader-active').fadeIn();
              }, 1100);
              setTimeout(function() {
                $('#preloader-active').fadeOut();
              }, 1300);
              $('#message-for-user').on('click', function(e) {
                $(this).fadeOut();
              });
            });
            break;
          }
          return false;
      }
    })
  }

  $('.js-form').each(function() {
    vaiEl($(this));
  });
