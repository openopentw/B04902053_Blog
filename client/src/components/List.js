import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './List.css'

class List extends Component {
  render() {
    const { list } = this.props
    return (
      <div
        id="list"
      >
        <div
          className="ul"
        >
          {list.map((li, id) =>
            <button
              key={id}
            >
              <img
                src={li.img}
                alt={`cover of ${li.title}`}
              />
              <div className="desc">
                <div className="title">
                  {li.title}
                </div>
                <div className="author">
                  {li.author}
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
}

export default List
