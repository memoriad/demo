import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPages } from '../../actions/pages';
import { Pages } from '../../components';

class PagesContainer extends React.Component {
  static propTypes = {
    pages: PropTypes.array.isRequired,
    onLoadPages: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.pages !== nextProps.pages;
  }

  onReloadPages = () => {
    this.props.onLoadPages()
  }

  componentDidMount() {
    this.onReloadPages()
  }

  render() {
    return (
      <Pages
        pages={this.props.pages}
        onReloadPages={this.onReloadPages} />
    );
  }

}

const mapStateToProps = (state) => ({
  pages: state.pages
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPages() {
    dispatch(loadPages())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesContainer);
