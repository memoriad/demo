import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import {
  AutoComplete,
  TextField,
  SelectField,
  DatePicker
} from 'redux-form-material-ui';
import AgreementModal from './AgreementModal';

const styles = {
  customWidth: {
    width: '100%'
  }
}

const RegisterForm = (props) => {
  const { showAgreement, cancelIdentity, masters, initialValues,
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
                    style={styles.customWidth} />
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6">
                  <Field
                    id="addressProvince"
                    name="addressProvince"
                    component={AutoComplete}
                    floatingLabelText="จังหวัด"
                    openOnFocus
                    filter={MUIAutoComplete.fuzzyFilter}
                    dataSourceConfig={{text: 'value', value: 'id'}}
                    dataSource={
                      provinces === void 0 ? [{id: '', name: ''}] : provinces
                    }
                    style={styles.customWidth} />
                </div>

                <div className="col s12 m6">
                  <Field
                    id="addressDistrict"
                    name="addressDistrict"
                    component={AutoComplete}
                    floatingLabelText="อำเภอ/เขต"
                    openOnFocus
                    filter={MUIAutoComplete.fuzzyFilter}
                    dataSourceConfig={{text: 'value', value: 'id'}}
                    dataSource={
                      districts === void 0 ? [{id: '', name: ''}] : districts
                    }
                    style={styles.customWidth} />
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6">
                  <Field
                    id="addressSubdistrict"
                    name="addressSubdistrict"
                    component={AutoComplete}
                    floatingLabelText="ตำบล/แขวง"
                    openOnFocus
                    filter={MUIAutoComplete.fuzzyFilter}
                    dataSourceConfig={{text: 'value', value: 'id'}}
                    dataSource={
                      subDistricts === void 0 ? [{id: '', name: ''}] : subDistricts
                    }
                    style={styles.customWidth} />
                </div>

                <div className="col s12 m6">
                  <Field id="addressZipcode" name="addressZipcode" component={TextField} floatingLabelText="รหัสไปรษณีย์" style={styles.customWidth} />
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6">
                  <Field id="tel" name="tel" component={TextField} floatingLabelText="โทรศัพท์บ้าน" style={styles.customWidth} />
                </div>

                <div className="col s12 m6">
                  <Field id="mobile" name="mobile" component={TextField} floatingLabelText="โทรศัพท์มือถือ" style={styles.customWidth} />
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
                    component={AutoComplete}
                    floatingLabelText="เลือกจ่ายเงินสมทบ"
                    openOnFocus
                    filter={MUIAutoComplete.fuzzyFilter}
                    dataSourceConfig={{text: 'value', value: 'id'}}
                    dataSource={
                      contributionTypes === void 0 ? [{id: '', name: ''}] : contributionTypes
                    }
                    style={styles.customWidth} />
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
                    component={AutoComplete}
                    floatingLabelText="กลุ่มอาชีพ"
                    openOnFocus
                    filter={MUIAutoComplete.fuzzyFilter}
                    dataSourceConfig={{text: 'value', value: 'id'}}
                    dataSource={
                      occupations === void 0 ? [{id: '', name: ''}] : occupations
                    }
                    style={styles.customWidth} />
                </div>

                <div className="col s12 m4">
                  <Field
                    id="salary"
                    name="salary"
                    component={AutoComplete}
                    floatingLabelText="รายได้ต่อเดือน"
                    openOnFocus
                    filter={MUIAutoComplete.fuzzyFilter}
                    dataSourceConfig={{text: 'value', value: 'id'}}
                    dataSource={
                      incomes === void 0 ? [{id: '', name: ''}] : incomes
                    }
                    style={styles.customWidth} />
                </div>

                <div className="col s12 m4">
                  <Field id="salaryOther" name="salaryOther" component={TextField} floatingLabelText="จำนวนเงิน (บาท)" style={styles.customWidth} />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field
                    id="bodyCondition"
                    name="bodyCondition"
                    component={AutoComplete}
                    floatingLabelText="สภาพร่างกาย"
                    openOnFocus
                    filter={MUIAutoComplete.fuzzyFilter}
                    dataSourceConfig={{text: 'value', value: 'id'}}
                    dataSource={
                      physicalConditions === void 0 ? [{id: '', name: ''}] : physicalConditions
                    }
                    style={styles.customWidth} />
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div id="button_section" className="row hide">
          <div className="col s6 right-align">
            <a className="waves-effect waves-light btn indigo darken-4" onClick={() => showAgreement()}>
              Submit<i className="material-icons right">send</i>
            </a>
          </div>
          <div className="col s6 left-align">
            <a id="cancel_identity" className="waves-effect waves-light btn blue-grey lighten-2" onClick={() => {
                reset
                cancelIdentity()
              }
            }>Cancel</a>
          </div>
        </div>
      </div>

      <AgreementModal {...props} />

    </form>
  )

}

export default RegisterForm
