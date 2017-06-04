import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadPage } from '../../actions/pages';
import { getPageById } from '../../reducers/pages';
import { ShowPage } from '../../components';

class ShowPageContainer extends React.Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    onLoadPage: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.page !== nextProps.page;
  }

  componentDidMount() {
    const { onLoadPage } = this.props
    const { params: { id } } = this.props.match
    onLoadPage(id)
  }

  render() {
    const { id, title, content } = this.props.page

    return (
      <ShowPage
        id={id}
        title={title}
        content={content} />
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  page: getPageById(state, ownProps.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPage(id) {
    dispatch(loadPage(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPageContainer);
