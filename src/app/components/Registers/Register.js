import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Page extends React.Component {
  static propTypes = {

  }

  render() {

    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>
          <Link to={{ pathname: `/pages/${id}` }}>
            Show
          </Link>
        </td>
      </tr>
    );
  }

}

export default Page;
