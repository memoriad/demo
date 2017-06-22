import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Checkbox
} from 'material-ui';

const text = `I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
              I am similar to what is called a panel in other frameworks.
              I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
              I am similar to what is called a panel in other frameworks.
              I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
              I am similar to what is called a panel in other frameworks.
              I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
              I am similar to what is called a panel in other frameworks.
              I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
              I am similar to what is called a panel in other frameworks.
              I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
              I am similar to what is called a panel in other frameworks.
              I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
              I am similar to what is called a panel in other frameworks.
              I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
              I am similar to what is called a panel in other frameworks.`

const AgreementModal = (props) => {
  const { isAgree, handlerChange, handlerAgree, invalid, submitting } = props

  return (
    <div id="agreement_modal" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>เงื่อนไขและข้อตกลง</h4>
        <div className="divider"></div>
        <textarea id="agreement_text" className="agreement-text" value={text} readOnly={true} />

        <Checkbox id="agreement_check" checked={isAgree} onCheck={(event, checked) => {
            handlerChange(checked)
            $('#agreement_btn').prop("disabled", !$('#agreement_check').prop('checked'))
          }
        } label="ข้าพเจ้าได้อ่านข้อความข้างต้น และยอมรับเงื่อนไขและข้อตกลง" />
      </div>
      <div className="modal-footer">
        <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => handlerChange(false)}>Disagree</a>
        <button type="button" id="agreement_btn" className="modal-action waves-effect waves-green btn-flat" onClick={() => {
            handlerAgree()
          }
        } disabled={submitting}>Agree</button>
      </div>
    </div>
  )
}

AgreementModal.propTypes = {

}

export default AgreementModal
