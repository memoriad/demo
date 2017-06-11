import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { loadRegister } from '../../actions/registers';
import { IdentityForm } from '../../components';

class IdentityFormContainer extends React.Component {
  static propTypes = {
    onLoadRegister: PropTypes.func.isRequired
  }

  render() {
    return (
      <IdentityForm {...this.props} />
    )
  }

}

const findIdentity = () => {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    format: 'dd/mm/yyyy'
  });

  $('#card_no').prop('disabled', true);
  $('#email').prop('disabled', true);
  $('#find_identity').addClass('disabled');

  $('#nav_section').removeClass('hide');
  $('#register_form').removeClass('hide');

  $("#identity_section .collapsible-header").removeClass("active");
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});

  $('#register_form li').css('opacity', 0);

  $("#general_section .collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});

  $("#contact_section .collapsible-header").removeClass("active");
  $("#payment_section .collapsible-header").removeClass("active");
  $("#other_section .collapsible-header").removeClass("active");
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});

  setTimeout(function() {
    Materialize.updateTextFields()
    $('select').material_select()
    Materialize.showStaggeredList('#register_form')
  }, 500)

  setTimeout(function() {
    $('#general_section').css("transform", "");
  }, 2000);
  setTimeout(function() {
    $('#contact_section').css("transform", "");
  }, 2500);
  setTimeout(function() {
    $('#payment_section').css("transform", "");
  }, 3000);
  setTimeout(function() {
    $('#other_section').css("transform", "");
  }, 3500);
}

const validate = values => {
  const errors = {}

  if (!values.card_no) {
    errors.card_no = ' required'
  }
  if (!values.email) {
    errors.email = ' required'
  }

  return errors
}

const mapStateToProps = (state) => ({
  findIdentity
})

const mapDispatchToProps = (dispatch) => ({
  onLoadRegister: (id) => {
    dispatch(loadRegister(id))
  }
})

IdentityFormContainer = reduxForm(
  {
    form: 'identity',
    validate
  }
)(IdentityFormContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdentityFormContainer);
