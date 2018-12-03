import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import { ThemeProvider } from 'styled-components/macro'
import { GlobalStyle, theme } from '../../config/styled'
import * as Components from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div>
          {_.map(Components, (View, index) => (
            <View key={`TestView${index}`} />
          ))}
        </div>
      </ThemeProvider>
    </React.Fragment>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
