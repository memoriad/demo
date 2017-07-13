import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import { connect } from 'react-redux';
import {
  reduxForm,
  getFormValues,
  getFormSyncErrors
} from 'redux-form';
import { loadMasters } from '../../actions/masters';
import { getRegistrant } from '../../reducers/register';
import { loadDistricts } from '../../actions/districts';
import { loadSubDistricts } from '../../actions/subDistricts';
import { loadZipCode } from '../../actions/zipCode';
import { REGISTERS_ENDPOINT } from '../../constants/endpoints';
import * as alertModel from '../../constants/variables';
import { RegisterForm } from '../../components';

class RegisterFormContainer extends React.Component {
  static propTypes = {
    masters: PropTypes.object.isRequired
  }

  state = {
    isAgree: false,
    isMember: false
  }

  handlerSalary = (event, value) => {
    if(value === 4) {
      this.setState({isSalary: true})
    }else {
      this.setState({isSalary: false})
    }
  }

  handlerDefective = (event, value) => {
    if(value === 2) {
      this.setState({isDefective: true})
    }else {
      this.setState({isDefective: false})
    }
  }

  handlerMember = (value) => {
    this.setState({isMember: value})
    if(value) {
      this.props.handlerAlert(alertModel.MEMBER_ALERT.HEADER_TEXT, alertModel.MEMBER_ALERT.CONTENT_TEXT)
      $('#alert_modal').modal('open')
    }
  }

  handlerChange = (isCheck) => {
    this.setState({isAgree: isCheck})
  }

  handlerAgree = () => {
    $('#confirm_modal').modal('open')
  }

  handlerInvalid = () => {
    this.handlerChange(false)
    $('#confirm_modal').modal('close')
    $('#agreement_modal').modal('close')
  }

  handlerLoaded = (isLoaded) => {
    if(isLoaded) {
      $('#member_group').addClass('hide')
      $('#showAgreement_btn').addClass('hide')
    }else {
      $('#member_group').removeClass('hide')
      $('#showAgreement_btn').removeClass('hide')
    }
  }

  handlerRegistered = () => {
    $('#member_group').addClass('hide')
    $('#showAgreement_btn').addClass('hide')
    this.props.registerValues.isLoaded = true
    this.handlerInvalid()
  }

  submitRegistrant = () => {
    let birthDate = this.props.identityValues.birthDate
    let year = birthDate.getFullYear()
    let month = (birthDate.getMonth() + 1) < 10 ? '0' + (birthDate.getMonth() + 1) : (birthDate.getMonth() + 1)
    let date = birthDate.getDate() < 10 ? '0' + birthDate.getDate() : birthDate.getDate()
    this.props.identityValues.beBirthDate = date + '/' + month + '/' + year

    const params = {
      ...this.props.identityValues,
      ...this.props.registerValues,
      channel: 'INTERNET'
    }
    // console.log('params', JSON.stringify(params))

    fetch(`${REGISTERS_ENDPOINT}/SSO40/Sn010OnlineRegister`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        // console.log('response ok: ', res.ok);
        // console.log('response status: ', res.status);
        // console.log('response status text: ', res.statusText);

        if(res.ok) {
          this.props.handlerAlert(alertModel.REGISTERED_ALERT.HEADER_TEXT, alertModel.REGISTERED_ALERT.CONTENT_TEXT, () => this.handlerRegistered())
          $('#alert_modal').modal('open')
        }else {
          this.props.handlerAlert(alertModel.ERROR_ALERT.HEADER_TEXT, alertModel.ERROR_ALERT.CONTENT_TEXT, () => window.location = '/section40_web/')
          $('#alert_modal').modal('open')
        }
      })
      .catch(err => {
        // console.error(err)
        this.props.handlerAlert(alertModel.ERROR_ALERT.HEADER_TEXT, alertModel.ERROR_ALERT.CONTENT_TEXT, () => window.location = '/section40_web/')
        $('#alert_modal').modal('open')
      });
  }

  cancelIdentity = () => {
    this.setState({isMember: false})

    $('#verify_identity').removeClass('disabled');

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

  componentDidMount() {
    setTimeout(function() {
      $("#identity_section .collapsible-header").addClass("active");
      $(".collapsible").collapsible({accordion: false});
    }, 500);
  }

  render() {
    return (
      <RegisterForm
        handlerMember={this.handlerMember}
        handlerSalary={this.handlerSalary}
        handlerDefective={this.handlerDefective}
        handlerChange={this.handlerChange}
        handlerAgree={this.handlerAgree}
        handlerInvalid={this.handlerInvalid}
        handlerLoaded={this.handlerLoaded}
        cancelIdentity={this.cancelIdentity}
        submitRegistrant={this.submitRegistrant}
        {...this.state}
        {...this.props} />
    )
  }

}

