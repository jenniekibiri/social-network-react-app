import React, { Component, Fragment } from "react";
import { allPosts } from "./apiPosts";
import { Link } from "react-router-dom";
import DefaultPost from "../images/flat.jpg";


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
      <Fragment>
        {posts.map((post, i) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(post.photo.data.data))
          );
          const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
          const posterName = post.postedBy ? post.postedBy.name : " Unknown";
          return (
           
              <div
                className="col-lg-8 entries"
                style={{
                
                  margin: "0 auto",
                }}
              >
                <article className="entry">
                  <div className="entry-img">
                    <img  onError={(i) => (i.target.src = `${DefaultPost}`)}
                        src={`data:image/png;base64,${base64String}`} alt="" className="img-fluid"
                         />
                  </div>

                  <h2 className="entry-title">
                    <a href="#">{post.title}</a>
                  </h2>
       
                  <div className="entry-meta" >
                    <ul>
                      <li className="d-flex flex-row align-items-center">
                        <i className="bi bi-person"></i>{" "}
                        <a href="#">{posterName}</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>{" "}
                        <a href="#">
                          <time datetime="2020-01-01">
                            {new Date(post.created).toDateString()}
                          </time>
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-chat-dots"></i>{" "}
                        <a href="#">0 Comments</a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>{post.body}</p>
                    <div className="read-more">
                      <Link to={`/post/${post._id}`} href="#">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              

        
              <div></div>
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

export default posts;
