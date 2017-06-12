import React from 'react';
import PropTypes from 'prop-types';

const RegisterNav = (props) => {
  const { showAgreement, cancelIdentity, activeLocation, activePayment, activeOther, reset } = props

  return (
    <nav id="nav_section" className="nav-extended hide grey lighten-4">
      <div className="nav-wrapper">
        <ul className="right">
          <li>
            <a className="waves-effect waves-light btn indigo darken-4" onClick={() => showAgreement()}>
              Submit<i className="material-icons right">send</i>
            </a>
          </li>
          <li><a id="cancel_identity" className="waves-effect waves-light btn blue-grey lighten-2" onClick={() => {
              reset
              cancelIdentity()
            }
          }>Cancel</a></li>
        </ul>
      </div>

      <div className="nav-wrapper">
        <ul>
          <li><a className="active_location" href="#nav_section" onClick={() => activeLocation()}>
            <i className="material-icons left hide-on-small-only">contacts</i><span className="black-text">ข้อมูลการติดต่อ</span>
          </a></li>
          <li><a className="active_payment" href="#nav_section" onClick={() => activePayment()}>
            <i className="material-icons left hide-on-small-only">payment</i><span className="black-text">รูปแบบการจ่ายเงินสมทบ</span>
          </a></li>
          <li><a className="active_other" href="#nav_section" onClick={() => activeOther()}>
            <i className="material-icons left hide-on-small-only">label</i><span className="black-text">ข้อมูลอื่นๆ</span>
          </a></li>
        </ul>
      </div>
    </nav>
  )
}

RegisterNav.propTypes = {

}

export default RegisterNav
