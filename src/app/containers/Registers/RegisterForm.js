import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { loadMasters } from '../../actions/masters';
import { submitRegister } from '../../actions/registers';
import { getRegisterById } from '../../reducers/registers';
import { REGISTERS_ENDPOINT } from '../../constants/endpoints';
import { RegisterForm } from '../../components';

class RegisterFormContainer extends React.Component {
  static propTypes = {
    masters: PropTypes.object.isRequired
  }

  state = {
    isAgree: false
  }

  handleChange = (isCheck) => {
    this.setState({isAgree: isCheck})
  }

  componentDidMount() {
    setTimeout(function() {
      $("#identity_section .collapsible-header").addClass("active");
      $(".collapsible").collapsible({accordion: false});
    }, 500);

    $('.button-collapse').sideNav();

    $('.modal').modal();
  }

  render() {
    return (
      <RegisterForm isAgree={this.state.isAgree} handleChange={this.handleChange} {...this.props} />
    )
  }

}

const showAgreement = () => {
  $('#agreement_btn').prop('disabled', true)
  $('#agreement_modal').modal('open')
}

const cancelIdentity = () => {
  $('#card_no').prop('disabled', false);
  $('#laser').prop('disabled', false);
  $('#title').prop('disabled', false);
  $('#name').prop('disabled', false);
  $('#surname').prop('disabled', false);
  $('#birthDate').prop('disabled', false);
  $('#email').prop('disabled', false);
  $('#find_identity').removeClass('disabled');

  $("#identity_section .collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});

  $("#contact_section .collapsible-header").removeClass("active");
  $("#payment_section .collapsible-header").removeClass("active");
  $("#other_section .collapsible-header").removeClass("active");
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});

  $('#nav_section').addClass('hide');
  $('#register_form').addClass('hide');
  $('#button_section').addClass('hide');
}

const submitRegistrant = (values) => {
  let params = {
    citizenId: $('#card_no').val(),
    title: $('input[name=title]').val(),
    firstName: $('#name').val(),
    lastName: $('#surname').val(),
    birthDate: $('#birthDate').val(),
    laserCode: $('#laser').val(),
    email: $('#email').val(),
    ...values
  }

  fetch(`${REGISTERS_ENDPOINT}/new/registrant`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      console.log('response ok: ', res.ok);
      console.log('response status: ', res.status);
      console.log('response status text: ', res.statusText);
    })
    .catch(err => {
      console.error(err)
    });
}

let countError = {}

const validate = values => {
  const errors = {}
  countError.contact = 0
  countError.payment = 0
  countError.other = 0

  if (!values.addressNo) {
    countError.contact += 1
    errors.addressNo = 'required'
  }
  if (!values.addressProvince) {
    countError.contact += 1
    errors.addressProvince = 'required'
  }
  if (!values.addressDistrict) {
    countError.contact += 1
    errors.addressDistrict = 'required'
  }
  if (!values.addressSubdistrict) {
    countError.contact += 1
    errors.addressSubdistrict = 'required'
  }
  if (!values.addressZipcode) {
    countError.contact += 1
    errors.addressZipcode = 'required'
  }
  if (!values.tel) {
    countError.contact += 1
    errors.tel = 'required'
  }
  if (!values.mobile) {
    countError.contact += 1
    errors.mobile = 'required'
  }
  if (!values.contributionType) {
    countError.payment += 1
    errors.contributionType = 'required'
  }
  if (!values.occupation) {
    countError.other += 1
    errors.occupation = 'required'
  }
  if (!values.salary) {
    countError.other += 1
    errors.salary = 'required'
  }
  if (!values.salaryOther) {
    countError.other += 1
    errors.salaryOther = 'required'
  }
  if (!values.bodyCondition) {
    countError.other += 1
    errors.bodyCondition = 'required'
  }

  return errors
}

const mapStateToProps = (state) => ({
  masters: state.masters,
  initialValues: getRegisterById(state),
  countError,
  showAgreement,
  cancelIdentity
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    console.log('values', JSON.stringify(values))
    submitRegistrant(values)
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
