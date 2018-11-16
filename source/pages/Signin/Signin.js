import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { PureComponent } from 'react'

import { authenticateAction } from '../../actions/Authentication'
import { NotificationsContext } from '../../components/Notifications'

import './Signin.scss'

class Signin extends PureComponent {
  static contextType = NotificationsContext

  state = {
    email: '',
    password: ''
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { authenticate, history } = this.props

    await authenticate(this.state)

    this.context(
      {
        duration: 5000,
        title: 'Welcome back!',
        description: 'It is nice to see you again!',
        icon: 'badge'
      }
    )

    history.push('/')
  }

  handleChange = event => {
    const { target: { name, value } } = event
    const newState = { ...this.state, [name]: value }
    this.setState(newState)
  }

  render () {
    const { email, password } = this.state

    return (
      <main className='signin'>
        <h1>Signin</h1>

        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>E-mail</label>
            <input type='text' name='email' onChange={this.handleChange} value={email} autoComplete='email' />
          </fieldset>

          <fieldset>
            <label>Password</label>
            <input type='password' name='password' onChange={this.handleChange} value={password} autoComplete='current-password' />
          </fieldset>

          <button onClick={this.handleSubmit}>
            Sign in
          </button>
        </form>
      </main>
    )
  }
}

export default connect(
  function mapStateToProps (state) {
    const { authentication } = state
    return { authentication }
  },
  function mapDispatchToProps (dispatch) {
    return bindActionCreators(
      { authenticate: authenticateAction },
      dispatch
    )
  }
)(Signin)
