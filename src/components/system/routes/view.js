import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { SpinnerBackground } from '../../organisms'
import * as pages from '../../pages'

const LoggedApp = () => {
  return (
    <Switch>
      <Route path="/demo" component={pages.Demo} />
      <Route component={pages.Home} />
    </Switch>
  )
}

const UnauthorizedApp = () => <div />

const Routes = ({ token }) => {
  const App = token ? <LoggedApp /> : <UnauthorizedApp />
  return <SpinnerBackground>{App}</SpinnerBackground>
}
export default Routes
