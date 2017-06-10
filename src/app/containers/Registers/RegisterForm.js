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
  countError
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
