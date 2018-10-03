import React, { Component } from 'react'
import * as SentryBrowser from '@sentry/browser'

class Sentry extends Component {
  constructor (props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch (error, information) {
    const newState = { error }
    this.setState(newState)

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
  }

  render () {
    if (this.state.error) {
      return (
        <p>Click <span onClick={SentryBrowser.showReportDialog}>here</span> to report an error.</p>
      )
    } else {
      return this.props.children
    }
  }
}

export default Sentry
