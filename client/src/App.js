import React, { Component } from 'react'

import './App.css'

import Header from './components/Header.js'
import List from './components/List.js'
import Article from './components/Article.js'
import Login from './components/Login.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      article: {
        title: '',
        author: '',
        img: '',
        content: [],
      },
      wantLogin: false,
      isLogin: false,
      loginInfo: { // TODO
        username: '',
        password: '',
      },
    }
  }

  async getList () {
    let res = await fetch('list')
    res = await res.json()
    this.setState({
      list: res
    })
  }

  async getArticle (artId) {
    let res = await fetch(`article/${artId}`)
    res = await res.json()
    this.setState({
      article: res
    })
  }

  loginClick () {
    if (this.state.isLogin) {
      this.setState({
        wantLogin: false,
        isLogin: false,
      })
    } else {
      this.setState({
        wantLogin: true,
      })
    }
  }

  unLoginClick (e) {
    if (e.target === document.getElementById('login-page')) {
      this.setState({
        wantLogin: false,
      })
    }
  }

  async postUserPass (e) {
    e.preventDefault()

    const data = new FormData(e.target);
    let username = data.get('username')
    let password = data.get('password')

    // submit
    let res = await fetch('/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
       username: username,
       password: password,
      })
    })
    res = await res.json()

    // login
    if (res) {
	  this.setState({
		isLogin: !this.state.isLogin,
	  })
    }
  }

  componentDidMount () {
    this.getList()
    this.getArticle(0)
  }

  render () {
    return (
      <div
        id="app-root"
      >
        <Header
          isLogin={this.state.isLogin}
          loginClick={this.loginClick.bind(this)}
        />
        <List
          list={this.state.list}
        />
        <Article
          article={this.state.article}
        />
        <Login
          wantLogin={this.state.wantLogin}
          isLogin={this.state.isLogin}
          unLoginClick={this.unLoginClick.bind(this)}
          postUserPass={this.postUserPass.bind(this)}
        />
      </div>
    )
  }
}

export default App
