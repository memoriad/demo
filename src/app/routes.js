import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  Header,
  Footer,
  Home
} from './components'
import {
  RegisterPage
} from './containers'

export default () => {
  return (
    <Router>
      <div>
        <Route path='/' component={Header} />
        <Route exact path='/' component={RegisterPage} />
        <Route path='/' component={Footer} />
      </div>
    </Router>
  )
}
