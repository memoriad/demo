import React from 'react';
import PropTypes from 'prop-types';

const RegisterNav = (props) => {
  const { reset } = props

  return (
    <nav id="nav_section" className="nav-extended hide">
      <div className="nav-wrapper">
        <ul className="right">
          <li>
            <a data-target="agreement_modal" className="waves-effect waves-light btn">
              Submit<i className="material-icons right">send</i>
            </a>
          </li>
          <li><a id="cancel_identity" className="waves-effect waves-light btn" onClick={reset}>Cancel</a></li>
        </ul>
      </div>

      <div className="nav-wrapper">
        <ul>
          <li><a className="active_general" href="#nav_section">
            <i className="material-icons left">info</i><span className="white-text">ทั่วไป</span>
          </a></li>
          <li><a className="active_location" href="#nav_section">
            <i className="material-icons left">contacts</i><span className="white-text">ติดต่อ</span>
          </a></li>
          <li><a className="active_payment" href="#nav_section">
            <i className="material-icons left">payment</i><span className="white-text">จ่ายเงินสมทบ</span>
          </a></li>
          <li><a className="active_other" href="#nav_section">
            <i className="material-icons left">label</i><span className="white-text">อื่นๆ</span>
          </a></li>
        </ul>
      </div>
    </nav>
  )
}

RegisterNav.propTypes = {

}

export default RegisterNav
