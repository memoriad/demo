import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadMasters } from '../../actions/masters';
import { RegisterPage } from '../../components';

class RegisterContainer extends React.Component {
  static propTypes = {
    masters: PropTypes.object.isRequired,
    onLoadMasters: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.masters !== nextProps.masters;
  }

  onReloadMasters = () => {
    this.props.onLoadMasters()
  }

  componentDidMount() {
    this.onReloadMasters()

    setTimeout(function() {
      $('.collapsible').collapsible('open', 0);
    }, 500);

    $('.button-collapse').sideNav();

    $('.modal').modal();

    $('#active_general').click(function() {
      $("#general_section .collapsible-header").addClass("active");
      $(".collapsible").collapsible({accordion: false});

      $("#contact_section .collapsible-header").removeClass("active");
      $("#payment_section .collapsible-header").removeClass("active");
      $("#other_section .collapsible-header").removeClass("active");
      $(".collapsible").collapsible({accordion: true});
      $(".collapsible").collapsible({accordion: false});
    });

    $('#active_location').click(function() {
      $("#contact_section .collapsible-header").addClass("active");
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
      $("#contact_section .collapsible-header").removeClass("active");
      $("#other_section .collapsible-header").removeClass("active");
      $(".collapsible").collapsible({accordion: true});
      $(".collapsible").collapsible({accordion: false});
    });

    $('#active_other').click(function() {
      $("#other_section .collapsible-header").addClass("active");
      $(".collapsible").collapsible({accordion: false});

      $("#general_section .collapsible-header").removeClass("active");
      $("#contact_section .collapsible-header").removeClass("active");
      $("#payment_section .collapsible-header").removeClass("active");
      $(".collapsible").collapsible({accordion: true});
      $(".collapsible").collapsible({accordion: false});
    });

    $('#find_identity').click(function() {
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        format: 'dd/mm/yyyy'
      });

      $('#notify_panel').removeClass('hide');
      $('#nav_section').removeClass('hide');
      $('#register_form').removeClass('hide');

      $("#identity_section .collapsible-header").removeClass("active");
      $(".collapsible").collapsible({accordion: true});
      $(".collapsible").collapsible({accordion: false});
    });

    $('#cancel_identity').click(function() {
      $("#identity_section .collapsible-header").addClass("active");
      $(".collapsible").collapsible({accordion: false});

      $("#general_section .collapsible-header").removeClass("active");
      $("#contact_section .collapsible-header").removeClass("active");
      $("#payment_section .collapsible-header").removeClass("active");
      $(".collapsible").collapsible({accordion: true});
      $(".collapsible").collapsible({accordion: false});

      $('#notify_panel').addClass('hide');
      $('#nav_section').addClass('hide');
      $('#register_form').addClass('hide');
    });
  }

  render() {

    return (
      <RegisterPage />
    );
  }

}

const mapStateToProps = (state) => ({
  masters: state.masters
})

const mapDispatchToProps = (dispatch) => ({
  onLoadMasters() {
    dispatch(loadMasters())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
