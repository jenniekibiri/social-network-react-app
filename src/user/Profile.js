import React, { Component } from "react";
import { isAuthenticated } from "../auth/auth";
import { Redirect, Link } from "react-router-dom";
import defaultImage from "../images/user.png";
import DeleteUser from "../user/DeleteUser"
import DefaultPost from "../images/flat.jpg";
import PostsBy from "../posts/PostBy";
import { postsBy } from "../posts/apiPosts";

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      post:[],
      redirectToSignin: false,
    };
  }
  componentDidMount() {
    const userId = this.props.match.params.userId;
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



    
    const tokenJwt = `Bearer ${isAuthenticated().token}`;
    fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
      Method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: tokenJwt,
      },
    })
      .then((response) => {

        return response.json();
      })
      .then((data) => {
        if (data.error) {
          this.setState({ redirectToSignin: true });
        } else {
          this.setState({ user: data });
        }
      });
  }
  render() {
    const redirectToSignin = this.state.redirectToSignin;
    if (redirectToSignin) return <Redirect to="/signin" />;
    const { user,post } = this.state;
    return (
      <div className="container">
   
        <div className="row">
          <div className="col-md-6  mt-5 lead">
         
            <img
              src={defaultImage}
              style={{
                width: "100%",
                height: "20vw",
                objectFit: "cover",
              }}
              alt={user.name}
            ></img>
          </div>

          <div className="col-md-6  lead">
            {" "}
            <div>
              <h2 className="mt-5 mb-5 ">Profile</h2>
              <p className="mt-3">Hello {user.name}</p>
              <p className="mt-3 ">Email: {user.email} </p>
              <p className="mt-3 ">
                {`joined ${new Date(this.state.user.created).toDateString()}`}{" "}
              </p>
            </div>
            {isAuthenticated().user &&
              isAuthenticated().user._id === this.state.user._id && (
                <div className="mt-5">
                  <Link className="btn btn-raised btn-success  btn-sm"
                    to={`/user/edit/${this.state.user._id}`}
                  >
                  Edit Profile
                  </Link>
           
             <DeleteUser userId={user._id} /> 
                </div>
              )}
          </div>
        
        </div>
        <div className="row">

          {post.length == 0 ? (<div className="mt-5">The User has no posts</div>) : (<div className="mt-5">
            {
              post.map(post => {
                const base64String = btoa(
                  String.fromCharCode(...new Uint8Array(post.photo.data.data))
                );
                return (
                  <div className="bg-white shadow-sm px-2 py-2 w-full">
                      <div className="d-flex flex-row bd-highlight mb-3">
                   
                    <div className="d-flex flex-column bd-highlight">
                      
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
                    <hr></hr>
                    </div>
                )
              })
          }
          </div>)
            
}
        </div>
      </div>
    );
  }
}

export default Profile;
