export const LOADABLE_STATE = {
  data: [],
  error: null,
  loading: false
}

export function requestedState (state) {
  return { ...LOADABLE_STATE, loading: true }
}

export function succeedState (data) {
  return { ...LOADABLE_STATE, data }
}

export function failedState (error) {
  return { ...LOADABLE_STATE, error }
}
