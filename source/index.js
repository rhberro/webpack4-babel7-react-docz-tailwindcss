import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import About from './pages/About'
import Home from './pages/Home'
import Layout from './layouts/Layout'

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('application')
)
