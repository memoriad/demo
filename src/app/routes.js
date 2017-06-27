import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  Header,
  Footer
} from './components'
import {
  RegisterPage
} from './containers'

export default () => {
  return (
    <Router basename="/section40_web">
      <div>
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={RegisterPage} />
        <Route exact path='/' component={Footer} />
      </div>
    </Router>
  )
}
