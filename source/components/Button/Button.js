import React from 'react'
import PropTypes from 'prop-types'

const THEMES = {
  PRIMARY: {
    background: 'purple',
    border: 'purple',
    color: 'white',
    display: 'inline'
  },
  INVERTED: {
    background: 'white',
    border: 'white',
    color: 'purple',
    display: 'inline'
  }
}

function Button (props) {
  const { children, className, fill, theme, outlined } = props
  let { background, border, border: colorHover, color, display } = THEMES[theme] || THEMES.PRIMARY

  if (outlined) {
    background = color
    color = border
    colorHover = 'white'
  }

  if (fill) {
    display = 'block'
  }

  return (
    <button className={`font-display font-medium text-lg text-${color} hover:text-${colorHover} rounded-lg p-3 bg-${background} hover:bg-${border}-dark border-${border} border-solid border-2 hover:border-${border}-dark animate animate-100 ${display} ${className}`}>
      { children }
    </button>
  )
}

Button.propTypes = {
  theme: PropTypes.oneOf(
    Object.keys(THEMES)
  ),
  outlined: PropTypes.bool,
  fill: PropTypes.bool
}

Button.defaultProps = {
  theme: 'PRIMARY',
  outlined: false,
  fill: false
}

export default Button
