import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { loadMasters } from '../../actions/masters';
import { getRegisterById } from '../../reducers/registers';
import { RegisterForm } from '../../components';

class RegisterFormContainer extends React.Component {
  static propTypes = {
    masters: PropTypes.object.isRequired
  }

  render() {
    return (
      <RegisterForm {...this.props} />
    )
  }

}

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = ' required'
  }
  if (!values.first_name) {
    errors.first_name = ' required'
  }
  if (!values.last_name) {
    errors.last_name = ' required'
  }
  if (!values.birth_date) {
    errors.birth_date = ' required'
  }
  if (!values.location) {
    errors.location = ' required'
  }
  if (!values.province) {
    errors.province = ' required'
  }
  if (!values.district) {
    errors.district = ' required'
  }
  if (!values.sub_district) {
    errors.sub_district = ' required'
  }
  if (!values.post_no) {
    errors.post_no = ' required'
  }
  if (!values.phone_no) {
    errors.phone_no = ' required'
  }
  if (!values.mobile_no) {
    errors.mobile_no = ' required'
  }
  if (!values.payment_option) {
    errors.payment_option = ' required'
  }
  if (!values.job_group) {
    errors.job_group = ' required'
  }
  if (!values.salary) {
    errors.salary = ' required'
  }
  if (!values.healthy) {
    errors.healthy = ' required'
  }

  return errors
}

const mapStateToProps = (state) => ({
  masters: state.masters,
  initialValues: getRegisterById(state)
})

RegisterFormContainer = reduxForm(
  {
    form: 'register',
    validate,
    enableReinitialize: true,
    onSubmit: (values) => { console.log('values', JSON.stringify(values)) }
  }
)(RegisterFormContainer);

export default connect(
  mapStateToProps
)(RegisterFormContainer);
