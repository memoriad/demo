import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { RegisterForm } from '../../components';

class RegisterFormContainer extends React.Component {
  static propTypes = {
    masters: PropTypes.object.isRequired
  }

  componentDidMount() {

  }

  render() {
    const { masters } = this.props
    
    return (
      <RegisterForm masters={masters} />
    )
  }

}

const validate = values => {
  const errors = {}

  return errors
}

const mapStateToProps = (state) => ({
  masters: state.masters
})

const mapDispatchToProps = (dispatch) => ({

})

RegisterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormContainer);

export default reduxForm(
  {
    form: 'register',
    validate
  }
)(RegisterFormContainer);
