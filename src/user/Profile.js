import React, { Component } from "react";
import { isAuthenticated } from "../auth/auth";
import { Redirect, Link } from "react-router-dom";
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
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {" "}
            <h2 className="mt-5 mb-5 ">Profile</h2>
            <p className="mt-3 "> Hello {isAuthenticated().user.name}</p>
            <p className="mt-3 ">{isAuthenticated().user.email} </p>
            <p className="mt-3 ">
              {`joined ${new Date(this.state.user.created).toDateString()}`}{" "}
            </p>
          </div>
          <div className="col-md-6 mt-5">
            {isAuthenticated().user && isAuthenticated().user._id === this.state.user._id && (
              <div className="mt-5">
                <Link className="btn btn-raised btn-success mr-5" to={`/user/edit/${this.state.user._id}`}
                >Edit Profile
                  </Link>
                  <button className="btn btn-raised btn-danger">Delete Profile </button>
                </div>
)}

          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
