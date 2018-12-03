import * as types from './types'

export const logOut = () => {
  return { type: types.LOG_OUT }
}

export const setSesionLoaded = value => {
  return { type: types.SET_SESION_LOADED, payload: value }
}

export const setIsFetching = value => {
  return { type: types.SET_IS_FETCHING, payload: value }
}

export const setToken = value => {
  return { type: types.SET_TOKEN, payload: value }
}

export const setEmail = value => {
  return { type: types.SET_EMAIL, payload: value }
}

export const setName = value => {
  return { type: types.SET_NAME, payload: value }
}

export const setRol = value => {
  return { type: types.SET_ROL, payload: value }
}
