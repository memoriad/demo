import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';

const renderTextField = ({ input, placeholder, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <input id={input.name} type={type} {...input} placeholder={placeholder} className="validate" />
    <label htmlFor={input.name}>{label}</label>
    {touched && error && <div className='error'>{error}</div>}
  </div>
)

const renderTextareaField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <textarea id={input.name} {...input} className="materialize-textarea" />
    <label htmlFor={input.name}>{label}</label>
    {touched && error && <div className='error'>{error}</div>}
  </div>
)

const renderSelectField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <select {...input}>
      <option value="" disabled>[ -โปรดระบุ- ]</option>
    </select>
    <label>{label}</label>
    {touched && error && <div className='error'>{error}</div>}
  </div>
)

const renderDatepickerField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <input id={input.name} type={type} {...input} className="datepicker" />
    <label htmlFor={input.name}>{label}</label>
    {touched && error && <div className='error'>{error}</div>}
  </div>
)

const RegisterForm = (props) => {
  const { masters, handleSubmit, pristine, reset, submitting } = props

  console.log('masters.title', masters.title)
  if(masters.title == undefined) {
    return (<div>sgegsg</div>)
  }
  else {
    return (
      <div className="container">
        <ul id="register_form" className="collapsible popout hide" data-collapsible="expandable">
          <li id="general_section" className="scrollspy">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">info</i>ข้อมูลทั่วไป</div>
            <div className="collapsible-body hoverable">
              <form>
                <div className="row">
                  <div className="col s12">
                    <Field name="prefix" component={renderSelectField} label="คำนำหน้า : " />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <Field name="first_name" component={renderTextField} type="text" label="ชื่อ : " />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <Field name="last_name" component={renderTextField} type="text" label="สกุล : " />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <Field name="birth_date" component={renderDatepickerField} type="date" label="เกิดเมื่อ : " />
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li id="location_section" className="scrollspy">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">place</i>ข้อมูลการติดต่อ</div>
            <div className="collapsible-body hoverable">
              <form>
                <div className="row">
                  <div className="col s12">
                    <Field name="location" component={renderTextareaField} label="ที่อยู่ปัจจุบัน : " />
                  </div>
                </div>

                <div className="row">
                  <div className="col s4">
                    <Field name="province" component={renderTextField} type="text" label="จังหวัด : " />
                  </div>
                  <div className="col s8">
                    <Field name="province_text" component={renderSelectField} />
                  </div>
                </div>

                <div className="row">
                  <div className="col s4">
                    <Field name="district" component={renderTextField} type="text" label="อำเภอ/เขต : " />
                  </div>
                  <div className="col s8">
                    <Field name="district_text" component={renderSelectField} />
                  </div>
                </div>

                <div className="row">
                  <div className="col s4">
                    <Field name="sub_district" component={renderTextField} type="text" label="ตำบล/แขวง : " />
                  </div>
                  <div className="col s8">
                    <Field name="sub_district_text" component={renderSelectField} />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <Field name="post_no" component={renderTextField} type="text" label="รหัสไปรษณีย์ : " />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <Field name="phone_no" component={renderTextField} type="text" label="โทรศัพท์บ้าน : " />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <Field name="mobile_no" component={renderTextField} type="text" label="โทรศัพท์มือถือ : " />
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li id="payment_section" className="scrollspy">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">payment</i>รูปแบบการจ่ายเงินสมทบ</div>
            <div className="collapsible-body hoverable">
              <form>
                <div className="row">
                  <div className="col s12">
                    <Field name="payment_option" component={renderSelectField} label="เลือกจ่ายเงินสมทบ : " />
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li id="other_section" className="scrollspy">
            <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">label</i>ข้อมูลอื่นๆ</div>
            <div className="collapsible-body hoverable">
              <form>
                <div className="row">
                  <div className="col s4">
                    <Field name="job_group" component={renderTextField} type="text" label="กลุ่มอาชีพ : " />
                  </div>
                  <div className="col s8">
                    <Field name="job_group_text" component={renderSelectField} />
                  </div>
                </div>

                <div className="row">
                  <div className="col s6">
                    <Field name="salary" component={renderSelectField} label="รายได้ต่อเดือน : " />
                  </div>
                  <div className="col s6">
                    <Field name="salary_amount" placeholder="จำนวนเงิน (บาท)" component={renderTextField} type="text" />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <Field name="healthy" component={renderTextField} type="text" label="สภาพร่างกาย : " />
                  </div>
                </div>
              </form>
            </div>
          </li>
        </ul>
      </div>
    )
  }

}

export default RegisterForm
