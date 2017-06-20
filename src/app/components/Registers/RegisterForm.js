import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {
  TextField,
  SelectField
} from 'redux-form-material-ui';
import AgreementModal from './AgreementModal';

const RegisterForm = (props) => {
  const { showAgreement, cancelIdentity, masters, initialValues, isAgree, handleChange,
    handleSubmit, pristine, reset, submitting, invalid, countError } = props

  const provinces = masters.province
  const districts = masters.district
  const subDistricts = masters.subDistrict
  const contributionTypes = masters.contributionType
  const occupations = masters.occupation
  const incomes = masters.income
  const physicalConditions = masters.physicalCondition

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">

        <ul id="register_form" className="collapsible popout hide" data-collapsible="expandable">
          <li id="contact_section">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse">
              {
                countError.contact > 0 ? <span className="new badge red" data-badge-caption="error">{countError.contact}</span> :
                  <span className="new badge blue" data-badge-caption="success"></span>
              }
              <i className="material-icons">contacts</i>ข้อมูลการติดต่อ
            </div>
            <div className="collapsible-body hoverable">
              <div className="row">
                <div className="col s12">
                  <Field
                    id="addressNo"
                    name="addressNo"
                    component={TextField}
                    floatingLabelText="ที่อยู่ปัจจุบัน"
                    multiLine={true}
                    rows={2}
                    fullWidth={true} />
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6">
                  <Field
                    id="addressProvince"
                    name="addressProvince"
                    component={SelectField}
                    floatingLabelText="จังหวัด"
                    floatingLabelFixed={true}
                    hintText="[ -โปรดระบุ- ]"
                    fullWidth={true}>
                    {
                      provinces === void 0 ? null : provinces.map((province) =>
                        <MenuItem key={province.id} value={province.id} primaryText={province.value} />
                      )
                    }
                  </Field>
                </div>

                <div className="col s12 m6">
                  <Field
                    id="addressDistrict"
                    name="addressDistrict"
                    component={SelectField}
                    floatingLabelText="อำเภอ/เขต"
                    floatingLabelFixed={true}
                    hintText="[ -โปรดระบุ- ]"
                    fullWidth={true}>
                    {
                      districts === void 0 ? null : districts.map((district) =>
                        <MenuItem key={district.id} value={district.id} primaryText={district.value} />
                      )
                    }
                  </Field>
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6">
                  <Field
                    id="addressSubdistrict"
                    name="addressSubdistrict"
                    component={SelectField}
                    floatingLabelText="ตำบล/แขวง"
                    floatingLabelFixed={true}
                    hintText="[ -โปรดระบุ- ]"
                    fullWidth={true}>
                    {
                      subDistricts === void 0 ? null : subDistricts.map((subDistrict) =>
                        <MenuItem key={subDistrict.id} value={subDistrict.id} primaryText={subDistrict.value} />
                      )
                    }
                  </Field>
                </div>

                <div className="col s12 m6">
                  <Field
                    id="addressZipcode"
                    name="addressZipcode"
                    component={TextField}
                    floatingLabelText="รหัสไปรษณีย์"
                    fullWidth={true} />
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6">
                  <Field
                    id="tel"
                    name="tel"
                    component={TextField}
                    floatingLabelText="โทรศัพท์บ้าน"
                    fullWidth={true} />
                </div>

                <div className="col s12 m6">
                  <Field
                    id="mobile"
                    name="mobile"
                    component={TextField}
                    floatingLabelText="โทรศัพท์มือถือ"
                    fullWidth={true} />
                </div>
              </div>
            </div>
          </li>

          <li id="payment_section">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse">
              {
                countError.payment > 0 ? <span className="new badge red" data-badge-caption="error">{countError.payment}</span> :
                  <span className="new badge blue" data-badge-caption="success"></span>
              }
              <i className="material-icons">payment</i>รูปแบบการจ่ายเงินสมทบ
            </div>
            <div className="collapsible-body hoverable">
              <div className="row">
                <div className="col s12">
                  <Field
                    id="contributionType"
                    name="contributionType"
                    component={SelectField}
                    floatingLabelText="เลือกจ่ายเงินสมทบ"
                    floatingLabelFixed={true}
                    hintText="[ -โปรดระบุ- ]"
                    fullWidth={true}>
                    {
                      contributionTypes === void 0 ? null : contributionTypes.map((contributionType) =>
                        <MenuItem key={contributionType.id} value={contributionType.id} primaryText={contributionType.value} />
                      )
                    }
                  </Field>
                </div>
              </div>
            </div>
          </li>

          <li id="other_section">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse">
              {
                countError.other > 0 ? <span className="new badge red" data-badge-caption="error">{countError.other}</span> :
                  <span className="new badge blue" data-badge-caption="success"></span>
              }
              <i className="material-icons">label</i>ข้อมูลอื่นๆ
            </div>
            <div className="collapsible-body hoverable">
              <div className="row">
                <div className="col s12 m4">
                  <Field
                    id="occupation"
                    name="occupation"
                    component={SelectField}
                    floatingLabelText="กลุ่มอาชีพ"
                    floatingLabelFixed={true}
                    hintText="[ -โปรดระบุ- ]"
                    fullWidth={true}>
                    {
                      occupations === void 0 ? null : occupations.map((occupation) =>
                        <MenuItem key={occupation.id} value={occupation.id} primaryText={occupation.value} />
                      )
                    }
                  </Field>
                </div>

                <div className="col s12 m4">
                  <Field
                    id="salary"
                    name="salary"
                    component={SelectField}
                    floatingLabelText="รายได้ต่อเดือน"
                    floatingLabelFixed={true}
                    hintText="[ -โปรดระบุ- ]"
                    fullWidth={true}>
                    {
                      incomes === void 0 ? null : incomes.map((income) =>
                        <MenuItem key={income.id} value={income.id} primaryText={income.value} />
                      )
                    }
                  </Field>
                </div>

                <div className="col s12 m4">
                  <Field
                    id="salaryOther"
                    name="salaryOther"
                    component={TextField}
                    floatingLabelText="จำนวนเงิน (บาท)"
                    fullWidth={true} />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field
                    id="bodyCondition"
                    name="bodyCondition"
                    component={SelectField}
                    floatingLabelText="สภาพร่างกาย"
                    floatingLabelFixed={true}
                    hintText="[ -โปรดระบุ- ]"
                    fullWidth={true}>
                    {
                      physicalConditions === void 0 ? null : physicalConditions.map((physicalCondition) =>
                        <MenuItem key={physicalCondition.id} value={physicalCondition.id} primaryText={physicalCondition.value} />
                      )
                    }
                  </Field>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div id="button_section" className="row center-align hide">
          <a className="waves-effect waves-light btn indigo darken-4" style={{margin: 2}} onClick={() => showAgreement()}>
            Submit<i className="material-icons right">send</i>
          </a>
          <a id="cancel_identity" className="waves-effect waves-light btn blue-grey lighten-2" style={{margin: 2}} onClick={() => {
              reset
              cancelIdentity()
            }
          }>Cancel</a>
        </div>
      </div>

      <AgreementModal {...props} />

    </form>
  )

}

export default RegisterForm
