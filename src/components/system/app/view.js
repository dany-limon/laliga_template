import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../routes'
import { store, persistor } from '../../../config/redux'
import { GlobalStyle, theme } from '../../../config/styled'
import { ThemeProvider } from 'styled-components/macro'

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.Fragment>
)
