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
  const { isAgree, handleChange, invalid, submitting } = props

  return (
    <div id="agreement_modal" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>เงื่อนไขและข้อตกลง</h4>
        <div className="divider"></div>
        <TextField
          id="agreement_text"
          name="agreement_text"
          multiLine={true}
          rowsMax={15}
          value={text}
          fullWidth={true} disabled />

        <Checkbox id="agreement_check" name="agreement_check" checked={isAgree} onCheck={(event, checked) => {
            handleChange(checked)
            $('#agreement_btn').prop("disabled", !$('#agreement_check').prop('checked'))
          }
        } label="ข้าพเจ้าได้อ่าน และยอมรับเงื่อนไขและข้อตกลง" />
      </div>
      <div className="modal-footer">
        <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => {
            handleChange(false)
          }
        }>Disagree</a>
        <button id="agreement_btn" className="modal-action modal-close waves-effect waves-green btn-flat" type="submit" name="action" onClick={() => {
            Materialize.toast(invalid ? 'Failed' : 'Success', 3000)
          }
        } disabled={submitting}>Agree</button>
      </div>
    </div>
  )
}

AgreementModal.propTypes = {

}

export default AgreementModal
