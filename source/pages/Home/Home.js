import React, { PureComponent } from 'react'

import { NotificationsContext } from '../../components/Notifications'

import './Home.scss'

class Home extends PureComponent {
  static contextType = NotificationsContext

  notificateOne = () => {
    const notification = {
      // duration: 5000,
      icon: 'badge',
      title: 'Example',
      description: 'An example.'
    }
    this.context(notification)
  }

  notificateTwo = () => {
    const notification = {
      duration: 1000,
      icon: 'close',
      title: 'Medium Sized Notification',
      description: 'This is an example of a brilliant notification!'
    }
    this.context(notification)
  }

  notificateThree = () => {
    const notification = {
      duration: 5000,
      icon: 'information',
      title: 'Why are you trying to leave our amazing website?',
      description: 'This is an example of a brilliant notification! You should not leave our amazing website.'
    }
    this.context(notification)
  }

  notificateFour = () => {
    const notification = {
      duration: 5000,
      icon: 'facebook',
      title: 'Should I stay or should I go? Or should I say shurastei or shurago? Nobody knows.',
      description: 'This is an example of a brilliant notification! This is an example of a brilliant notification! This is an example of a brilliant notification! This is an example of a brilliant notification!'
    }
    this.context(notification)
  }

  render () {
    return (
      <main className='home'>
        Home
        <button onClick={this.notificateOne}>Small notification</button>
        <button onClick={this.notificateTwo}>Medium notification</button>
        <button onClick={this.notificateThree}>Large notification</button>
        <button onClick={this.notificateFour}>Fucking large notification</button>
      </main>
    )
  }
}

export default Home
