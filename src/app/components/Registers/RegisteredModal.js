import React from 'react';
import PropTypes from 'prop-types';
import * as alertModel from '../../constants/variables';

const AlertModal = (props) => {
  const { id, alertCode, callback } = props
  let headerText = ''
  let contentText = ''
  let handlerCallback = () => {}

  switch (alertCode) {
    case 'EGA_INVALID_ALERT':
      headerText = alertModel.EGA_INVALID_ALERT.HEADER_TEXT
      contentText = alertModel.EGA_INVALID_ALERT.CONTENT_TEXT
      handlerCallback = () => callback()
      break
    case 'MEMBER_ALERT':
      headerText = alertModel.MEMBER_ALERT.HEADER_TEXT
      contentText = alertModel.MEMBER_ALERT.CONTENT_TEXT
      break
    case 'REGISTER_ALERT':
      headerText = alertModel.REGISTERED_ALERT.HEADER_TEXT
      contentText = alertModel.REGISTERED_ALERT.CONTENT_TEXT
      handlerCallback = () => window.location = '/'
      break
    case 'ERROR_ALERT':
      headerText = alertModel.ERROR_ALERT.HEADER_TEXT
      contentText = alertModel.ERROR_ALERT.CONTENT_TEXT
      handlerCallback = () => window.location = '/'
      break
  }

  return (
    <div id={id} className="modal">
      <div className="modal-content">
        <h4>{headerText}</h4>
        <div className="divider"></div>
        <p>{contentText}</p>
      </div>
      <div className="modal-footer">
        <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => handlerCallback()}>Close</a>
      </div>
    </div>
  )
}

AlertModal.propTypes = {

}

export default AlertModal
