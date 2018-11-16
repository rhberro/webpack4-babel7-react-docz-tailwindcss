import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import loggerMiddleware from 'redux-logger'
import React from 'react'
import thunkMiddleware from 'redux-thunk'

import Authentication from './reducers/Authentication'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
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

function StoreProvider (props) {
  const { children } = props
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}

export default StoreProvider
