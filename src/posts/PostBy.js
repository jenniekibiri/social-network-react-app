import React, { Component } from "react";
import { postsBy } from "./apiPosts";
import DefaultPost from "../images/e56b573d0cd16d7b03083d8fbc582ef219c274a7.jpeg";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth/auth";
import Posts from "../components/Posts";

class PostsBy extends Component {
  state = {
    post: "",
    redirectToHome: false,
    redirectToSignin: false,
  };

  componentDidMount = () => {
      const postId = this.props.match.params.postId;
      const userId = isAuthenticated().user._id;
      console.log(userId)
      postsBy(userId).then((data) => {
        console.log(data)
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({
          post: data,
        });
      }
    });
  };

  
  render() {
 

    return (
        <div>
            <h1>wertyuio</h1>
      </div>
     
    );
  }
}

export default PostsBy;
