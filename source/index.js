import React from 'react'
import ReactDOM from 'react-dom'
// import * as Sentry from '@sentry/browser'

import Layout from './components/Layout'

// Sentry.init(
//   {
//     dsn: 'https://78554cb5053c4021a1abedb6fb00410a:8884ae9477c94624a57aac9b45298e52@sentry.io/1288483'
//   }
// )

ReactDOM.render(
  <Layout />,
  document.getElementById('application')
)
