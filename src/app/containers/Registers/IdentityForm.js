import React from 'react';
import { PropTypes } from 'prop-types';
import fetch from 'node-fetch';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
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
    this.props.onLoadRegister($('#card_no').val())
    this.setState({
      isVerified: true
    })
    handlerIdentity()
    // window.location = '/'
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
          this.verifyPerson()
        }else if(json === false){
          this.handlerAlert(alertModel.CHECK3339_ALERT.HEADER_TEXT, alertModel.CHECK3339_ALERT.CONTENT_TEXT)
          $('#alert_modal').modal('open')
        }
      })
      .catch(err => {
        console.error(err)
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

        if(json) {
          handlerIdentity()
        }else {
          this.handlerAlert(alertModel.CHECK3339_ALERT.HEADER_TEXT, alertModel.CHECK3339_ALERT.CONTENT_TEXT)
          $('#alert_modal').modal('open')
        }
      })
      .catch(err => {
        console.error(err)
      });
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
        isVerified={this.state.isVerified}
        alertModel={this.state.alertModel}
        findIdentity={this.findIdentity}
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

  $("#general_section .collapsible-header").addClass("active");
  $("#contact_section .collapsible-header").addClass("active");
  $("#payment_section .collapsible-header").addClass("active");
  $("#other_section .collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});
}

const validate = values => {
  const errors = {}

  if (!values.card_no) {
    errors.card_no = 'required'
  }
  if (!values.laser) {
    errors.laser = 'required'
  }
  if (!values.email) {
    errors.email = 'required'
  }else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email'
  }

  return errors
}

const mapStateToProps = (state) => ({
  masters: state.masters
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
