import React from 'react'
import PropTypes from 'prop-types'
import Progress from '../Apps/Progress'
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
            <span className="flow-text truncate">ระบบลงทะเบียนผู้ประกันตนมาตรา 40</span>
          </div>
        </div>
      </nav>

      <IdentityForm handlerAlert={handlerAlert} />

      <Progress />

      <RegisterForm handlerAlert={handlerAlert} />

      <AlertModal {...alertModel} />

    </div>
  )
}

export default Register;
