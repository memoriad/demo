import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';

const renderTextField = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <input id={input.name} type={type} {...input} placeholder={placeholder} />
    <label htmlFor={input.name}>{label}</label>
    {touched && error && <div className="valign-wrapper error"><i className="material-icons">error</i>{error}</div>}
  </div>
)

const renderSelectField = ({ input, label, type, options, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <select id={input.name} {...input}>
      <option value="" disabled>[ -โปรดระบุ- ]</option>
      {
        options === void 0 ?
          null :
          options.map((option) => (
            <option key={option.id} value={option.id}>{option.value}</option>
          ))
      }
    </select>
    <label>{label}</label>
    {touched && error && <div className="valign-wrapper error"><i className="material-icons">error</i>{error}</div>}
  </div>
)

const renderDatepickerField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <input id={input.name} type={type} {...input} className="datepicker" />
    <label htmlFor={input.name}>{label}</label>
    {touched && error && <div className="valign-wrapper error"><i className="material-icons">error</i>{error}</div>}
  </div>
)

const IdentityForm = (props) => {
  const { masters, findIdentity, onLoadRegister, handleSubmit, pristine, reset, submitting, invalid } = props

  return (
    <form action="#">
      <div className="container">
        <div className="section">
          <h4 className="header flow-text">ข้อมูลผู้สมัคร</h4>
          <div className="divider"></div>
        </div>

        <ul id="identity_section" className="collapsible" data-collapsible="expandable">
          <li>
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">account_circle</i>ข้อมูลระบุตัวตน</div>
            <div className="collapsible-body hoverable">
              <div className="row">
                <div className="col s12 m6">
                  <Field name="card_no" component={renderTextField} type="text" label="เลขประจำตัวประชาชน : " />
                </div>

                <div className="col s12 m6">
                  <Field name="laser" component={renderTextField} type="text" label="เลขหลังบัตรประชาชน : " placeholder="JT0-0000000-00" />
                </div>
              </div>

              <div className="row">
                <div className="col s12 m2">
                  <Field name="title" component={renderSelectField} options={masters === void 0 ? {} : masters.title} label="คำนำหน้า : " />
                </div>

                <div className="col s12 m5">
                  <Field name="name" component={renderTextField} type="text" label="ชื่อ : " />
                </div>

                <div className="col s12 m5">
                  <Field name="surname" component={renderTextField} type="text" label="สกุล : " />
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6">
                  <Field name="birthDate" component={renderDatepickerField} type="date" label="เกิดเมื่อ : " />
                </div>

                <div className="col s12 m6">
                  <Field name="email" component={renderTextField} type="email" label="E-mail : " />
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12 right-align">
                  <a id="find_identity" className="waves-effect waves-light btn indigo darken-4" href="#!" onClick={() => {
                      onLoadRegister($('#card_no').val())
                      findIdentity()
                    }
                  }>Find</a>
                  <a id="" className="waves-effect waves-light btn indigo darken-4" href="#!" disabled={pristine || invalid}>Find</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </form>
  )
}

export default IdentityForm
