import Firebase from 'firebase/app'

import { requested, succeed, failed } from '../../utilities/action-utility'

/**
 * When the authentication request was sent.
 */
export const AUTHENTICATION_REQUESTED = 'AUTHENTICATION_REQUESTED'

/**
 * When the authentication request succeed.
 */
export const AUTHENTICATION_REQUEST_SUCCEED = 'AUTHENTICATION_REQUEST_SUCCEED'

/**
 * When the authentication request fails.
 */
export const AUTHENTICATION_REQUEST_FAILED = 'AUTHENTICATION_REQUEST_FAILED'

/**
 * Dispatched when a user needs to be authenticated.
 */
export function authenticateAction (identity) {
  return async function authenticateDispatcher (dispatch) {
    const { email, password } = identity
    requested(dispatch, AUTHENTICATION_REQUESTED)
    try {
      const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
      succeed(dispatch, AUTHENTICATION_REQUEST_SUCCEED, response)
    } catch (error) {
      failed(dispatch, AUTHENTICATION_REQUEST_FAILED, error)
    }
  }
}

/**
 * Dispatched when a user needs to be unauthenticated.
 */
export function logoutAction (dispatch) {
  return async function logoutDispatcher () {
    await Firebase.auth().signOut()
  }
}
