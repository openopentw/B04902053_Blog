import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Header.css'

class Header extends Component {
  render() {
    const { isLogin, loginClick } = this.props
    return (
      <div
        id="header"
      >
        <h1>My blog</h1>
        <div className="buttons">
          { isLogin? (
              <button
                id="post"
                className={ isLogin? 'is-login' : 'not-login' }
              >
                Post a new essay
              </button>
            ) : ''
          }
          <button
            id="login"
            onClick={loginClick}
            className={ isLogin? 'is-login' : 'not-login' }
          >
            { isLogin? 'Logout' : 'Login' }
          </button>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  aisLogin: PropTypes.array,
  loginClick: PropTypes.func,
}

export default Header
