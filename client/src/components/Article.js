import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Article.css'

class Article extends Component {
  render() {
    const { article } = this.props
    return (
      <div
        id="article"
      >
        <h2>
          {article.title}
        </h2>
        <div className="author">
          Written by: {article.author}
        </div>
        <div className="img">
          <img
            src={article.img}
            alt={`cover img of ${article.title}`}
          />
        </div>
        <div className="art">
          {article.content.map((con, id) =>
            <p
              key={id}
            >
              {con}
            </p>
          )}
        </div>
      </div>
    )
  }
}

Article.propTypes = {
  article: PropTypes.array,
}

export default Article
