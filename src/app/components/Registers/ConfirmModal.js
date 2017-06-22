import React from 'react';
import PropTypes from 'prop-types';

const ConfirmModal = (props) => {
  const { invalid } = props

  return (
    <div id="confirm_modal" className="modal">
      <div className="modal-content">
        <h4>ยืนยันการลงทะเบียน</h4>
        <div className="divider"></div>
        <p>คุณต้องการลงทะเบียนผู้ประกันตนมาตรา 40 ใช่หรือไม่</p>
      </div>
      <div className="modal-footer">
        <a className="modal-action modal-close waves-effect waves-green btn-flat">ยกเลิก</a>
        <button type="submit" className="modal-action waves-effect waves-green btn-flat" onClick={() => {
            if(invalid) {
              $('#invalid_modal').modal('open')
            }
          }
        }>ยืนยัน</button>
      </div>
    </div>
  )
}

export default ConfirmModal
