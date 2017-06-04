import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <input type={type} placeholder={`Enter ${label}`} {...input} />
    {touched && error && <div className='error'>{error}</div>}
  </div>
)

const renderTextAreaField = ({ input, label, rows, meta: { touched, error, warning } }) => (
  <div>
    <textarea rows={rows} placeholder={`Enter ${label}`} {...input} />
    {touched && error && <div className='error'>{error}</div>}
  </div>
)

const PageForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <div className="container">
      <div className="content">
        <form onSubmit={handleSubmit} className='form'>
          <fieldset>
            <label htmlFor="title">Title</label>
            <Field name="title" component={renderTextField} type="text" label="Title" />
          </fieldset>
          <fieldset>
            <label htmlFor="content">Content</label>
            <Field name="content" component={renderTextAreaField} rows="5" label='Content' />
          </fieldset>
          <button type='submit' className='button' disabled={pristine || submitting}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default PageForm
