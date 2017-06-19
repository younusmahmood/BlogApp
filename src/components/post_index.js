import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {

  componentDidMount() {
      this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className='list-group-item' key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render(){
    return (
      <div>
        <div className="float-right">
          <Link to='/posts/new' className='btn btn-outline-success fa fa-plus' aria-hidden='true'>
          </Link>
        </div>
        <h2>Blog Posts</h2>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
