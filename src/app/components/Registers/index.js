import React from 'react'
import PropTypes from 'prop-types'
import {
  IdentityForm,
  RegisterForm
} from '../../containers';

const Register = (props) => {

  return (
    <div className="content">
      <nav className="top-nav valign-wrapper indigo darken-3">
        <div className="container">
          <div className="nav-wrapper">
            <span className="flow-text truncate">หน้าลงทะเบียนผู้ประกันตน</span>
          </div>
        </div>
      </nav>

      <IdentityForm />

      <RegisterForm />

    </div>
  )
}

export default Register;
