import React, { PureComponent } from 'react'
import Firebase from 'firebase/app'

import './Signup.scss'

class Signup extends PureComponent {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state

    await Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
    await Firebase.auth().createUserWithEmailAndPassword(email, password)

    this.props.history.push('/')
  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    const newState = { [name]: value }
    this.setState(newState)
  }

  render () {
    const { email, password } = this.state

    return (
      <main className='signup'>
        <h1>Signup</h1>

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
            Sign up
          </button>
        </form>
      </main>
    )
  }
}

export default Signup
