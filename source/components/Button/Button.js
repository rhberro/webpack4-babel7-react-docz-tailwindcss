import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../utilities/class-utility'
import { BUTTON_SIZES, BUTTON_VARIATIONS } from '../../constants/Button'

function Button (props) {
  const { disabled, children, onClick } = props

  const classes = classNames(
    'animate-100',
    'animate',
    'border-2',
    'border-solid',
    'font-display',
    'font-medium',
    `hover:bg-purple-dark`,
    `hover:border-purple-dark`,
    'hover:text-white',
    'rounded-lg',
    {
      'block': props.block
    },
    {
      'border-purple': props.variation !== BUTTON_VARIATIONS.LINK,
      'border-transparent': props.variation === BUTTON_VARIATIONS.LINK
    },
    {
      'bg-purple': props.variation === BUTTON_VARIATIONS.FILLED
    },
    {
      'text-white': props.variation === BUTTON_VARIATIONS.FILLED,
      'text-grey': props.variation === BUTTON_VARIATIONS.LINK,
      'text-purple': props.variation === BUTTON_VARIATIONS.OUTLINED
    },
    {
      'text-sm p-2': props.size === BUTTON_SIZES.SMALL,
      'text-md p-3': props.size === BUTTON_SIZES.MEDIUM,
      'text-lg p-4': props.size === BUTTON_SIZES.LARGE
    },
    props.className
  )

  return (
    <button disabled={disabled} className={classes} onClick={onClick}>
      { children }
    </button>
  )
}

Button.propTypes = {
  /** Block */
  block: PropTypes.bool,
  /** Class */
  className: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.object
    ]
  ),
  /** Disabled */
  disabled: PropTypes.bool,

  /** onClick */
  onClick: PropTypes.func,
  /** Size */
  size: PropTypes.oneOf(
    Object.values(BUTTON_SIZES)
  ),
  /** Variation */
  variation: PropTypes.oneOf(
    Object.values(BUTTON_VARIATIONS)
  )
}

Button.defaultProps = {
  block: false,
  className: null,
  disabled: false,
  onClick: null,
  size: BUTTON_SIZES.MEDIUM,
  variation: BUTTON_VARIATIONS.FILLED
}

export default Button
