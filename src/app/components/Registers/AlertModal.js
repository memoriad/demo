import React from 'react';
import PropTypes from 'prop-types';

const AlertModal = (props) => {
  const { headerText, contentText, handlerCallback } = props

  return (
    <div id="alert_modal" className="modal">
      <div className="modal-content">
        <h4>{headerText}</h4>
        <div className="divider"></div>
        <p>{contentText}</p>
      </div>
      <div className="modal-footer">
        <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
        {
          handlerCallback === void 0 ?
            null :
            <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => handlerCallback()}>Confirm</a>
        }
      </div>
    </div>
  )
}

AlertModal.propTypes = {

}

export default AlertModal
