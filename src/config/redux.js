import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore, persistCombineReducers, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import createHistory from 'history/createBrowserHistory'
import _ from 'lodash'
import { reducers } from '../redux'
import { AuthOperations } from '../redux/auth'
import * as apiConfig from '../config/api'
import * as api from '../api'
import i18n from '../assets/i18n'

const history = createHistory()
history.listen((location, action) => {
  if (action === 'PUSH') {
    window.scrollTo(0, 0)
  }

  /** your analytics logic */
})

const loggerMiddleware = createLogger({
  collapsed: true
})

const configurePersistStore = () => {
  const rootPersistConfig = {
    key: 'root',
    storage,
    blacklist: _.map(reducers, (_, key) => key)
  }

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: []
  }

  const rootReducer = {
    ...reducers,
    auth: persistReducer(authPersistConfig, reducers.auth)
  }

  const persistRouterReducer = persistCombineReducers(rootPersistConfig, rootReducer)
  const thunkMiddleware = thunk.withExtraArgument({ api, i18n, apiConfig })
  const middlewares = applyMiddleware(thunkMiddleware, loggerMiddleware)
  const store = createStore(persistRouterReducer, middlewares)
  const persistor = persistStore(store, {}, store.dispatch(AuthOperations.checkSession()))
  return { persistor, store }
}
const { persistor, store } = configurePersistStore()

export { persistor, store, history }
