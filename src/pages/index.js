import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Index extends Component {
  render() {
    return (
      <div>
        Index page
        <Link to="/about">to about page</Link>
      </div>
    )
  }
}
