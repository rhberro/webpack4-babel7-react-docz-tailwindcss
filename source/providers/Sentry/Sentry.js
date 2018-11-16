import { PureComponent, Children } from 'react'
import * as SentryBrowser from '@sentry/browser'

class Sentry extends PureComponent {
  componentDidMount () {
    SentryBrowser.init(
      {
        dsn: process.env.SENTRY_DSN
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
