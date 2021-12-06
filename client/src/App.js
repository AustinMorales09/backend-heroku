import React, { Component } from 'react'
import { Route } from 'react-router'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
      <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </BrowserRouter>
      </div>
    )
  }
}
export default App