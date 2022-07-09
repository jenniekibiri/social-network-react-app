import React, { Component, Fragment } from "react";
import { singlePost } from "./apiPosts";
import DefaultPost from "../images/e56b573d0cd16d7b03083d8fbc582ef219c274a7.jpeg";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth/auth";

class SinglePost extends Component {
  state = {
    post: "",
    redirectToHome: false,
    redirectToSignin: false,
  };

  componentDidMount = () => {
    const postId = this.props.match.params.postId;
    singlePost(postId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({
          post: data,
        });
      }
    });
  };

  renderPost = (post) => {
    const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
    const posterName = post.postedBy ? post.postedBy.name : " Unknown";
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(post.photo.data.data))
    );

    return (
      <section id="blog" className="blog mt-5" >
        <div className="container" dataAos="fade-up">
          <div
            className="col-lg-8 entries"
            style={{
              margin: "0 auto",
            }}
          >
            <article className="entry entry-single">
              <div className="entry-img">
                <img
                 alt={post.title}
                 onError={(i) => (i.target.src = `${DefaultPost}`)}
                 src={`data:image/png;base64,${base64String}`}
                  className="img-fluid"
                />
              </div>

              <h2 className="entry-title">
                <a href="#">
                    {post.title}
                </a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person"></i>{" "}
                    <Link to={`${posterId}`}>{posterName} </Link>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock"></i>{" "}
                    <a href="#">
                      <time datetime="2020-01-01">{new Date(post.created).toDateString()}</time>
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-chat-dots"></i>{" "}
                    <a href="#">0 Comments</a>
                  </li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                    {post.body}
                </p>

                {/* <p>
                {post.body}
                </p>

                <blockquote>
                  <p>
                  {post.body}
                  </p>
                </blockquote>

                <p>
                {post.body}
                </p>

                <h3>Et quae iure vel ut odit alias.</h3>
                <p>
                {post.body}.
                </p> */}
                {/* <img
                  src="assets/img/blog/blog-inside-post.jpg"
                  className="img-fluid"
                  alt=""
                />

                <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                <p>
                {post.body}
                </p>
                <p>
                {post.body}
                </p> */}
              </div>
            </article>

            <div className="blog-comments">
              <h4 className="comments-count">0 Comments</h4>



              <div className="reply-form">
                <h4>Leave a Reply</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *{" "}
                </p>
                <form action="/">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Your Name*"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Your Email*"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <input
                        name="website"
                        type="text"
                        className="form-control"
                        placeholder="Your Website"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <textarea
                        name="comment"
                        className="form-control"
                        placeholder="Your Comment*"
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  render() {
    const { post, redirectToHome, redirectToSignin, comments } = this.state;

    if (redirectToHome) {
      return <Redirect to={`/`} />;
    } else if (redirectToSignin) {
      return <Redirect to={`/signin`} />;
    }

    return (
      <Fragment>
       

        {!post ? (
          <div className="jumbotron text-center">
            <h2>Loading...</h2>
          </div>
        ) : (
          this.renderPost(post)
        )}
      </Fragment>
    );
  }
}

export default SinglePost;
{
  /* 
            <div className="card-body">
                <img
                    className="img-thunbnail mb-3"
                    alt={post.title}
                        onError={(i) => (i.target.src = `${DefaultPost}`)}
                        src={`data:image/png;base64,${base64String}`}
                        style={{
                            height: '300px',
                            width: '100%',
                            objectFit: 'cover'
                        }}
                      />
              


                <p className="card-text">{post.body}</p>
                <br />
                <p className="font-italic mark">
                    Posted by <Link to={`${posterId}`}>{posterName} </Link>
                    on 
                </p>
                <div className="d-inline-block">
                    <Link to={`/`} className="btn btn-raised btn-primary btn-sm mr-5">
                        Back to posts
                    </Link>


                </div>
            </div> */
}
