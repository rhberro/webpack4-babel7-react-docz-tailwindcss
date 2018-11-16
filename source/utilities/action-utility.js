export function requested (dispatch, type) {
  dispatch(
    { type }
  )
}

export function succeed (dispatch, type, data) {
  dispatch(
    { type, data }
  )
}

export function failed (dispatch, type, error) {
  dispatch(
    { type, error }
  )
}
