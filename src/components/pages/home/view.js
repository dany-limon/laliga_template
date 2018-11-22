import React, { Component } from 'react'
import { SimplePanel, AppBar, CurrentAllegations } from '../../molecules'

export default class Home extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <SimplePanel title="alegaciones" code="BET" pending={2} dismissed={1} estimated={9} />
        <SimplePanel title="Exenciones" code="BET" pending={2} dismissed={1} estimated={9} activated={1} />
        <CurrentAllegations title="alegaciones actuales" code="BET" countDown="47 :  38  :  51" />
      </div>
    )
  }
}

Home.propTypes = {}

Home.defaultProps = {}
