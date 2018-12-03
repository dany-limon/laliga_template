import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { SpinnerBackground } from '../../organisms'
import * as pages from '../../pages'

const AppSession = ({ sesionLoaded }) => {
  if (!sesionLoaded) return <div />
  return (
    <Switch>
      <Route path="/demo" component={pages.Demo} />
      <Route exact path="/" component={pages.Home} />
      <Route component={pages.Home} />
    </Switch>
  )
}

const AppSessionConnectd = connect(
  state => ({ sesionLoaded: state.auth.sesionLoaded }),
  null
)(AppSession)

export default () => (
  <SpinnerBackground>
    <AppSessionConnectd />
  </SpinnerBackground>
)
