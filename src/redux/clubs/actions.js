import * as types from './types'

export const setIsFetching = value => {
  return { type: types.SET_IS_FETCHING, payload: value }
}

export const setItems = value => {
  return { type: types.SET_ITEMS, payload: value }
}
