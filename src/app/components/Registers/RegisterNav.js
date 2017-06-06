import React from 'react';
import PropTypes from 'prop-types';

const RegisterNav = ({

}) => (
  <div className="container">
    <nav id="nav_section" className="hide hide-on-med-and-down">
      <div className="nav-wrapper">
        <ul>
          <li><a id="active_general" href="#nav_section">General</a></li>
          <li><a id="active_location" href="#nav_section">Location</a></li>
          <li><a id="active_payment" href="#nav_section">Payment</a></li>
          <li><a id="active_other" href="#nav_section">Other</a></li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <button data-target="agreement_modal" className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
          <a id="cancel_identity" className="waves-effect waves-light btn">Cancel</a>
        </ul>
      </div>
    </nav>
  </div>
)

RegisterNav.propTypes = {

}

export default RegisterNav
