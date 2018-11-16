import React from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Notifications from '../../components/Notifications/Notifications'

import './Layout.scss'

function Layout (props) {
  const { children } = props
  return (
    <Notifications>
      <Header />
      { children }
      <Footer />
    </Notifications>
  )
}

export default Layout
