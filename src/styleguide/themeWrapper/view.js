import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../../config/styled'

export default class ThemeWrapper extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </React.Fragment>
    )
  }
}
