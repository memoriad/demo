import React from 'react'
import PropTypes from 'prop-types'
import {
  IdentityForm,
  RegisterForm
} from '../../containers';
import RegisterNav from './RegisterNav';
import AgreementModal from './AgreementModal';

const Register = (props) => {

  return (
    <div className="content">
      <nav className="top-nav">
        <div className="container">
          <div className="nav-wrapper"><a className="page-title truncate">INSO10100 : หน้าทะเบียนผู้ประกันตน</a></div>
        </div>
      </nav>

      <IdentityForm />

      <RegisterNav />

      <RegisterForm />

      <AgreementModal />

    </div>
  )
}

export default Register;
