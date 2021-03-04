import React, { Component } from "react";
import { allPosts } from "./apiPosts";
import { Link } from "react-router-dom";
import DefaultPost from "../images/flat.jpg";
import "../css/style.css";

import UserImage from "../images/user.png";
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
  showPosts = (posts) => {
    return (
      <div className="parent">
        {posts.map((post, i) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(post.photo.data.data))
          );
          const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
          const posterName = post.postedBy ? post.postedBy.name : " Unknown";
          return (
            <div>
              <div className="row">
                <div className="bg-white px-2 py-2 w-full">
                  <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                      <img
                        src={UserImage}
                        className="rounded-circle img-fluid"
                        alt="Cinque Terre"
                      />
                    </div>
                    <div className="d-flex flex-column bd-highlight">
                      <h5 className=" text-dark">{posterName}</h5>
                      <p className="">
                        {new Date(post.created).toDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="row bd-highlight  ">
                    <div className="col-md-6 bd-highlight ">
                      <h4 className="mb-4 text-dark">{post.title}</h4>
                      <p className="card-text">
                        {post.body.substring(0, 100)} ...{" "}
                        <Link
                          to={`/post/${post._id}`}
                          href="#"
                          className="btn btn-raised btn-secondary btn-sm"
                        >
                          Read More
                        </Link>
                      </p>
                    </div>

                    <div className="col-md-6 d-flex  ">
                      <img
                        className="img-fluid"
                        onError={(i) => (i.target.src = `${DefaultPost}`)}
                        src={`data:image/png;base64,${base64String}`}
                        style={{ height: "250px", width: "85%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <hr></hr>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
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
