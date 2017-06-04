import React from 'react';
import { PropTypes } from 'prop-types';
import { reduxForm } from 'redux-form';
import { createPage } from '../../actions/pages';
import { PageForm } from '../../components';

class PageFormContainer extends React.Component {
  render() {
    return (
      <PageForm />
    )
  }

}

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.content) {
    errors.content = 'Required'
  }

  return errors
}

export default reduxForm(
  {
    form: 'page',
    validate
  },
  (state) => ({}),
  (dispatch) => ({
    onSubmit: (values) =>
      dispatch(createPage(values))
  })
)(PageFormContainer);
