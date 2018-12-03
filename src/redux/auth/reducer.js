import * as types from './types'

export const initialState = {
  sesionLoaded: false,
  isFetching: false,
  token: null,
  email: null,
  name: null,
  rol: null
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_SESION_LOADED:
      return { ...state, sesionLoaded: action.payload }
    case types.SET_TOKEN:
      return { ...state, token: action.payload }
    case types.SET_EMAIL:
      return { ...state, email: action.payload }
    case types.SET_NAME:
      return { ...state, name: action.payload }
    case types.SET_ROL:
      return { ...state, rol: action.payload }
    case types.SET_IS_FETCHING:
      return { ...state, isFetching: action.payload }
    case types.LOG_OUT:
      return { ...state, ...initialState, sesionLoaded: true }
    default:
      return state
  }
}
