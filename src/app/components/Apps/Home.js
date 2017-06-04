import React from 'react'
import PropTypes from 'prop-types'

const Home = () => {

  return (
    <div className="row">
      <div className="col s12">
        <nav className="top-nav">
          <div className="container">
            <div className="nav-wrapper"><a className="page-title truncate">INSO10100 : หน้าทะเบียนผู้ประกันตน</a></div>
          </div>
        </nav>

        <div className="container">
          <div className="section">
            <h4 className="header">ข้อมูลผู้สมัคร</h4>

            <div className="row">
              <div className="col s12">
                <div className="card-panel teal">
                  <span className="white-text">ยื่นแบบคำขอขึ้นทะเบียนผู้ประกันตนมาตรา 40 เมื่อวันที่ 01 มิถุนายน 2560</span>
                </div>
              </div>
            </div>

            <ul className="collapsible popout" data-collapsible="accordion">
              <li>
                <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">perm_identity</i>ข้อมูลทั่วไป</div>
                <div className="collapsible-body hoverable">
                  <div className="row">
                    <form className="col s12">

                      <div className="row">
                        <div className="input-field col s12">
                          <input id="card_no" type="text" className="validate" />
                          <label htmlFor="card_no">เลขประจำตัวประชาชน : </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="email" className="validate" />
                          <label htmlFor="email">E-mail : </label>
                        </div>
                      </div>

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
                </div>
              </li>

              <li>
                <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">place</i>ข้อมูลการติดต่อ</div>
                <div className="collapsible-body hoverable">
                  <div className="row">
                    <form className="col s12">

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
                </div>
              </li>

              <li>
                <div className="collapsible-header tooltipped hoverable" data-position="top" data-delay="300" data-tooltip="Expand/Collapse"><i className="material-icons">redeem</i>รูปแบบการจ่ายเงินสมทบ</div>
                <div className="collapsible-body hoverable">
                  <div className="row">
                    <form className="col s12">

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
                </div>
              </li>
            </ul>

            <div className="row">
              <div className="col s6 right-align">
                <button data-target="agreement_modal" className="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
              <div className="col s6 left-align">
                <a className="waves-effect waves-light btn" href="#">Clear</a>
              </div>
            </div>

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
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Disagree</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
