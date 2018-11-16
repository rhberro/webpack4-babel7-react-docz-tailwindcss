import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import Home from './pages/Home'
import Layout from './layouts/Layout'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

import SentryProvider from './providers/Sentry'
import FirebaseProvider from './providers/Firebase'

import ApplicationStore from './store'

ReactDOM.render(
  <SentryProvider>
    <FirebaseProvider>
      <ApplicationStore>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signin' component={Signin} />
              <Route exact path='/signup' component={Signup} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ApplicationStore>
    </FirebaseProvider>
  </SentryProvider>,
  document.getElementById('application')
)
