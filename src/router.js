import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Index from './pages/index'
import About from './pages/about'

export default function() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Index}/>
        <Route path="/about" component={About}/>
      </React.Fragment>
    </Router>
  )
}
