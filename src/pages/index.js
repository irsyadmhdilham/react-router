import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Index extends Component {
  constructor() {
    super()
    this.state={
      render: ''
    }
  }

  componentDidMount() {
    const status = sessionStorage.getItem('status'),
          { push } = this.props.history
    if (!status) {
      push('/login')
    }
  }

  render() {
    return (
      <div>
        <h1>Home page</h1>
      </div>
    )
  }
}
