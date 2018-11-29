import React from 'react'
import ReactDOM from 'react-dom'

import FirebaseProvider from './providers/FirebaseProvider'
import RoutesProvider from './providers/RoutesProvider'
import SentryProvider from './providers/SentryProvider'
import StoreProvider from './providers/StoreProvider'

ReactDOM.render(
  <SentryProvider>
    <FirebaseProvider>
      <StoreProvider>
        <RoutesProvider />
      </StoreProvider>
    </FirebaseProvider>
  </SentryProvider>,
  document.getElementById('application')
)
