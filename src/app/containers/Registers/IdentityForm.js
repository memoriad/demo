import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { loadRegister } from '../../actions/registers';
import { IdentityForm } from '../../components';

class IdentityFormContainer extends React.Component {
  static propTypes = {
    onLoadRegister: PropTypes.func.isRequired
  }

  render() {
    return (
      <IdentityForm {...this.props} />
    )
  }

}

const validate = values => {
  const errors = {}

  if (!values.card_no) {
    errors.card_no = ' required'
  }
  if (!values.email) {
    errors.email = ' required'
  }

  return errors
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  onLoadRegister(id) {
    dispatch(loadRegister(id))
  }
})

IdentityFormContainer = reduxForm(
  {
    form: 'identity',
    validate
  }
)(IdentityFormContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdentityFormContainer);