const showAgreement = () => {
  $('#agreement_btn').prop('disabled', true)
  $('#agreement_modal').modal('open')
}

const validate = values => {
  const errors = {}

  if (!values.addressNo) {
    errors.addressNo = 'กรุณากรอกข้อมูล'
  }
  if (!values.addressProvince) {
    errors.addressProvince = 'กรุณากรอกข้อมูล'
  }
  if (!values.addressDistrict) {
    errors.addressDistrict = 'กรุณากรอกข้อมูล'
  }
  if (!values.addressSubdistrict) {
    errors.addressSubdistrict = 'กรุณากรอกข้อมูล'
  }
  if (!values.addressZipcode) {
    errors.addressZipcode = 'กรุณากรอกข้อมูล'
  }
  // else if (values.addressZipcode && !/^[0-9]{5}$/.test(values.addressZipcode)) {
  //   errors.addressZipcode = 'รหัสไปรษณีย์ไม่ถูกต้อง'
  // }
  if (!values.tel && !values.mobile) {
    errors.tel = 'กรุณากรอกข้อมูล'
  }else if (values.tel && !/^[0-9]{9}$/.test(values.tel)) {
    errors.tel = 'เบอร์โทรศัพท์บ้านไม่ถูกต้อง'
  }
  if (!values.mobile && !values.tel) {
    errors.mobile = 'กรุณากรอกข้อมูล'
  }else if (values.mobile && !/^[0-9]{10}$/.test(values.mobile)) {
    errors.mobile = 'เบอร์โทรศัพท์มือถือไม่ถูกต้อง'
  }
  if (!values.contributionType) {
    errors.contributionType = 'กรุณากรอกข้อมูล'
  }
  if (!values.occupation) {
    errors.occupation = 'กรุณากรอกข้อมูล'
  }
  if (!values.salary) {
    errors.salary = 'กรุณากรอกข้อมูล'
  }
  if (!values.salaryOther && values.salary === 4) {
    errors.salaryOther = 'กรุณากรอกข้อมูล'
  }else if (values.salaryOther && !/^[1-9]+[0-9]*$/.test(values.salaryOther) && values.salary === 4) {
    errors.salaryOther = 'กรุณากรอกจำนวนเงินเป็นตัวเลข'
  }else if (values.salaryOther <= 6000 && values.salary === 4) {
    errors.salaryOther = 'จำนวนเงินไม่ถูกต้อง'
  }
  if (!values.bodyCondition) {
    errors.bodyCondition = 'กรุณากรอกข้อมูล'
  }
  if (!values.bodyConditionRemark && values.bodyCondition === 2) {
    errors.bodyConditionRemark = 'กรุณากรอกข้อมูล'
  }

  return errors
}

const mapStateToProps = (state) => ({
  masters: state.masters,
  districts: state.districts,
  subDistricts: state.subDistricts,
  zipCode: state.zipCode,
  initialValues: getRegistrant(state),
  identityValues: getFormValues('identity')(state),
  registerValues: getFormValues('register')(state),
  registerErrors: getFormSyncErrors('register')(state),
  showAgreement
})

const mapDispatchToProps = (dispatch) => ({
  onLoadDistricts: (id) => {
    dispatch(loadDistricts(id))
  },
  onLoadSubDistricts: (id) => {
    dispatch(loadSubDistricts(id))
  },
  onLoadZipCode: (id) => {
    dispatch(loadZipCode(id))
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
