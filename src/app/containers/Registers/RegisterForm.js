import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import { connect } from 'react-redux';
import {
  reduxForm,
  getFormValues
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
      this.props.registerValues.salaryOther = ''
      this.props.initialize(
        {
          'salary': value,
          ...this.props.registerValues
        }
      )
      this.setState({isSalary: false})
    }
  }

  handlerDefective = (event, value) => {
    if(value === 2) {
      this.setState({isDefective: true})
    }else {
      this.props.registerValues.bodyConditionRemark = ''
      this.props.initialize(
        {
          'bodyCondition': value,
          ...this.props.registerValues
        }
      )
      this.setState({isDefective: false})
    }
  }

  handlerMember = (isCheck) => {
    this.setState({isMember: isCheck})
    if(isCheck) {
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

  submitRegistrant = () => {
    const params = {
      ...this.props.identityValues,
      ...this.props.registerValues
    }
    console.log('params', JSON.stringify(params))

    fetch(`${REGISTERS_ENDPOINT}/new/registrant`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        console.log('response ok: ', res.ok);
        console.log('response status: ', res.status);
        console.log('response status text: ', res.statusText);

        if(res.ok) {
          this.props.handlerAlert(alertModel.REGISTERED_ALERT.HEADER_TEXT, alertModel.REGISTERED_ALERT.CONTENT_TEXT, () => window.location = '/')
          $('#alert_modal').modal('open')
        }else {
          this.props.handlerAlert(alertModel.ERROR_ALERT.HEADER_TEXT, alertModel.ERROR_ALERT.CONTENT_TEXT, () => window.location = '/')
          $('#alert_modal').modal('open')
        }
      })
      .catch(err => {
        console.error(err)
        this.props.handlerAlert(alertModel.ERROR_ALERT.HEADER_TEXT, alertModel.ERROR_ALERT.CONTENT_TEXT, () => window.location = '/')
        $('#alert_modal').modal('open')
      });
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

const cancelIdentity = () => {
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
  }else if (values.addressZipcode && !/^[0-9]{5}$/.test(values.addressZipcode)) {
    errors.addressZipcode = 'รหัสไปรษณีย์ไม่ถูกต้อง'
  }
  if (!values.tel) {
    errors.tel = 'กรุณากรอกข้อมูล'
  }else if (values.tel && !/^[0-9]{9}$/.test(values.tel)) {
    errors.tel = 'เบอร์โทรศัพท์บ้านไม่ถูกต้อง'
  }
  if (!values.mobile) {
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
  }else if (values.salaryOther && !/^[1-9]+[0-9]*$/.test(values.salaryOther) &&
    values.salaryOther <= 6000 && values.salary === 4) {
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
  showAgreement,
  cancelIdentity
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
