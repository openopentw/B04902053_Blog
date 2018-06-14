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
              key={li.id}
              data-id={li.id}
              onClick={clickListArt}
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
  clickListArt: PropTypes.func,
}

export default List
