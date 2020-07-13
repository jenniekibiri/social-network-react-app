import React, { Component } from "react";
import { isAuthenticated } from "../auth/auth";
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
const tokenJwt=`Bearer ${isAuthenticated().token}`
    fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
      Method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: tokenJwt,
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          console.log("Error");
        } else {
          this.setState({ user: data });
        }
      });
  }
  render() {
    return (
      <div className="container">
        <h2 className="mt-5 mb-5 ">Profile</h2>
        <p className="mt-3 "> Hello {isAuthenticated().user.name}</p>
        <p className="mt-3 ">{isAuthenticated().user.email} </p>
        <p className="mt-3 ">
          {`joined ${new Date(this.state.user.created).toDateString()}`}{" "}
        </p>
      </div>
    );
  }
}

export default Profile;
