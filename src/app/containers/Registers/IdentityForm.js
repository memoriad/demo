import React from 'react';
import { PropTypes } from 'prop-types';
import fetch from 'node-fetch';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { loadRegister } from '../../actions/registers';
import { REGISTERS_ENDPOINT } from '../../constants/endpoints';
import { IdentityForm } from '../../components';

class IdentityFormContainer extends React.Component {
  static propTypes = {
    onLoadRegister: PropTypes.func.isRequired
  }

  componentDidMount() {

  }

  render() {
    return (
      <IdentityForm {...this.props} />
    )
  }

}

const findIdentity = () => {
  fetch(`${REGISTERS_ENDPOINT}/sso/check3339`)
    .then(res => {
  		console.log(res.ok);
  		console.log(res.status);
  		console.log(res.statusText);
  		console.log(res.headers.raw());
  		console.log(res.headers.get('content-type'));
      return res.json()
  	})
    .then(json => console.log(json))
    .catch(err => {
      console.error(err)
    });

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
  }else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email'
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
