import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './List.css'

class List extends Component {
  render() {
    const { list, clickListArt } = this.props
    return (
      <div
        id="list"
      >
        <div
          className="ul"
        >
          {list.map(li =>
            <button
              key={li.article_id}
              data-id={li.article_id}
              onClick={clickListArt}
            >
              <div
                className="img"
                style={{
                  backgroundImage: `url("${li.article_img}")`,
                }}
              >
              </div>
              <div className="desc">
                <div className="title">
                  {li.article_title}
                </div>
                <div className="author">
                  {li.article_author}
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    )
  }
}

List.propTypes = {
  list: PropTypes.array,
  clickListArt: PropTypes.func,
}

export default List
