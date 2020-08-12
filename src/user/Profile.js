import React, { Component } from "react";
import { isAuthenticated } from "../auth/auth";
import { Redirect, Link } from "react-router-dom";
import defaultImage from "../images/user.png";
export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      redirectToSignin: false,
    };
  }
  componentDidMount() {
    const userId = this.props.match.params.userId;
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
        console.log(response);
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
    const { user } = this.state;
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
                  <Link
                    className="btn btn-raised btn-success mr-5 mb-4 btn-sm"
                    to={`/user/edit/${this.state.user._id}`}
                  >
                    Edit Profile
                  </Link>
                  <Link
                    className="btn btn-raised btn-danger mr-5 mb-4 btn-sm" 
                    to={`/user/delete/${this.state.user._id}`}
                  >
                    Delete Profile
                  </Link>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
