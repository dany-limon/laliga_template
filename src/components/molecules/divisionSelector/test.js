import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components/macro'
import { GlobalStyle, theme } from '../../../config/styled'
import View from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <View />
      </ThemeProvider>
    </React.Fragment>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
