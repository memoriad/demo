import React from 'react';
import PropTypes from 'prop-types';

const AgreementModal = ({

}) => (
  <div id="agreement_modal" className="modal modal-fixed-footer">
    <div className="modal-content">
      <h4>Modal Header</h4>
      <textarea id="agreement_text" className="agreement-text"
        value="I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.
        I am similar to what is called a panel in other frameworks." disabled>
      </textarea>

      <input type="checkbox" className="filled-in" id="filled-in-box" />
      <label htmlFor="filled-in-box">Filled in</label>
    </div>
    <div className="modal-footer">
      <a className="modal-action modal-close waves-effect waves-green btn-flat">Disagree</a>
      <a className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
)

AgreementModal.propTypes = {

}

export default AgreementModal
