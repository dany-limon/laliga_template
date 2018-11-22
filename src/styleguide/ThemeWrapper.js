import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../config/styled'

export default class ThemeWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </React.Fragment>
    )
  }
}
