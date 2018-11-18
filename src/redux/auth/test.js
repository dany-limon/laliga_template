import * as AuthActions from './actions'
import { createStore } from 'redux'
import reducer from './'

/*******************************************************************************
// AuthActions                                                                 *
/*******************************************************************************/
test('AuthActions.setIsFetching', () => {
  let store = createStore(reducer)

  expect(store.getState().isFetching).toBeFalsy()

  store.dispatch(AuthActions.setIsFetching(true))
  expect(store.getState().isFetching).toBeTruthy()

  store.dispatch(AuthActions.setIsFetching(false))
  expect(store.getState().isFetching).toBeFalsy()
})

test('AuthActions.setToken', () => {
  let store = createStore(reducer)

  expect(store.getState().token).toBeNull()

  const token = '123456'
  store.dispatch(AuthActions.setToken(token))
  expect(store.getState().token).toEqual(token)

  store.dispatch(AuthActions.setToken(null))
  expect(store.getState().token).toBeNull()
})

test('AuthActions.setEmail', () => {
  let store = createStore(reducer)

  expect(store.getState().email).toBeNull()

  const email = 'a@a.com'
  store.dispatch(AuthActions.setEmail(email))
  expect(store.getState().email).toEqual(email)

  store.dispatch(AuthActions.setEmail(null))
  expect(store.getState().email).toBeNull()
})

test('AuthActions.logOut', () => {
  let store = createStore(reducer)

  expect(store.getState().token).toBeNull

  store.dispatch(AuthActions.setToken('123456'))
  store.dispatch(AuthActions.logOut())
  expect(store.getState().token).toBeNull()
})
