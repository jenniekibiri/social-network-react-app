import React, { Component } from "react";
import { allPosts } from "./apiPosts";
import { Link } from "react-router-dom";
export class posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    allPosts()
      .then((response) => {
        return response.json();
      })
        .then((data) => {
    
        this.setState({
          posts: data,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  }
  showPosts = (posts) => (
    <div className="row ">
      {posts.map((post, i) => (
        <div
          className="card col-md-3 m-4 text-center"
          key={i}
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
           
            <p className="card-text">{post.body}</p>
            <Link
              to={`/post/${post._id}`}
              href="#"
              className="btn btn-raised btn-info btn-sm"
            >
              Read More
            </Link>
              </div>
        </div>
      ))}
    </div>
  );
  render() {
    const { posts } = this.state;
    return (
      <div className="container">
               {/* if you want to use the curly braces use user return else use bracets  */}

        {this.showPosts(posts)}
      </div>
    );
  }
}

export default posts;
