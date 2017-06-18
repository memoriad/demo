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

  componentDidMount() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
      format: 'dd/mm/yyyy'
    });

    setTimeout(function() {
      $('select').material_select()
    }, 500)
  }

  render() {
    return (
      <IdentityForm {...this.props} />
    )
  }

}

const findIdentity = () => {
  $('#card_no').prop('disabled', true);
  $('#laser').prop('disabled', true);
  $('#title').prop('disabled', true);
  $('#name').prop('disabled', true);
  $('#surname').prop('disabled', true);
  $('#birthDate').prop('disabled', true);
  $('#email').prop('disabled', true);
  $('#find_identity').addClass('disabled');

  $('#nav_section').removeClass('hide');
  $('#register_form').removeClass('hide');
  $('#button_section').removeClass('hide');

  $("#identity_section .collapsible-header").removeClass("active");
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});

  $("#contact_section .collapsible-header").addClass("active");
  $("#payment_section .collapsible-header").addClass("active");
  $("#other_section .collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});

  setTimeout(function() {
    Materialize.updateTextFields()
    $('select').material_select()
  }, 500)
}

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'required'
  }
  if (!values.name) {
    errors.name = 'required'
  }
  if (!values.surname) {
    errors.surname = 'required'
  }
  if (!values.birthDate) {
    errors.birthDate = 'required'
  }
  if (!values.card_no) {
    errors.card_no = 'required'
  }
  if (!values.laser) {
    errors.laser = 'required'
  }
  if (!values.email) {
    errors.email = 'required'
  }

  return errors
}

const mapStateToProps = (state) => ({
  masters: state.masters,
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
