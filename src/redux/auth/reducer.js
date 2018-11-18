import * as types from './types'

const initialState = {
  isFetching: false,
  token: null,
  email: null
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_TOKEN:
      return { ...state, token: action.payload }
    case types.SET_EMAIL:
      return { ...state, email: action.payload }
    case types.SET_IS_FETCHING:
      return { ...state, isFetching: action.payload }
    case types.LOG_OUT:
      return { ...state, ...initialState }
    default:
      return state
  }
}
