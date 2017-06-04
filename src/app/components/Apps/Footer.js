import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className="page-footer teal">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Company Bio</h5>
              <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
