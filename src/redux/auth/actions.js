import * as types from './types'

export const setToken = value => {
  return { type: types.SET_TOKEN, payload: value }
}

export const setEmail = value => {
  return { type: types.SET_EMAIL, payload: value }
}

export const setIsFetching = value => {
  return { type: types.SET_IS_FETCHING, payload: value }
}

export const logOut = () => {
  return { type: types.LOG_OUT }
}
