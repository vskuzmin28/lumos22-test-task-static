/* window thanks */

$('.send-form').submit(function() {
    $.post($(this).attr('action'), $(this).serialize(), function(res) {         
   if (res.success == 1) {
       $('.popupCall').bPopup().close();
         $('.popupThanks').bPopup({
           closeClass:'close-popup-one',
               amsl: 0
          });
         setTimeout(function(){$('.popupThanks').bPopup().close();}, 6000);
     }else{
     alert(res.text);
     }
  }, 'json');
  return false;
})

/* wow animation */

new WOW().init();

// popup

$('.popupCall, .popupPolytic, .popupThanks').hide();

$('.linkCall').click(function(e){
    e.preventDefault();
	$('.popupCall').bPopup({
        closeClass:'popup__close',
        amsl: 0
    })
})

$('.linkPolytic').click(function(e){
    e.preventDefault();
	$('.popupPolytic').bPopup({
        closeClass:'popup__close',
        amsl: 0
    })
})

// mask
$('.phone-mask').mask('+7 (000) 000 0000');

$(".phone-mask").prop("required", "true");

$('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top - 50 }, 800);
    return false;
});
    