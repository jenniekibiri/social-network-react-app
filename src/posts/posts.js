import React, { Component } from "react";
import { allPosts } from "./apiPosts";
import { Link } from "react-router-dom";
import DefaultPost from "../images/flat.jpg"
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
                    const posterId = post.postedBy
                        
        
                        ? `/user/${post.postedBy._id}`
                        : "";
                    const posterName = post.postedBy
                        ? post.postedBy.name
                        : " Unknown";
                    return (
      
                     
                        <div
                            className="card col-md-4 m-2"
                            key={i}
                        >
                             <img
                                    src={`${
                                        process.env.REACT_APP_API_URL
                                    }/post/photo/${post._id}`}
                                    alt={post.title}
                                    onError={i =>
                                        (i.target.src = `${DefaultPost}`)
                                    }
                                    className="img-thunbnail mb-3"
                                    style={{ height: "200px", width: "100%" }}
                                />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
           
                                <p className="card-text">{post.body.substring(0,100)}</p>
                                <p className="font-italic mark">
                                    Posted by{" "}
                                    <Link to={`${posterId}`}>
                                        {posterName}{" "}
                                    </Link>
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
                    )
                } )}
        </div>
       ) };
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