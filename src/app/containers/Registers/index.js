import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadMasters } from '../../actions/masters';
import { RegisterPage } from '../../components';

class RegisterContainer extends React.Component {
  static propTypes = {
    masters: PropTypes.object.isRequired,
    onLoadMasters: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.onLoadMasters()
  }

  render() {
    return (
      <RegisterPage />
    );
  }

}

const mapStateToProps = (state) => ({
  masters: state.masters
})

const mapDispatchToProps = (dispatch) => ({
  onLoadMasters() {
    dispatch(loadMasters())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
