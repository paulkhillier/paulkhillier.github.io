<!-- Animated scroll to anchor -->

$(function() {
  $('a[href*="#"]:not([href="#"],[href="#myCarousel"],[href="#testimonials"],[href="#bs-example-navbar-collapse-1"])').click(function() {
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

<!-- Success Message -->

/*When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');
});


$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, e) {
    	    e.preventDefault();

    	    var submitButton = $('input[type=submit]', $form);
    	    $.ajax({
    	      type: 'POST',
    	      url: $form.prop('action'),
    	      accept: {
    	        javascript: 'application/javascript'
    	      },
    	      data: $form.serialize(),
    	      beforeSend: function() {
				submitButton.prop('value', '{{ with .Site.Params.contact.wait }}{{ . }}{{ end }}');
				submitButton.prop('disabled', 'disabled');
    	      }
    	    }).done(function(data) {
				submitButton.prop('value', '{{ with .Site.Params.contact.success }}{{ . }}{{ end }}');
    			submitButton.prop('disabled', false);
    	    });
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});
*/
