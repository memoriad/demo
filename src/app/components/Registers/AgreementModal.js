import React from 'react';
import PropTypes from 'prop-types';

const AgreementModal = (props) => {
  const { invalid, submitting } = props

  return (
    <div id="agreement_modal" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>เงื่อนไขและข้อตกลง</h4>
        <textarea id="agreement_text" className="agreement-text"
          value="I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.
          I am similar to what is called a panel in other frameworks." disabled>
        </textarea>

        <input type="checkbox" className="filled-in" id="agreement_check" onChange={() => {
            $('#agreement_btn').prop("disabled", !$('#agreement_check').prop('checked'))
          }
        } />
      <label htmlFor="agreement_check">ข้าพเจ้าได้อ่าน และยอมรับเงื่อนไขและข้อตกลง</label>
      </div>
      <div className="modal-footer">
        <a className="modal-action modal-close waves-effect waves-green btn-flat">Disagree</a>
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
