import { PureComponent, Children } from 'react'
import Firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

class Sentry extends PureComponent {
  componentDidMount () {
    Firebase.initializeApp(
      {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
      }
    )
  }

  render () {
    return Children.only(this.props.children)
  }
}

export default Sentry
