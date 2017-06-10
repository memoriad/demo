import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <input id={input.name} type={type} {...input} />
    <label htmlFor={input.name}>{label}</label>
    {touched && error && <div className="valign-wrapper error"><i className="material-icons">error</i>{error}</div>}
  </div>
)

const IdentityForm = (props) => {
  const { onLoadRegister, handleSubmit, pristine, reset, submitting, invalid } = props

  return (
    <form action="#">
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
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">perm_identity</i>Identity</div>
            <div className="collapsible-body hoverable">
              <div className="row">
                <div className="col s12 m5">
                  <Field name="card_no" component={renderTextField} type="text" label="เลขประจำตัวประชาชน : " />
                </div>

                <div className="col s12 m5">
                  <Field name="email" component={renderTextField} type="email" label="E-mail : " />
                </div>

                <div className="input-field col s12 m2 right-align">
                  <a id="find_identity" className="waves-effect waves-light btn" href="#!" onClick={() => {
                      onLoadRegister($('#card_no').val())

                      $('#register_form li').css('opacity', 0);
                      $('.active_general').click();

                      setTimeout(function() {
                        Materialize.updateTextFields()
                        $('select').material_select()
                        Materialize.showStaggeredList('#register_form')
                      }, 500)

                      setTimeout(function() {
                        $('#general_section').css("transform", "");
                      }, 2000);
                      setTimeout(function() {
                        $('#contact_section').css("transform", "");
                      }, 2500);
                      setTimeout(function() {
                        $('#payment_section').css("transform", "");
                      }, 3000);
                      setTimeout(function() {
                        $('#other_section').css("transform", "");
                      }, 3500);
                    }
                  } disabled={pristine || invalid}>Find</a>
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
