import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Checkbox
} from 'material-ui';

const styles = {
  customWidth: {
    width: '100%'
  }
}

const AgreementModal = (props) => {
  const { invalid, submitting } = props

  return (
    <div id="agreement_modal" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>เงื่อนไขและข้อตกลง</h4>
          <TextField
            id="agreement_text"
            name="agreement_text"
            multiLine={true}
            value="I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.
            I am similar to what is called a panel in other frameworks."
            style={styles.customWidth} disabled />

          <Checkbox id="agreement_check" name="agreement_check" onCheck={() => {
              $('#agreement_btn').prop("disabled", !$('#agreement_check').prop('checked'))
            }
          } label="ข้าพเจ้าได้อ่าน และยอมรับเงื่อนไขและข้อตกลง" />
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
