import React, { Component } from 'react'

import './App.css'

import Header from './components/Header.js'
import List from './components/List.js'
import Article from './components/Article.js'
import Login from './components/Login.js'
import PostEssay from './components/PostEssay.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      article: {
        id: 0,
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
      wantPost: false,
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

  clickListArt (e) {
    const id = parseInt(e.target.dataset.id, 10)
    this.getArticle(id)
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
    const newLoginInfo = {
      username: username,
      password: password,
    }

    if (res) {
      this.setState({
        isLogin: !this.state.isLogin,
        loginInfo: newLoginInfo,
      })
    }
  }

  postClick (e) {
    this.setState({
      wantPost: true
    })
  }

  unPostClick (e) {
    if (e.target === document.getElementById('post-essay')) {
      this.setState({
        wantPost: false,
      })
    }
  }

  async postEssay (e) {
    e.preventDefault()

    const data = new FormData(e.target);
    let title = data.get('title')
    let author = data.get('author')
    let img = data.get('img')
    let content = data.get('content')

    // submit
    let res = await fetch('/post-essay', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.loginInfo.username,
        password: this.state.loginInfo.password,
        title: title,
        author: author,
        img: img,
        content: content,
      })
    })
    res = await res.json()

    // login
    if (res) {
      // TODO
      console.log('Success !')
    } else {
      console.log('Fail QQ')
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
          postClick={this.postClick.bind(this)}
          loginClick={this.loginClick.bind(this)}
        />
        <List
          list={this.state.list}
          clickListArt={this.clickListArt.bind(this)}
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
        <PostEssay
          wantPost={this.state.wantPost}
          unPostClick={this.unPostClick.bind(this)}
          postEssay={this.postEssay.bind(this)}
        />
      </div>
    )
  }
}

export default App
