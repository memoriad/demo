import React from 'react'
import PropTypes from 'prop-types'
import {
  IdentityForm,
  RegisterForm
} from '../../containers';

const Register = (props) => {

  return (
    <div className="content">
      <nav className="top-nav">
        <div className="container">
          <div className="nav-wrapper"><a className="page-title truncate">หน้าลงทะเบียนผู้ประกันตน</a></div>
        </div>
      </nav>

      <IdentityForm />

      <RegisterForm />

    </div>
  )
}

export default Register;
