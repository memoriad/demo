import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { loadMasters } from '../../actions/masters';
import { getRegistrant } from '../../reducers/register';
import { REGISTERS_ENDPOINT } from '../../constants/endpoints';
import * as alertModel from '../../constants/variables';
import { RegisterForm } from '../../components';

class RegisterFormContainer extends React.Component {
  static propTypes = {
    masters: PropTypes.object.isRequired
  }

  state = {
    isAgree: false,
    alertModel: {
      headerText: '',
      contentText: '',
      handlerCallback: null
    }
  }

  handlerAlert = (headerText, contentText, handlerCallback) => {
    this.setState({
      alertModel: {
        headerText: headerText,
        contentText: contentText,
        handlerCallback: handlerCallback
      }
    })
  }

  handlerChange = (isCheck) => {
    this.setState({isAgree: isCheck})
  }

  handlerAgree = () => {
    this.handlerAlert(alertModel.CHECK3339_ALERT.HEADER_TEXT, alertModel.CHECK3339_ALERT.CONTENT_TEXT)
    $('#alert_modal').modal('open')
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
      <RegisterForm
        isAgree={this.state.isAgree}
        alertModel={this.state.alertModel}
        handlerChange={this.handlerChange}
        handlerAgree={this.handlerAgree}
        {...this.props} />
    )
  }

}

const showAgreement = () => {
  $('#agreement_btn').prop('disabled', true)
  $('#agreement_modal').modal('open')
}

const cancelIdentity = () => {
  $('#find_identity').removeClass('disabled');

  $("#identity_section .collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});

  $("#general_section .collapsible-header").removeClass("active");
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
  if (!values.addressNo) {
    errors.addressNo = 'required'
  }
  if (!values.addressProvince) {
    errors.addressProvince = 'required'
  }
  if (!values.addressDistrict) {
    errors.addressDistrict = 'required'
  }
  if (!values.addressSubdistrict) {
    errors.addressSubdistrict = 'required'
  }
  if (!values.addressZipcode) {
    errors.addressZipcode = 'required'
  }
  if (!values.tel) {
    errors.tel = 'required'
  }
  if (!values.mobile) {
    errors.mobile = 'required'
  }
  if (!values.contributionType) {
    errors.contributionType = 'required'
  }
  if (!values.occupation) {
    errors.occupation = 'required'
  }
  if (!values.salary) {
    errors.salary = 'required'
  }
  if (!values.salaryOther) {
    errors.salaryOther = 'required'
  }
  if (!values.bodyCondition) {
    errors.bodyCondition = 'required'
  }

  return errors
}

const mapStateToProps = (state) => ({
  masters: state.masters,
  initialValues: getRegistrant(state),
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
