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
      <div className="row">
        {posts.map((post, i) => {
          const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
          const posterName = post.postedBy ? post.postedBy.name : " Unknown";
          return (
            <div className="card col-md-3 m-1 center" key={i}>
              <img
                src={`${process.env.REACT_APP_API_URL}/post/photo/${post._id}`}
                alt={post.title}
                onError={(i) => (i.target.src = `${DefaultPost}`)}
                className="img-thunbnail mb-3"
                style={{ height: "150px", width: "100%" }}
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>

                <p className="card-text">{post.body.substring(0, 100)}</p>
                <p className="font-italic mark">
                  Posted by <Link to={`${posterId}`}>{posterName} </Link>
                  on {new Date(post.created).toDateString()}
                </p>
                <Link
                  to={`/post/${post._id}`}
                  href="#"
                  className="btn btn-raised btn-info btn-sm"
                >
                  Read More
                </Link>
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

        {/* {this.showPosts(posts)} */}
        <div className="row">
          <div className="bg-white px-4 py-5 w-full">
            <div className="d-flex flex-row bd-highlight mb-3">
              <div className="p-2 bd-highlight">image</div>
              <div className="d-flex flex-column bd-highlight">
                <div className=" bd-highlight">Jane Doe</div>
                <div className=" bd-highlight">Date Create</div>
              </div>
            </div>
            
            <div className="d-flex flex-row bd-highlight mb-1 row ">
              <div className=" bd-highlight  col-md-6  ">
                <div className="row">
                <h4 className="mb-4 col-sm-12 ">
                  AWS Hackathon - 1Pitch / Pitch your startup to investors
                </h4>
               </div>
                <div className="row">
                <p className="col-sm-12">
                  1Pitch - The 1-Minute pitch for startups. My final submission
                  after hard work. This was a lot of learning and I would like
                  to present you my submissio…{" "}
                  <span className="btn btn-primary"> Read More</span>{" "}
                </p>
               </div>
              </div>

              <div className="row">
                <img 
                  className="col-md-6"
                  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1614557269568/z6niYdq1B.png?w=600&amp;fit=crop&amp;crop=entropy&amp;auto=compress"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default posts;
