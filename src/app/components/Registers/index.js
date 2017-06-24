import React from 'react'
import PropTypes from 'prop-types'
import {
  IdentityForm,
  RegisterForm
} from '../../containers'
import AlertModal from './AlertModal';

const Register = (props) => {
  const { alertModel, handlerAlert } = props

  return (
    <div className="content">
      <nav className="top-nav valign-wrapper indigo darken-3">
        <div className="container">
          <div className="nav-wrapper">
            <span className="flow-text truncate">หน้าลงทะเบียนผู้ประกันตน</span>
          </div>
        </div>
      </nav>

      <IdentityForm handlerAlert={handlerAlert} />

      <RegisterForm handlerAlert={handlerAlert} />

      <AlertModal {...alertModel} />

    </div>
  )
}

export default Register;
