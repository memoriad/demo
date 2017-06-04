import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Page from './Page';

const Pages = ({
  pages,
  onReloadPages
}) => (
  <div className="container">
    <div className="content">
      <button
        className='button'
        onClick={() => onReloadPages()}>
        Reload Pages
      </button>
      <Link to={{ pathname: '/pages/new' }}>Create New Page</Link>
      <hr/>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            pages.map((page) => (
              <Page
                key={page.id}
                id={page.id}
                title={page.title} />
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
)

Pages.propTypes = {
  pages: PropTypes.array.isRequired,
  onReloadPages: PropTypes.func.isRequired
}

export default Pages;
