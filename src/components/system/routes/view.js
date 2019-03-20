import React from 'react'
import PropTypes from 'prop-types'
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

AppSession.propTypes = {
  sesionLoaded: PropTypes.bool
}

const AppSessionConnectd = connect(
  state => ({ sesionLoaded: state.auth.sesionLoaded }),
  null
)(AppSession)

const Routes = () => (
  <SpinnerBackground>
    <AppSessionConnectd />
  </SpinnerBackground>
)

export default Routes
