import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import Authentication from './reducers/Authentication'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  combineReducers(
    {
      authentication: Authentication
    }
  ),
  composeEnhancers(
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleware
    )
  )
)
