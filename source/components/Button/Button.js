import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

function Button (props) {
  const { children } = props
  return (
    <button>
      { children }
    </button>
  )
}

Button.propTypes = {
  /** The button children. */
  children: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.element
    ]
  ).isRequired
}

export default Button
