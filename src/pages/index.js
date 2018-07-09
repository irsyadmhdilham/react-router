import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Index extends Component {
  constructor() {
    super()
    this.state={
      render: ''
    }
  }

  login() {
    this.setState({ render: 'loading', render: 'loading' })
    setTimeout(() => {
      this.setState({ render: 'logged in' })
      setTimeout(() => {
        const { push } = this.props.history
        push('/login')
      }, 500)
    }, 2000)
  }

  render() {
    return (
      <div>
        Index page
        <Link to="/about">to about page</Link>
        <button onClick={this.login.bind(this)}>Login</button>
      {(() => {
        if (this.state.render === 'loading') {
          return <p>Loading...</p>
        } else if (this.state.render === 'logged in') {
          return <p>Succeed</p>
        }
      })()}
      </div>
    )
  }
}
