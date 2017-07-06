import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Checkbox
} from 'material-ui';
import { AGREEMENT_MESSAGE } from '../../constants/variables';

const AgreementModal = (props) => {
  const { isAgree, handlerChange, handlerAgree, invalid, submitting } = props

  return (
    <div id="agreement_modal" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>เงื่อนไขและข้อตกลง</h4>
        <div className="divider"></div>
        <textarea id="agreement_text" className="agreement-text" value={AGREEMENT_MESSAGE.CONTENT_TEXT} readOnly={true} />

        <Checkbox id="agreement_check" checked={isAgree} onCheck={(event, checked) => {
            handlerChange(checked)
            $('#agreement_btn').prop("disabled", !$('#agreement_check').prop('checked'))
          }
        } label={AGREEMENT_MESSAGE.DECISION_TEXT} />
      </div>
      <div className="modal-footer">
        <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => handlerChange(false)}>ไม่ยอมรับ</a>
        <button type="button" id="agreement_btn" className="modal-action waves-effect waves-green btn-flat" onClick={() => {
            handlerAgree()
          }
        } disabled={submitting}>ยอมรับ</button>
      </div>
    </div>
  )
}

AgreementModal.propTypes = {

}

export default AgreementModal
