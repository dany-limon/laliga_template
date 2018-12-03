import _ from 'lodash'
import { AuthActions, AuthUtils } from './'

export const checkSession = () => dispatch => {
  dispatch(logIn())
}

export const logIn = () => (dispatch, getState, { api }) => {
  api.configure(null)
  dispatch(AuthActions.setIsFetching(true))

  return api
    .logIn()
    .then(response => {
      const { token } = response
      dispatch(AuthActions.setToken(token))
      api.configure(token)
      return api.getMe()
    })
    .then(response => {
      const name = _.get(response, 'record.nombre')
      dispatch(AuthActions.setName(name))

      const email = _.get(response, 'record.email')
      dispatch(AuthActions.setEmail(email))

      const rol = AuthUtils.getRol({ sku: 'portalclub', record: _.get(response, 'record') })
      dispatch(AuthActions.setRol(rol))

      dispatch(AuthActions.setSesionLoaded(true))
      setTimeout(() => dispatch(AuthActions.setIsFetching(false)), 250)
    })
    .catch(error => dispatch(handleLoginError(error)))
}

const handleLoginError = () => (dispatch, getState, { apiConfig }) => {
  const logInErrors = localStorage.getItem('LOGIN_ERROR_KEY')
  if (logInErrors < 4) {
    localStorage.setItem('LOGIN_ERROR_KEY', logInErrors + 1)
    window.location = apiConfig.BASE_URL + '/login'
  } else {
    localStorage.setItem('LOGIN_ERROR_KEY', 0)
    window.location = apiConfig.BASE_URL + '/failure'
  }
}
