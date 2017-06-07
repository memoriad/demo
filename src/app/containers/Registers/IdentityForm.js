import React from 'react';
import { PropTypes } from 'prop-types';
import { reduxForm } from 'redux-form';
import { IdentityForm } from '../../components';

class IdentityFormContainer extends React.Component {
  render() {
    return (
      <IdentityForm {...this.props} />
    )
  }

}

const validate = values => {
  const errors = {}

  if (!values.card_no) {
    errors.card_no = ' required'
  }
  if (!values.email) {
    errors.email = ' required'
  }

  return errors
}

export default reduxForm(
  {
    form: 'identity',
    validate
  }
)(IdentityFormContainer);
