import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {
  TextField,
  SelectField,
  DatePicker
} from 'redux-form-material-ui';
import AgreementModal from './AgreementModal';
import AlertModal from './AlertModal';

const RegisterForm = (props) => {
  const { showAgreement, alertModel, cancelIdentity, masters, initialValues, isAgree, handlerChange, handlerAgree,
    handleSubmit, pristine, reset, submitting, invalid } = props

  const titles = masters.title
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
          <li id="general_section">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse">
              <i className="material-icons">info</i>ข้อมูลทั่วไป
            </div>
            <div className="collapsible-body hoverable">
              <div className="row">
                <div className="col s12 m2">
                  <Field
                    id="title"
                    name="title"
                    component={SelectField}
                    floatingLabelText="คำนำหน้า"
                    floatingLabelFixed={true}
                    hintText="[ -โปรดระบุ- ]"
                    fullWidth={true}>
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
                    fullWidth={true} />
                </div>

                <div className="col s12 m5">
                  <Field
                    id="surname"
                    name="surname"
                    component={TextField}
                    floatingLabelText="สกุล"
                    maxLength={20}
                    fullWidth={true} />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field
                    id="birthDate"
                    name="birthDate"
                    component={DatePicker}
                    format={null}
                    autoOk={true}
                    floatingLabelText="เกิดเมื่อ"
                    fullWidth={true} />
                </div>
              </div>
            </div>
          </li>

          <li id="contact_section">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse">
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
                    maxLength={50}
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
                    maxLength={5}
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
                    maxLength={9}
                    fullWidth={true} />
                </div>

                <div className="col s12 m6">
                  <Field
                    id="mobile"
                    name="mobile"
                    component={TextField}
                    floatingLabelText="โทรศัพท์มือถือ"
                    maxLength={10}
                    fullWidth={true} />
                </div>
              </div>
            </div>
          </li>

          <li id="payment_section">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse">
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
                    maxLength={20}
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
              reset()
              cancelIdentity()
            }
          }>Cancel</a>
        </div>
      </div>

      <AgreementModal {...props} />

      <AlertModal {...alertModel} />

    </form>
  )

}

export default RegisterForm
