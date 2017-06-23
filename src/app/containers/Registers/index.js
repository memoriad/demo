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

  shouldComponentUpdate(nextProps) {
    return this.props.masters !== nextProps.masters;
  }

  onReloadMasters = () => {
    this.props.onLoadMasters()
  }

  componentDidMount() {
    this.onReloadMasters()
    
    $('.button-collapse').sideNav();
    $('.modal').modal({
      dismissible: false
    })
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
