import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { loadMasters } from '../../actions/masters';
import { submitRegister } from '../../actions/registers';
import { getRegisterById } from '../../reducers/registers';
import { RegisterForm } from '../../components';

class RegisterFormContainer extends React.Component {
  static propTypes = {
    masters: PropTypes.object.isRequired
  }

  componentDidMount() {
    setTimeout(function() {
      $('.collapsible').collapsible('open', 0);
    }, 500);

    $('.button-collapse').sideNav();

    $('.modal').modal();
  }

  render() {
    return (
      <RegisterForm forceUpdate={() => this.forceUpdate()} {...this.props} />
    )
  }

}

const showAgreement = () => {
  $('#agreement_btn').prop('disabled', true)
  $('#agreement_check').prop('checked', false)
  $('#agreement_modal').modal('open')
}

const cancelIdentity = () => {
  $('#card_no').prop('disabled', false);
  $('#email').prop('disabled', false);
  $('#find_identity').removeClass('disabled');

  $("#identity_section .collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});

  $("#general_section .collapsible-header").removeClass("active");
  $("#contact_section .collapsible-header").removeClass("active");
  $("#payment_section .collapsible-header").removeClass("active");
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});

  $('#nav_section').addClass('hide');
  $('#register_form').addClass('hide');
}

const activeGeneral = () => {
  $("#general_section .collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});

  $("#contact_section .collapsible-header").removeClass("active");
  $("#payment_section .collapsible-header").removeClass("active");
  $("#other_section .collapsible-header").removeClass("active");
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});
}

const activeLocation = () => {
  $("#contact_section .collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});

  $("#general_section .collapsible-header").removeClass("active");
  $("#payment_section .collapsible-header").removeClass("active");
  $("#other_section .collapsible-header").removeClass("active");
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});
}

const activePayment = () => {
  $("#payment_section .collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});

  $("#general_section .collapsible-header").removeClass("active");
  $("#contact_section .collapsible-header").removeClass("active");
  $("#other_section .collapsible-header").removeClass("active");
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});
}

const activeOther = () => {
  $("#other_section .collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});

  $("#general_section .collapsible-header").removeClass("active");
  $("#contact_section .collapsible-header").removeClass("active");
  $("#payment_section .collapsible-header").removeClass("active");
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});
}

let countError = {}

const validate = values => {
  const errors = {}
  countError.general = 0
  countError.contact = 0
  countError.payment = 0
  countError.other = 0

  if (!values.title) {
    countError.general += 1
    errors.title = ' required'
  }
  if (!values.name) {
    countError.general += 1
    errors.name = ' required'
  }
  if (!values.surname) {
    countError.general += 1
    errors.surname = ' required'
  }
  if (!values.birthDate) {
    countError.general += 1
    errors.birthDate = ' required'
  }
  if (!values.addressNo) {
    countError.contact += 1
    errors.addressNo = ' required'
  }
  if (!values.addressProvince) {
    countError.contact += 1
    errors.addressProvince = ' required'
  }
  if (!values.addressDistrict) {
    countError.contact += 1
    errors.addressDistrict = ' required'
  }
  if (!values.addressSubdistrict) {
    countError.contact += 1
    errors.addressSubdistrict = ' required'
  }
  if (!values.addressZipcode) {
    countError.contact += 1
    errors.addressZipcode = ' required'
  }
  if (!values.tel) {
    countError.contact += 1
    errors.tel = ' required'
  }
  if (!values.mobile) {
    countError.contact += 1
    errors.mobile = ' required'
  }
  if (!values.contributionType) {
    countError.payment += 1
    errors.contributionType = ' required'
  }
  if (!values.occupation) {
    countError.other += 1
    errors.occupation = ' required'
  }
  if (!values.salary) {
    countError.other += 1
    errors.salary = ' required'
  }
  if (!values.salaryOther) {
    countError.other += 1
    errors.salaryOther = ' required'
  }
  if (!values.bodyCondition) {
    countError.other += 1
    errors.bodyCondition = ' required'
  }

  return errors
}

const mapStateToProps = (state) => ({
  masters: state.masters,
  initialValues: getRegisterById(state),
  countError,
  showAgreement,
  cancelIdentity,
  activeGeneral,
  activeLocation,
  activePayment,
  activeOther
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    console.log('values', JSON.stringify(values))
  }
})

RegisterFormContainer = reduxForm(
  {
    form: 'register',
    validate,
    enableReinitialize: true
  }
)(RegisterFormContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormContainer);
