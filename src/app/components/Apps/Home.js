import React from 'react'
import PropTypes from 'prop-types'

const findIdentify = () => {
  Materialize.showStaggeredList('#register_form');
  $('#notify_panel').removeClass('hide');
  $('#nav_section').removeClass('hide');
  $('#register_form').removeClass('hide');

  $("#identity_section .collapsible-header").removeClass("active");
}

const Home = () => {

  return (
    <div className="row">
      <nav className="top-nav">
        <div className="container">
          <div className="nav-wrapper"><a className="page-title truncate">INSO10100 : หน้าทะเบียนผู้ประกันตน</a></div>
        </div>
      </nav>

      <div className="col s12">
        <div className="container">
          <div className="section">
            <h4 className="header">ข้อมูลผู้สมัคร</h4>
            <div className="divider"></div>

            <div className="row">
              <div className="col s12">
                <div id="notify_panel" className="card-panel teal hide">
                  <span className="white-text">ยื่นแบบคำขอขึ้นทะเบียนผู้ประกันตนมาตรา 40 เมื่อวันที่ 01 มิถุนายน 2560</span>
                </div>
              </div>
            </div>

            <ul id="identity_section" className="collapsible" data-collapsible="expandable">
              <li>
                <div className="collapsible-header active tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse">Identity</div>
                <div className="collapsible-body hoverable">
                  <form>
                    <div className="row">
                      <div className="input-field col s12 m5">
                        <input id="card_no" type="text" className="validate" />
                        <label htmlFor="card_no">เลขประจำตัวประชาชน : </label>
                      </div>

                      <div className="input-field col s12 m5">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">E-mail : </label>
                      </div>

                      <div className="input-field col s12 m2 right-align">
                        <a id="find_identity" className="waves-effect waves-light btn" href="#!" onClick={findIdentify()}>Find</a>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            </ul>

            <nav id="nav_section" className="hide hide-on-med-and-down">
              <div className="nav-wrapper">
                <ul>
                  <li><a id="active_general" href="#nav_section">General</a></li>
                  <li><a id="active_location" href="#nav_section">Location</a></li>
                  <li><a id="active_payment" href="#nav_section">Payment</a></li>
                </ul>
                <ul className="right hide-on-med-and-down">
                  <button data-target="agreement_modal" className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
                  <a id="cancel_identify" className="waves-effect waves-light btn">Cancel</a>
                </ul>
              </div>
            </nav>

            <ul id="register_form" className="collapsible popout hide" data-collapsible="expandable">
              <li id="general_section" className="scrollspy">
                <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">perm_identity</i>ข้อมูลทั่วไป</div>
                <div className="collapsible-body hoverable">
                  <form>
                    <div className="row">
                      <div className="input-field col s12">
                        <select value="">
                          <option value="" disabled>[ -โปรดระบุ- ]</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                        <label>คำนำหน้า : </label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <input id="first_name" type="text" className="validate" />
                        <label htmlFor="first_name">ชื่อ : </label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <input id="last_name" type="text" className="validate" />
                        <label htmlFor="last_name">สกุล : </label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <input id="birth_date" type="date" className="datepicker" />
                        <label htmlFor="birth_date">เกิดเมื่อ : </label>
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
                      <div className="input-field col s12">
                        <textarea id="location" className="materialize-textarea"></textarea>
                        <label htmlFor="location">ที่อยู่ปัจจุบัน : </label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s4">
                        <input id="province" type="text" className="validate" />
                        <label htmlFor="province">จังหวัด : </label>
                      </div>
                      <div className="input-field col s8">
                        <select value="">
                          <option value="" disabled>[ -โปรดระบุ- ]</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s4">
                        <input id="district" type="text" className="validate" />
                        <label htmlFor="district">อำเภอ/เขต : </label>
                      </div>
                      <div className="input-field col s8">
                        <select value="">
                          <option value="" disabled>[ -โปรดระบุ- ]</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s4">
                        <input id="sub_district" type="text" className="validate" />
                        <label htmlFor="sub_district">ตำบล/แขวง : </label>
                      </div>
                      <div className="input-field col s8">
                        <select value="">
                          <option value="" disabled>[ -โปรดระบุ- ]</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <input id="post_no" type="text" className="validate" />
                        <label htmlFor="post_no">รหัสไปรษณีย์ : </label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <input id="phone_no" type="text" className="validate" />
                        <label htmlFor="phone_no">โทรศัพท์บ้าน : </label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <input id="mobile_no" type="text" className="validate" />
                        <label htmlFor="mobile_no">โทรศัพท์มือถือ : </label>
                      </div>
                    </div>
                  </form>
                </div>
              </li>

              <li id="payment_section" className="scrollspy">
                <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">redeem</i>รูปแบบการจ่ายเงินสมทบ</div>
                <div className="collapsible-body hoverable">
                  <form>
                    <div className="row">
                      <div className="input-field col s12">
                        <select value="">
                          <option value="" disabled>[ -โปรดระบุ- ]</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                        <label>เลือกจ่ายเงินสมทบ : </label>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            </ul>

          </div>
        </div>

        <div id="agreement_modal" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <textarea id="agreement_text" className="agreement-text"
              value="I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
              I am similar to what is called a panel in other frameworks." disabled>
            </textarea>

            <input type="checkbox" className="filled-in" id="filled-in-box" />
            <label htmlFor="filled-in-box">Filled in</label>
          </div>
          <div className="modal-footer">
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Disagree</a>
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
