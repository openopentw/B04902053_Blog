import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <div
        id="header"
      >
        <h1>My blog</h1>
        <button id="login">Login</button>
      </div>
    )
  }
}

export default Header
