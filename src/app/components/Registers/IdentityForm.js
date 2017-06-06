import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <input id={input.name} type={type} {...input} className="validate" />
    <label htmlFor={input.name}>{label}</label>
    {touched && error && <div className='error'>{error}</div>}
  </div>
)

const IdentityForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <div className="container">
      <div className="section">
        <h4 className="header">ข้อมูลผู้สมัคร</h4>
        <div className="divider"></div>

        <div id="notify_panel" className="card-panel teal hide">
          <span className="white-text">ยื่นแบบคำขอขึ้นทะเบียนผู้ประกันตนมาตรา 40 เมื่อวันที่ 01 มิถุนายน 2560</span>
        </div>
      </div>

      <ul id="identity_section" className="collapsible" data-collapsible="expandable">
        <li>
          <div className="collapsible-header active tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">perm_identity</i>Identity</div>
          <div className="collapsible-body hoverable">
            <form>
              <div className="row">
                <div className="col s12 m5">
                  <Field name="card_no" component={renderTextField} type="text" label="เลขประจำตัวประชาชน : " />
                </div>

                <div className="col s12 m5">
                  <Field name="email" component={renderTextField} type="email" label="E-mail : " />
                </div>

                <div className="input-field col s12 m2 right-align">
                  <a id="find_identity" className="waves-effect waves-light btn" href="#!">Find</a>
                </div>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default IdentityForm
