import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import {
  MenuItem,
  Checkbox
} from 'material-ui';
import {
  TextField,
  SelectField,
  DatePicker
} from 'redux-form-material-ui';
import AgreementModal from './AgreementModal';
import ConfirmModal from './ConfirmModal';

const RegisterForm = (props) => {
  const { districts, onLoadDistricts, subDistricts, onLoadSubDistricts, zipCode, onLoadZipCode, initialValues, initialize, registerValues,
    isDefective, handlerDefective, showAgreement, cancelIdentity, masters, isAgree, handlerChange, handlerAgree,
    handlerAlert, isSalary, handlerSalary, submitRegistrant, isMember, handlerMember, handlerInvalid,
    handleSubmit, pristine, reset, submitting, invalid } = props

  const provinces = masters.province
  const districtItem = districts.result
  const subDistrictItem = subDistricts.result
  const zipCodeValue = zipCode.result
  const contributionTypes = masters.contributionType
  const occupations = masters.occupation
  const incomes = masters.income
  const physicalConditions = masters.physicalCondition

  const disableDistrict = registerValues === void 0 ? true : (registerValues.addressProvince === void 0)
  if(!disableDistrict) {
    onLoadDistricts(registerValues.addressProvince)
  }
  const disableSubDistrict = registerValues === void 0 ? true : (registerValues.addressDistrict === void 0)
  if(!disableSubDistrict) {
    onLoadSubDistricts(registerValues.addressDistrict)
  }
  if(registerValues !== void 0 && registerValues.addressSubdistrict !== void 0) {
    onLoadZipCode(registerValues.addressSubdistrict)
    registerValues.addressZipcode = zipCodeValue
  }

  const disableSalary = isSalary === void 0 ? (initialValues.salary !== 4) : !isSalary

  const disableDefective = isDefective === void 0 ? (initialValues.bodyCondition !== 2) : !isDefective

  return (
    <form onSubmit={handleSubmit(submitRegistrant)}>
      <div className="container">

        <ul id="register_form" className="collapsible popout hide" data-collapsible="expandable">
          <li id="contact_section">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="แสดง/ซ่อน">
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
                    onChange={(event, value) => {
                        registerValues.addressDistrict = void 0
                        registerValues.addressSubdistrict = void 0
                        registerValues.addressZipcode = void 0
                      }
                    }
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
                    onChange={(event, value) => {
                        registerValues.addressSubdistrict = void 0
                        registerValues.addressZipcode = void 0
                      }
                    }
                    fullWidth={true}
                    disabled={disableDistrict}>
                    {
                      districtItem === void 0 ? null : districtItem.map((district) =>
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
                    fullWidth={true}
                    disabled={disableSubDistrict}>
                    {
                      subDistrictItem === void 0 ? null : subDistrictItem.map((subDistrict) =>
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
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="แสดง/ซ่อน">
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
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="แสดง/ซ่อน">
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
                    onChange={handlerSalary}
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
                    fullWidth={true}
                    disabled={disableSalary} />
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6">
                  <Field
                    id="bodyCondition"
                    name="bodyCondition"
                    component={SelectField}
                    floatingLabelText="สภาพร่างกาย"
                    floatingLabelFixed={true}
                    hintText="[ -โปรดระบุ- ]"
                    onChange={handlerDefective}
                    fullWidth={true}>
                    {
                      physicalConditions === void 0 ? null : physicalConditions.map((physicalCondition) =>
                        <MenuItem key={physicalCondition.id} value={physicalCondition.id} primaryText={physicalCondition.value} />
                      )
                    }
                  </Field>
                </div>

                <div className="col s12 m6">
                  <Field
                    id="bodyConditionRemark"
                    name="bodyConditionRemark"
                    component={TextField}
                    floatingLabelText="ระบุความพิการ"
                    maxLength={20}
                    fullWidth={true}
                    disabled={disableDefective} />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Checkbox id="member_check" checked={isMember} onCheck={(event, checked) => {
                      handlerMember(checked)
                      $('#showAgreement_btn').prop("disabled", checked)
                    }
                  } label="เป็นสมาชิกกองทุนบำเหน็จบำนาญข้าราชการ กองทุนบำเหน็จบำนาญข้าราชการกรุงเทพมหานคร กองทุนบำเหน็จบำนาญข้าราชการส่วนท้องถิ่น หรือเป็นสมาชิกกองทุนรัฐวิสาหกิจ หรือหน่วยงานอื่นของรัฐหรือไม่" />
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div id="button_section" className="row center-align hide">
          <button type="button" id="showAgreement_btn" className="waves-effect waves-light btn indigo darken-4" style={{margin: 2}} onClick={() => showAgreement()}>
            ลงทะเบียน<i className="material-icons right">send</i>
          </button>
          <a id="cancel_identity" className="waves-effect waves-light btn blue-grey lighten-2" style={{margin: 2}} onClick={() => {
              initialize({})
              handlerMember(false)
              $('#showAgreement_btn').prop("disabled", false)
              cancelIdentity()
            }
          }>ยกเลิก</a>
        </div>
      </div>

      <AgreementModal {...props} />

      <ConfirmModal handlerAlert={handlerAlert} handlerInvalid={handlerInvalid} invalid={invalid} />

    </form>
  )

}

export default RegisterForm
