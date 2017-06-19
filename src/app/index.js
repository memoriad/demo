import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Root from './containers/Root'

const rootEl = document.getElementById('app')

render(
  <AppContainer>
    <MuiThemeProvider>
      <Root />
    </MuiThemeProvider>
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./containers', () => {
    const NextRootApp = require('./containers/Root').default

    render(
      <AppContainer>
        <MuiThemeProvider>
          <NextRootApp />
        </MuiThemeProvider>
      </AppContainer>,
      rootEl
    );
  });
}
