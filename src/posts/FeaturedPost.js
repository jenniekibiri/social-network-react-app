import React, { Component, Fragment } from "react";
import { allPosts } from "./apiPosts";
import { Link } from "react-router-dom";
import DefaultPost from "../images/flat.jpg";

import UserImage from "../images/user.png";
export class FeaturedPosts extends Component {
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
  showPosts = (posts) => {
    return (
      <Fragment>
        {posts.map((post, i) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(post.photo.data.data))
          );
          const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
          const posterName = post.postedBy ? post.postedBy.name : " Unknown";
          return (
            <div className="col-lg-4" style={{
             marginBottom: "20px",
            }}>
              <div className="post-box">
                <div className="post-img">
                  <img
                    onError={(i) => (i.target.src = `${DefaultPost}`)}
                    src={`data:image/png;base64,${base64String}`}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <span className="post-date">
                  {new Date(post.created).toDateString()}
                </span>
                <h3 className="post-title">{post.title}</h3>
                <Link
                  to={`/post/${post._id}`}
                  href="#"
                  className="readmore stretched-link mt-auto"
                >
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  };
  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        {/* if you want to use the curly braces use user return else use bracets  */}

        {this.showPosts(posts)}
      </Fragment>
    );
  }
}

export default FeaturedPosts;
