import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import { classNames } from '../../utilities/class-utility'

import './Notification.scss'

function Notification (props) {
  const { description, icon, onClick, title, hidden } = props

  const className = classNames(
    'notification',
    {
      'notification--hidden': hidden
    }
  )

  return (
    <div className={className}>
      <div className='notification__icon'>
        <Icon name={icon} />
      </div>
      <div className='notification__content'>
        <p className='notification__title'>{ title }</p>
        <p className='notification__description'>{ description }</p>
      </div>
      <div className='notification__close' onClick={onClick}>
        <Icon name='close' />
      </div>
    </div>
  )
}

Notification.propTypes = {
  /** The notification description. */
  description: PropTypes.string,
  /** The notification icon. */
  icon: PropTypes.string,
  /** The notification close action. */
  onClick: PropTypes.func,
  /** The notification title. */
  title: PropTypes.string
}

Notification.defaultProps = {
  description: null,
  icon: 'information',
  onClick: null,
  title: null
}

export default Notification
