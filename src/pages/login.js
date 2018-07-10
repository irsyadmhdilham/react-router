import React, { Component } from 'react'

export default class Login extends Component {
  constructor() {
    super()
    this.state={
      status: ''
    }
  }

  login() {
    const { push } = this.props.history
    this.setState({ status: 'loading' })
    setTimeout(() => {
      this.setState({status: ''})
      sessionStorage.setItem('status', 'logged in')
      push('/')
    }, 2000)
  }

  render() {
    return (
      <div>
        <h1>Login page</h1>
        <button onClick={this.login.bind(this)}>Login</button>
      {(() => {
        if (this.state.status === 'loading') {
          return (
            <p>Loading...</p>
          )
        }
      })()}
      </div>
    )
  }
}
