import { LOADABLE_STATE, succeedState, failedState, requestedState } from '../../utilities/reducer-utility'

import {
  AUTHENTICATION_REQUESTED,
  AUTHENTICATION_REQUEST_SUCCEED,
  AUTHENTICATION_REQUEST_FAILED
} from '../../actions/Authentication'

export default function Authentication (state = LOADABLE_STATE, action) {
  if (action.type === AUTHENTICATION_REQUESTED) {
    return requestedState()
  }
  if (action.type === AUTHENTICATION_REQUEST_SUCCEED) {
    return succeedState(action.data)
  }
  if (action.type === AUTHENTICATION_REQUEST_FAILED) {
    return failedState(action.error)
  }
  return state
}
