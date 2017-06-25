import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import areIntlLocalesSupported from 'intl-locales-supported';
import MenuItem from 'material-ui/MenuItem';
import {
  TextField,
  SelectField,
  DatePicker
} from 'redux-form-material-ui';

let DateTimeFormat;

if (areIntlLocalesSupported(['th-TH'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/th-TH');
}

const IdentityForm = (props) => {
  const { isVerified, alertModel, masters, findIdentity, handleSubmit, pristine, reset, submitting, invalid } = props

  const titles = masters.title

  return (
    <form action="#">
      <div className="container">
        <div className="section">
          <h4 className="header flow-text">ข้อมูลผู้สมัคร</h4>
          <div className="divider"></div>
        </div>

        <div id="information_section">
          <blockquote>
            <span className="blue-text text-darken-2">กรุณากรอกข้อมูลด้านล่างให้ครบถ้วน</span>
          </blockquote>
        </div>

        <ul id="identity_section" className="collapsible" data-collapsible="expandable">
          <li>
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">account_circle</i>ข้อมูลระบุตัวตน</div>
            <div className="collapsible-body hoverable">
              <div className="row">
                <div className="col s12 m6">
                  <Field
                    id="card_no"
                    name="card_no"
                    component={TextField}
                    floatingLabelText="เลขประจำตัวประชาชน"
                    fullWidth={true}
                    maxLength={13}
                    disabled={isVerified} />
                </div>

                <div className="col s12 m6">
                  <Field
                    id="laser"
                    name="laser"
                    component={TextField}
                    floatingLabelText="เลขหลังบัตรประชาชน"
                    hintText="JT0-0000000-00"
                    fullWidth={true}
                    maxLength={14}
                    disabled={isVerified} />
                </div>
              </div>

              <div className="row">
                <div className="col s12 m2">
                  <Field
                    id="title"
                    name="title"
                    component={SelectField}
                    floatingLabelText="คำนำหน้า"
                    floatingLabelFixed={true}
                    hintText="[ -โปรดระบุ- ]"
                    fullWidth={true}
                    disabled={isVerified}>
                    {
                      titles === void 0 ? null : titles.map((title) =>
                        <MenuItem key={title.id} value={title.id} primaryText={title.value} />
                      )
                    }
                  </Field>
                </div>

                <div className="col s12 m5">
                  <Field
                    id="name"
                    name="name"
                    component={TextField}
                    floatingLabelText="ชื่อ"
                    maxLength={20}
                    fullWidth={true}
                    disabled={isVerified} />
                </div>

                <div className="col s12 m5">
                  <Field
                    id="surname"
                    name="surname"
                    component={TextField}
                    floatingLabelText="สกุล"
                    maxLength={20}
                    fullWidth={true}
                    disabled={isVerified} />
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6">
                  <Field
                    id="birthDate"
                    name="birthDate"
                    component={DatePicker}
                    format={null}
                    DateTimeFormat={DateTimeFormat}
                    locale="th-TH"
                    autoOk={true}
                    floatingLabelText="เกิดเมื่อ"
                    fullWidth={true}
                    disabled={isVerified} />
                </div>

                <div className="col s12 m6">
                  <Field
                    id="email"
                    name="email"
                    component={TextField}
                    floatingLabelText="Email"
                    fullWidth={true}
                    maxLength={30}
                    disabled={isVerified}
                    disabled={isVerified} />
                </div>
              </div>

              <div className="row right-align">
                <a id="find_identity" className="waves-effect waves-light btn indigo darken-4" href="#!" onClick={() => findIdentity()} disabled={pristine || invalid}>Find</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </form>
  )
}

export default IdentityForm
