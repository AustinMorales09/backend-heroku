import React, { Component } from 'react'
import { Route } from 'react-router'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
      </div>
    )
  }
}
export default App