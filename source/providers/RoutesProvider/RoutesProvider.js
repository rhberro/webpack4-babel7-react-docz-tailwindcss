import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

import Home from '../../pages/Home'
import Layout from '../../layouts/Layout'
import Signin from '../../pages/Signin'
import Signup from '../../pages/Signup'

function RoutesProvider () {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default RoutesProvider
