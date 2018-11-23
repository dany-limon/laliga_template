import React, { Component } from 'react'
import { SimplePanel, AppBar, CurrentAllegationsPanel, CurrentAllegationsList, DivisionSelector, ClubSelector } from '../../molecules'

export default class Home extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <DivisionSelector />
        <ClubSelector />
        <SimplePanel title="alegaciones" code="BET" pending={2} dismissed={1} estimated={9} />
        <SimplePanel title="Exenciones" code="BET" pending={2} dismissed={1} estimated={9} activated={1} />
        <CurrentAllegationsPanel title="alegaciones actuales" code="bet" breaches={9} countDown="47 :  38  :  51" />
        <CurrentAllegationsList />
      </div>
    )
  }
}

Home.propTypes = {}

Home.defaultProps = {}
