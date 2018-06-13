import React, { Component } from 'react'

import './App.css'

import Header from './components/Header.js'
import List from './components/List.js'
import Article from './components/Article.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [
        {
          title: 'art #1',
          author: 'auth #1',
          img: 'http://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png',
        },
        {
          title: 'art #2',
          author: 'auth #2',
          img: 'http://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png',
        },
        {
          title: 'art #3',
          author: 'auth #3',
          img: 'http://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png',
        },
        {
          title: 'art #4',
          author: 'auth #4',
          img: 'http://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png',
        },
      ],
      article: {
        title: 'art #0',
        author: 'auth #0',
        img: 'http://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png',
        content: [
          'aaaaaaaa',
          'bbbbbbbb',
          'cccccccc',
          'dddddddd',
          'eeeeeeee',
          'ffffffff',
          'gggggggg',
        ],
      },
    }
  }

  render() {
    return (
      <div>
        <Header />
        <List
          list={this.state.list}
        />
        <Article
          article={this.state.article}
        />
      </div>
    )
  }
}

export default App
