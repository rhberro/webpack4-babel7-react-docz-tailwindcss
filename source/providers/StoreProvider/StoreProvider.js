import { Provider } from 'react-redux'
import React from 'react'

import store from '../../store'

function StoreProvider (props) {
  const { children } = props
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}

export default StoreProvider
