import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Article.css'

class Article extends Component {
  render() {
    const { article } = this.props
    const content_list = article.article_content.split(/\r?\n/)
    return (
      <div
        id="article"
      >
        <h2>
          {article.article_title}
        </h2>
        <div className="author">
          written by: {article.article_author}
        </div>
        <div className="img">
          <img
            src={article.article_img}
            alt={`cover img of ${article.article_title}`}
          />
        </div>
        <div className="art">
          {content_list.map((con, id) =>
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
  article: PropTypes.object,
}

export default Article
