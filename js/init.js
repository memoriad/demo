(function($) {
  $(function() {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('select').material_select();

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $('.modal').modal();

    $('.scrollspy').scrollSpy();

    $('#active_general').click(function() {
      $("#general_section .collapsible-header").addClass("active");
      $(".collapsible").collapsible({accordion: false});

      $("#location_section .collapsible-header").removeClass("active");
      $("#payment_section .collapsible-header").removeClass("active");
      $("#other_section .collapsible-header").removeClass("active");
      $(".collapsible").collapsible({accordion: true});
      $(".collapsible").collapsible({accordion: false});
    });

    $('#active_location').click(function() {
      $("#location_section .collapsible-header").addClass("active");
      $(".collapsible").collapsible({accordion: false});

      $("#general_section .collapsible-header").removeClass("active");
      $("#payment_section .collapsible-header").removeClass("active");
      $("#other_section .collapsible-header").removeClass("active");
      $(".collapsible").collapsible({accordion: true});
      $(".collapsible").collapsible({accordion: false});
    });

    $('#active_payment').click(function() {
      $("#payment_section .collapsible-header").addClass("active");
      $(".collapsible").collapsible({accordion: false});

      $("#general_section .collapsible-header").removeClass("active");
      $("#location_section .collapsible-header").removeClass("active");
      $("#other_section .collapsible-header").removeClass("active");
      $(".collapsible").collapsible({accordion: true});
      $(".collapsible").collapsible({accordion: false});
    });

    $('#active_other').click(function() {
      $("#other_section .collapsible-header").addClass("active");
      $(".collapsible").collapsible({accordion: false});

      $("#general_section .collapsible-header").removeClass("active");
      $("#location_section .collapsible-header").removeClass("active");
      $("#payment_section .collapsible-header").removeClass("active");
      $(".collapsible").collapsible({accordion: true});
      $(".collapsible").collapsible({accordion: false});
    });

    $('#find_identity').click(function() {
      Materialize.showStaggeredList('#register_form');
      $('#notify_panel').removeClass('hide');
      $('#nav_section').removeClass('hide');
      $('#register_form').removeClass('hide');

      $("#identity_section .collapsible-header").removeClass("active");
      $(".collapsible").collapsible({accordion: true});
      $(".collapsible").collapsible({accordion: false});

      setTimeout(function() {
        $('#active_general').click();
      }, 1000);
    });

    $('#cancel_identity').click(function() {
      $("#identity_section .collapsible-header").addClass("active");
      $(".collapsible").collapsible({accordion: false});

      $("#general_section .collapsible-header").removeClass("active");
      $("#location_section .collapsible-header").removeClass("active");
      $("#payment_section .collapsible-header").removeClass("active");
      $(".collapsible").collapsible({accordion: true});
      $(".collapsible").collapsible({accordion: false});

      $('#notify_panel').addClass('hide');
      $('#nav_section').addClass('hide');
      $('#register_form').addClass('hide');
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
