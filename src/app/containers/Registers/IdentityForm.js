import React from 'react';
import { PropTypes } from 'prop-types';
import fetch from 'node-fetch';
import { connect } from 'react-redux';
import {
  reduxForm,
  getFormValues
} from 'redux-form';
import { loadRegister } from '../../actions/register';
import { REGISTERS_ENDPOINT } from '../../constants/endpoints';
import * as alertModel from '../../constants/variables';
import { IdentityForm } from '../../components';

class IdentityFormContainer extends React.Component {
  static propTypes = {
    onLoadRegister: PropTypes.func.isRequired
  }

  state = {
    isVerified: false,
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

  findIdentity = () => {
    this.check3339()
  }

  check3339 = () => {
    console.log('check3339');
    let params = 'ssoNum=' + $('#card_no').val()

    fetch(`${REGISTERS_ENDPOINT}/sso/check3339?${params}`)
      .then(res => {
        console.log('response ok: ', res.ok);
        console.log('response status: ', res.status);
        console.log('response status text: ', res.statusText);

        return res.json()
      })
      .then(json => {
        console.log('check3339 result: ', json)

        if(json === true) {
          this.handlerAlert(alertModel.CHECK3339_ALERT.HEADER_TEXT, alertModel.CHECK3339_ALERT.CONTENT_TEXT)
          $('#alert_modal').modal('open')
        }else if(json === false){
          this.check40()
        }
      })
      .catch(err => {
        console.error(err)
        this.handlerAlert(alertModel.ERROR_ALERT.HEADER_TEXT, alertModel.ERROR_ALERT.CONTENT_TEXT)
        $('#alert_modal').modal('open')
      });
  }

  check40 = () => {
    console.log('check40');
    let params = 'ssoNum=' + $('#card_no').val()

    fetch(`${REGISTERS_ENDPOINT}/sso/check40?${params}`)
      .then(res => {
        console.log('response ok: ', res.ok);
        console.log('response status: ', res.status);
        console.log('response status text: ', res.statusText);

        return res.json()
      })
      .then(json => {
        console.log('check40 result: ', json)

        if(json === true) {
          this.handlerAlert(alertModel.CHECK40_ALERT.HEADER_TEXT, alertModel.CHECK40_ALERT.CONTENT_TEXT)
          $('#alert_modal').modal('open')
        }else if(json === false){
          this.verifyPerson()
        }
      })
      .catch(err => {
        console.error(err)
        this.handlerAlert(alertModel.ERROR_ALERT.HEADER_TEXT, alertModel.ERROR_ALERT.CONTENT_TEXT)
        $('#alert_modal').modal('open')
      });
  }

  verifyPerson = () => {
    console.log('verifyPerson');
    let params = 'citizenId=' + $('#card_no').val() + '&firstName=' + $('#name').val() +
                            '&lastName=' + $('#surname').val() + '&birthDate=' + $('#birthDate').val() +
                            '&laserCode=' + $('#laser').val()

    fetch(`${REGISTERS_ENDPOINT}/ega/verification/person?${params}`)
      .then(res => {
        console.log('response ok: ', res.ok);
        console.log('response status: ', res.status);
        console.log('response status text: ', res.statusText);

        return res.json()
      })
      .then(json => {
        console.log('verifyPerson result: ', json)

        if(json === true) {
          this.verifyAge()
        }else {
          this.handlerAlert(alertModel.ERROR_ALERT.HEADER_TEXT, alertModel.ERROR_ALERT.CONTENT_TEXT)
          $('#alert_modal').modal('open')
        }
      })
      .catch(err => {
        console.error(err)
        this.handlerAlert(alertModel.ERROR_ALERT.HEADER_TEXT, alertModel.ERROR_ALERT.CONTENT_TEXT)
        $('#alert_modal').modal('open')
      });
  }

  verifyAge = () => {
    const currentDate = new Date()
    const birthDate = this.props.identityValues.birthDate
    const compareYear = currentDate.getFullYear() - birthDate.getFullYear()
    console.log('compareYear: ', compareYear);

    if(currentDate.getFullYear() - birthDate.getFullYear() < 15 ||
        currentDate.getFullYear() - birthDate.getFullYear() > 60) {

      this.handlerAlert(alertModel.EGA_AGE_ALERT.HEADER_TEXT, alertModel.EGA_AGE_ALERT.CONTENT_TEXT)
      $('#alert_modal').modal('open')

      return false
    }

    this.props.onLoadRegister($('#card_no').val())
    this.setState({
      isVerified: true
    })
    handlerIdentity()
  }

  componentDidMount() {
    $('#cancel_identity').click(() => {
      this.props.reset()
      this.setState({
        isVerified: false
      })
    })
  }

  render() {
    return (
      <IdentityForm
        findIdentity={this.findIdentity}
        {...this.state}
        {...this.props} />
    )
  }

}

const handlerIdentity = () => {
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
}

const validate = values => {
  const errors = {}

  if (!values.card_no) {
    errors.card_no = 'กรุณากรอกข้อมูล'
  }else if (values.card_no && !/^[0-9]{13}$/.test(values.card_no)) {
    errors.card_no = 'เลขประชาชนไม่ถูกต้อง'
  }
  if (!values.laser) {
    errors.laser = 'กรุณากรอกข้อมูล'
  }else if (values.laser && !/^JT[0-9]{1}-[0-9]{7}-[0-9]{2}$/i.test(values.laser)) {
    errors.laser = 'เลขหลังบัตรประชาชนไม่ถูกต้อง'
  }
  if (!values.title) {
    errors.title = 'กรุณากรอกข้อมูล'
  }
  if (!values.name) {
    errors.name = 'กรุณากรอกข้อมูล'
  }
  if (!values.surname) {
    errors.surname = 'กรุณากรอกข้อมูล'
  }
  if (!values.birthDate) {
    errors.birthDate = 'กรุณากรอกข้อมูล'
  }
  if (!values.email) {
    errors.email = 'กรุณากรอกข้อมูล'
  }else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'อีเมลไม่ถูกต้อง'
  }

  return errors
}

const mapStateToProps = (state) => ({
  masters: state.masters,
  identityValues: getFormValues('identity')(state)
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
