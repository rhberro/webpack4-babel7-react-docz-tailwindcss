/**
 * Join classes together into a single string.
 *
 * @return { String } The classes to be joined as a string separated by a blank space.
 */
export function classNames () {
  const classes = []

  for (const classPosition in arguments) {
    const className = arguments[classPosition]
    const classNameType = typeof className

    if (classNameType === 'string') {
      className && classes.push(className)
    }

    if (classNameType === 'object') {
      for (const classNameCheck in className) {
        className[classNameCheck] && classes.push(classNameCheck)
      }
    }
  }

  return classes.join(' ')
}
