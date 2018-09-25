import React from 'react'
import PropTypes from 'prop-types'

function Icon (props) {
  const { name, className } = props
  return (
    <svg viewBox='0 0 20 20' className={className}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

Icon.propTypes = {
  /** The icon name. */
  name: PropTypes.string.isRequired,
  /** The icon classes. */
  className: PropTypes.string
}

Icon.defaultProps = {
  className: 'icon'
}

export default Icon
