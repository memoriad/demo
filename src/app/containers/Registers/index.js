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

  state = {
    alertModel: {
      headerText: '',
      contentText: ''
    }
  }

  handlerAlert = (headerText, contentText, handlerCallback) => {
    this.setState({
      alertModel: {
        headerText: headerText,
        contentText: contentText,
        handlerCallback: handlerCallback
      }
    })
    this.forceUpdate()
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
      <RegisterPage
        alertModel={this.state.alertModel}
        handlerAlert={this.handlerAlert} />
    )
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
