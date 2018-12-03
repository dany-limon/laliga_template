import { ClubsActions } from './'
import { createStore } from 'redux'
import reducer from './'

/*******************************************************************************
// ClubsActions                                                                 *
/*******************************************************************************/
test('ClubsActions.setIsFetching', () => {
  let store = createStore(reducer)

  expect(store.getState().isFetching).toBeFalsy()

  store.dispatch(ClubsActions.setIsFetching(true))
  expect(store.getState().isFetching).toBeTruthy()
})

test('ClubsActions.setIsFetching', () => {
  let store = createStore(reducer)

  expect(store.getState().items).toEqual([])

  const items = [{ id: 0 }, { id: 1 }]
  store.dispatch(ClubsActions.setItems(items))
  expect(store.getState().items).toEqual(items)
})
