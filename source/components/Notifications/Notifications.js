import React, { createContext, PureComponent } from 'react'
import ReactDOM from 'react-dom'

import Notification from '../Notification/Notification'

export const NotificationsContext = createContext()

const target = document.getElementById('notifications')

class Notifications extends PureComponent {
  state = { notifications: {} }

  notificate = notification => {
    const { notifications } = this.state
    const { duration } = notification

    const identifier = window.performance.now()

    const bindedMark = this.mark.bind(null, identifier)

    this.setState(
      {
        notifications: {
          ...notifications,
          [identifier]: {
            ...notification,
            markFunction: duration
              ? setTimeout(bindedMark, duration)
              : null
          }
        }
      }
    )
  }

  mark = identifier => {
    const { notifications } = this.state
    const notification = notifications[identifier]

    if (notification.markFunction) {
      clearTimeout(notification.markFunction)
    }

    const newState = {
      notifications: {
        ...notifications,
        [identifier]: {
          ...notification,
          hidden: true
        }
      }
    }

    const bindedRemove = this.remove.bind(null, identifier)

    this.setState(newState)

    setTimeout(bindedRemove, 300)
  }

  remove = identifier => {
    const { notifications } = this.state
    const { [identifier]: removedNotification, ...availableNotifications } = notifications

    this.setState(
      {
        notifications: availableNotifications
      }
    )
  }

  renderNotification = entries => {
    const [identifier, notification] = entries
    const bindedMark = this.mark.bind(null, identifier)
    return <Notification key={identifier} {...notification} onClick={bindedMark} />
  }

  render () {
    const { notifications } = this.state
    const { children } = this.props
    return (
      <NotificationsContext.Provider value={this.notificate}>
        { notifications && ReactDOM.createPortal(
          Object.entries(notifications).map(this.renderNotification),
          target
        ) }
        { children }
      </NotificationsContext.Provider>
    )
  }
}

export default Notifications
