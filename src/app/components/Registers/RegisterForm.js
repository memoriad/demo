import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import RegisterNav from './RegisterNav';
import AgreementModal from './AgreementModal';

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <input id={input.name} type={type} {...input} />
    <label htmlFor={input.name}>{label}</label>
    {touched && error && <div className="valign-wrapper error"><i className="material-icons">error</i>{error}</div>}
  </div>
)

const renderTextareaField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <textarea id={input.name} {...input} className="materialize-textarea" />
    <label htmlFor={input.name}>{label}</label>
    {touched && error && <div className="valign-wrapper error"><i className="material-icons">error</i>{error}</div>}
  </div>
)

const renderSelectField = ({ input, label, type, options, selected, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <select name={input.name} defaultValue={selected}>
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

const RegisterForm = (props) => {
  const { masters, initialValues, handleSubmit, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">

        <RegisterNav {...props} />

        <ul id="register_form" className="collapsible popout hide" data-collapsible="expandable">
          <li id="general_section" className="scrollspy">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">info</i>ข้อมูลทั่วไป</div>
            <div className="collapsible-body hoverable">
              <div className="row">
                <div className="col s12">
                  <Field name="title" component={renderSelectField} options={masters === void 0 ? {} : masters.title} selected={initialValues.title} label="คำนำหน้า : " />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field name="name" component={renderTextField} type="text" label="ชื่อ : " />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field name="surname" component={renderTextField} type="text" label="สกุล : " />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field name="birthDate" component={renderDatepickerField} type="date" label="เกิดเมื่อ : " />
                </div>
              </div>
            </div>
          </li>

          <li id="contact_section" className="scrollspy">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">contacts</i>ข้อมูลการติดต่อ</div>
            <div className="collapsible-body hoverable">
              <div className="row">
                <div className="col s12">
                  <Field name="addressNo" component={renderTextareaField} label="ที่อยู่ปัจจุบัน : " />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field name="addressProvince" component={renderSelectField} options={masters === void 0 ? {} : masters.province} selected={initialValues.addressProvince} label="จังหวัด : " />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field name="addressDistrict" component={renderSelectField} options={masters === void 0 ? {} : masters.district} selected={initialValues.addressDistrict} label="อำเภอ/เขต : " />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field name="addressSubdistrict" component={renderSelectField} options={masters === void 0 ? {} : masters.subDistrict} selected={initialValues.addressSubdistrict} label="ตำบล/แขวง : " />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field name="addressZipcode" component={renderTextField} type="text" label="รหัสไปรษณีย์ : " />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field name="tel" component={renderTextField} type="text" label="โทรศัพท์บ้าน : " />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field name="mobile" component={renderTextField} type="text" label="โทรศัพท์มือถือ : " />
                </div>
              </div>
            </div>
          </li>

          <li id="payment_section" className="scrollspy">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">payment</i>รูปแบบการจ่ายเงินสมทบ</div>
            <div className="collapsible-body hoverable">
              <div className="row">
                <div className="col s12">
                  <Field name="contributionType" component={renderSelectField} options={masters === void 0 ? {} : masters.contributionType} selected={initialValues.contributionType} label="เลือกจ่ายเงินสมทบ : " />
                </div>
              </div>
            </div>
          </li>

          <li id="other_section" className="scrollspy">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">label</i>ข้อมูลอื่นๆ</div>
            <div className="collapsible-body hoverable">
              <div className="row">
                <div className="col s12">
                  <Field name="occupation" component={renderSelectField} options={masters === void 0 ? {} : masters.jobs} selected={initialValues.occupation} label="กลุ่มอาชีพ : " />
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6">
                  <Field name="salary" component={renderSelectField} options={masters === void 0 ? {} : masters.salaries} selected={initialValues.salary} label="รายได้ต่อเดือน : " />
                </div>
                <div className="col s12 m6">
                  <Field name="salaryOther" component={renderTextField} type="text" label="จำนวนเงิน (บาท) : "/>
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <Field name="bodyCondition" component={renderSelectField} options={masters === void 0 ? {} : masters.bodyConditionType} selected={initialValues.bodyCondition} label="สภาพร่างกาย : " />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <AgreementModal {...props} />

    </form>
  )

}

export default RegisterForm
