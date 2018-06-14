import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Header.css'

class Header extends Component {
  render() {
    const { isLogin, postClick, loginClick } = this.props
    return (
      <div
        id="header"
      >
        <h1>My blog</h1>
        <div className="buttons">
          { isLogin? (
              <button
                id="post"
                onClick={ postClick }
                className={ isLogin? 'is-login' : 'not-login' }
              >
                Post a new essay
              </button>
            ) : ''
          }
          <button
            id="login"
            onClick={ loginClick }
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
  isLogin: PropTypes.bool,
  postClick: PropTypes.func,
  loginClick: PropTypes.func,
}

export default Header
