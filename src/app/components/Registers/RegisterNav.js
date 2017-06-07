import React from 'react';
import PropTypes from 'prop-types';

const RegisterNav = (props) => {
  const { reset } = props

  return (
    <nav id="nav_section" className="hide hide-on-med-and-down">
      <div className="nav-wrapper">
        <ul>
          <li><a id="active_general" href="#nav_section">General</a></li>
          <li><a id="active_location" href="#nav_section">Location</a></li>
          <li><a id="active_payment" href="#nav_section">Payment</a></li>
          <li><a id="active_other" href="#nav_section">Other</a></li>
        </ul>
        <ul className="right">
          <li>
            <a data-target="agreement_modal" className="waves-effect waves-light btn">
              Submit<i className="material-icons right">send</i>
            </a>
          </li>
          <li><a id="cancel_identity" className="waves-effect waves-light btn" onClick={reset}>Cancel</a></li>
        </ul>
      </div>
    </nav>
  )
}

RegisterNav.propTypes = {

}

export default RegisterNav
