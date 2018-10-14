/* eslint-disable */
import React, { PureComponent, Children } from 'react'
import * as SentryBrowser from '@sentry/browser'

class Sentry extends PureComponent {
  componentDidMount () {
    SentryBrowser.init(
      {
        dsn: 'https://78554cb5053c4021a1abedb6fb00410a:8884ae9477c94624a57aac9b45298e52@sentry.io/1288483'
      }
    )
  }

  componentDidCatch (error, information) {
    SentryBrowser.configureScope(
      function (scope) {
        Object.keys(information).forEach(
          function (key) {
            const value = information[key]
            scope.setExtra(key, value)
          }
        )
      }
    )

    SentryBrowser.captureException(error)
    SentryBrowser.showReportDialog()
  }

  render () {
    return Children.only(this.props.children)
  }
}

export default Sentry
