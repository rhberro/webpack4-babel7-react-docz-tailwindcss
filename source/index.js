import React from 'react'
import ReactDOM from 'react-dom'

import Home from './pages/Home'
import Layout from './layouts/Layout'

ReactDOM.render(
  <Layout>
    <Home />
  </Layout>,
  document.getElementById('application')
)
