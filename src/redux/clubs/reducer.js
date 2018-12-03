import * as types from './types'

export const initialState = {
  isFetching: false,
  items: []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_IS_FETCHING:
      return { ...state, isFetching: action.payload }
    case types.SET_ITEMS:
      return { ...state, items: action.payload }
    case types.LOG_OUT:
      return { ...state, ...initialState }
    default:
      return state
  }
}
