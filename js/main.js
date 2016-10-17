<!-- Animated scroll to anchor -->

$(function() {
  $('a[href*="#"]:not([href="#"],[href="#myCarousel"],[href="#bs-example-navbar-collapse-1"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1200);
        return false;
      }
    }
  });

});

<!-- Floating Back to Top Arrow -->
var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

<!-- Contact Us Form Vailidation -->

$("#contactForm").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/paulkhillier@gmail.com",
      method: "POST",
      data: {
        Name: $(form).find("input[name='Name']").val(),
        Phone: $(form).find("input[name='Phone']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        Message: $(form).find("textarea[name='Message']").val(),
        InPerson Tutoring: $(form).find("input[name='InPerson Tutoring']").val(),
        Online Tutoring: $(form).find("input[name='Online Tutoring']").val(),
        Essay and Assignment Editing: $(form).find("input[name='Essay and Assignment Editing']").val(),
        Note Transcription and Review: $(form).find("input[name='Note Transcription and Review']").val(),
        Other services: $(form).find("input[name='Other services']").val(),
      },
      dataType: "json",
      success: function() {
        $("#submit-success").fadeIn();
        $("#contactForm").fadeOut();
      },
      error: function() {
        $("#submit-errors").fadeIn();
      }
    });
  }
});

/*When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');
});
*/

/*
<!-- Animsition Page Transitions -->
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    unSupportCss: [
      'animation-duration',
      '-webkit-animation-duration',
      '-o-animation-duration'
    ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body'
  });
});
*/
