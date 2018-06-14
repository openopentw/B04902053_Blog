import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Login.css'

class Login extends Component {
  render() {
    const { wantLogin, isLogin, unLoginClick, postUserPass } = this.props
    return (wantLogin && !isLogin)? (
      <div
        id="login-page"
        onClick={unLoginClick}
      >
        <div className="login-panel">
          <h2>LOGIN</h2>
          <form
            onSubmit={ postUserPass }
          >
            <label>username</label>
            <input type="text" name="username" />
            <label>password</label>
            <input type="password" name="password" />
            <input type="submit" />
          </form>
        </div>
      </div>) : ''
  }
}

Login.propTypes = {
  wantLogin: PropTypes.bool,
  isLogin: PropTypes.bool,
  unLoginClick: PropTypes.func,
  postUserPass: PropTypes.func,
}

export default Login
