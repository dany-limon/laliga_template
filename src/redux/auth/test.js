import { AuthActions, AuthOperations, AuthTypes } from './'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import reducer, { initialState } from './'
import * as api from '../../api/mock'

/*******************************************************************************
// AuthActions                                                                 *
/*******************************************************************************/
test('AuthActions.logOut', () => {
  let store = createStore(reducer)

  expect(store.getState().token).toBeNull

  store.dispatch(AuthActions.setToken('123456'))
  store.dispatch(AuthActions.logOut())
  expect(store.getState().token).toBeNull()
})

test('AuthActions.setSesionLoaded', () => {
  let store = createStore(reducer)

  expect(store.getState().sesionLoaded).toBeFalsy()

  store.dispatch(AuthActions.setSesionLoaded(true))
  expect(store.getState().sesionLoaded).toBeTruthy()
})

test('AuthActions.setIsFetching', () => {
  let store = createStore(reducer)

  expect(store.getState().isFetching).toBeFalsy()

  store.dispatch(AuthActions.setIsFetching(true))
  expect(store.getState().isFetching).toBeTruthy()
})

test('AuthActions.setToken', () => {
  let store = createStore(reducer)

  expect(store.getState().token).toBeNull()

  const token = '123456'
  store.dispatch(AuthActions.setToken(token))
  expect(store.getState().token).toEqual(token)
})

test('AuthActions.setEmail', () => {
  let store = createStore(reducer)

  expect(store.getState().email).toBeNull()

  const email = 'a@a.com'
  store.dispatch(AuthActions.setEmail(email))
  expect(store.getState().email).toEqual(email)
})

test('AuthActions.setName', () => {
  let store = createStore(reducer)

  expect(store.getState().name).toBeNull()

  const name = 'aaa'
  store.dispatch(AuthActions.setName(name))
  expect(store.getState().name).toEqual(name)
})

test('AuthActions.setRol', () => {
  let store = createStore(reducer)

  expect(store.getState().rol).toBeNull()

  const rol = 'liga'
  store.dispatch(AuthActions.setRol(rol))
  expect(store.getState().rol).toEqual(rol)
})

/*******************************************************************************
// AuthOperations                                                                 *
/*******************************************************************************/
test('AuthOperations.logIn', () => {
  const middlewares = [thunk.withExtraArgument({ api })]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore(initialState)
  store.dispatch(AuthOperations.logIn()).then(() => {
    const actions = store.getActions()
    expect(actions[0].type).toEqual(AuthTypes.SET_IS_FETCHING)
    expect(actions[1].type).toEqual(AuthTypes.SET_TOKEN)
    expect(actions[2].type).toEqual(AuthTypes.SET_NAME)
    expect(actions[3].type).toEqual(AuthTypes.SET_EMAIL)
    expect(actions[4].type).toEqual(AuthTypes.SET_ROL)
    expect(actions[5].type).toEqual(AuthTypes.SET_SESION_LOADED)
  })
})
