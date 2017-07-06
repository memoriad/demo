import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import {
  MenuItem,
  RadioButton,
  RadioButtonGroup
} from 'material-ui';
import {
  TextField,
  SelectField,
  DatePicker
} from 'redux-form-material-ui';
import AgreementModal from './AgreementModal';
import ConfirmModal from './ConfirmModal';

const RegisterForm = (props) => {
  const { districts, onLoadDistricts, subDistricts, onLoadSubDistricts, zipCode, onLoadZipCode,
    initialValues, initialize, registerValues, registerErrors, isDefective, handlerDefective,
    showAgreement, cancelIdentity, masters, isAgree, handlerChange, handlerAgree, handlerAlert,
    isSalary, handlerSalary, submitRegistrant, isMember, handlerMember, handlerInvalid,
    handlerLoaded, handleSubmit, pristine, reset, submitting, invalid } = props

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
    if(registerErrors !== void 0) {
      registerErrors.addressZipcode = ''
    }
  }

  const disableSalary = isSalary === void 0 ? (initialValues.salary !== 4) : !isSalary
  if(registerValues !== void 0 && registerValues.salary !== 4) {
    registerValues.salaryOther = ''
  }

  const disableDefective = isDefective === void 0 ? (initialValues.bodyCondition !== 2) : !isDefective
  if(registerValues !== void 0 && registerValues.bodyCondition !== 2) {
    registerValues.bodyConditionRemark = ''
  }

  let isLoaded = registerValues === void 0 ? false : registerValues.isLoaded
  if(registerValues !== void 0 && registerValues.isLoaded !== void 0) {
    handlerLoaded(isLoaded)
  }

  return (
    <form onSubmit={handleSubmit(submitRegistrant)}>
      <div className="container">

        <div id="register_form" className="hide">
          <ul className="collapsible popout" data-collapsible="expandable">
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
                      maxLength={200}
                      fullWidth={true}
                      disabled={isLoaded} />
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
                      fullWidth={true}
                      disabled={isLoaded}>
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
                      disabled={disableDistrict || isLoaded}>
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
                      disabled={disableSubDistrict || isLoaded}>
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
                      fullWidth={true}
                      disabled={isLoaded} />
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
                      fullWidth={true}
                      disabled={isLoaded} />
                  </div>

                  <div className="col s12 m6">
                    <Field
                      id="mobile"
                      name="mobile"
                      component={TextField}
                      floatingLabelText="โทรศัพท์มือถือ"
                      maxLength={10}
                      fullWidth={true}
                      disabled={isLoaded} />
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
                      fullWidth={true}
                      disabled={isLoaded}>
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
                      fullWidth={true}
                      disabled={isLoaded}>
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
                      disabled={disableSalary || isLoaded} />
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
                      fullWidth={true}
                      disabled={isLoaded}>
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
                      disabled={disableDefective || isLoaded} />
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
                      fullWidth={true}
                      disabled={isLoaded}>
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
          </ul>

          <div id="member_group" className="row">
            <div className="col s12">
              <p>เป็นสมาชิกกองทุนบำเหน็จบำนาญข้าราชการ กองทุนบำเหน็จบำนาญข้าราชการกรุงเทพมหานคร กองทุนบำเหน็จบำนาญข้าราชการส่วนท้องถิ่น หรือเป็นสมาชิกกองทุนรัฐวิสาหกิจ หรือหน่วยงานอื่นของรัฐหรือไม่</p>
            </div>
            <div className="col s12">
              <RadioButtonGroup name="isMemberGroup" labelPosition="right" onChange={(event, value) => {
                  handlerMember(value)
                }
              } valueSelected={isMember}>
                <RadioButton
                  value={true}
                  label="ใช่"
                  style={{marginBottom: 12}}
                />
                <RadioButton
                  value={false}
                  label="ไม้ใช่"
                />
              </RadioButtonGroup>
            </div>
          </div>
        </div>

        <div id="button_section" className="row center-align hide">
          <button type="button" id="showAgreement_btn" className="waves-effect waves-light btn indigo darken-4" style={{margin: 2}} onClick={() => {
              showAgreement()
            }
          } disabled={invalid || isMember}>
            ลงทะเบียน<i className="material-icons right">send</i>
          </button>
          <a id="cancel_identity" className="waves-effect waves-light btn blue-grey lighten-2" style={{margin: 2}} onClick={() => {
              initialize({})
              handlerMember(false)
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
