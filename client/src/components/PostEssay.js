import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './PostEssay.css'

class PostEssay extends Component {
  render() {
    const { wantPost, unPostClick, postEssay } = this.props
    return (wantPost? (
      <div
        id="post-essay"
        onClick={ unPostClick }
      >
        <div className="post-essay-panel">
          <h2>POST A NEW ESSAY</h2>
          <form
            onSubmit={ postEssay  }
          >
            <label>title</label>
            <input type="text" name="title" />
            <label>author</label>
            <input type="text" name="author" />
            <label>img address</label>
            <input type="text" name="img" placeholder="default img: ./IMG.png" />
            <label>content</label>
            <textarea name="content" cols="50" rows="8"></textarea>
            <button type="submit">
              POST!
            </button>
          </form>
        </div>
      </div>
    ) : '')
  }
}

PostEssay.propTypes = {
  wantPost: PropTypes.bool,
  unPostClick: PropTypes.func,
  postEssay: PropTypes.func,
}

export default PostEssay
