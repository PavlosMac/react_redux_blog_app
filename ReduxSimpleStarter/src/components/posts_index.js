import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

//this method is only called once, when react renders this component,
  componentWillMount(){
//this calls the action creator
    this.props.fetchPosts();

  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link path={'posts/' + post.id} >
          <span className="pull-xs-right"> {post.categories}</span>
          <strong>{post.title}</strong>
        </Link>
        </li>
      );
    });
  }

  render(){

    return(
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
          Add a post
        </Link>
        </div>
        <h3> Posts </h3>
          <ul className='list-group'>
            {this.renderPosts()}
          </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  console.log(state.posts.all )
  return { posts: state.posts.all }
}

export default connect (mapStateToProps, { fetchPosts })(PostsIndex);
