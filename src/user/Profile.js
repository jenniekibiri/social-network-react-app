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
    console.log( typeof isAuthenticated().token)
    fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
      Method: 'GET',
    headers:  {
      Accept: 'application/json',
      "Content-Type": "application/json",
     Authorization: `Bearer  ${isAuthenticated().token}`
      
      }
    }).then(response => {
      return response.json()
    }
    )
      .then(data => {
        if (data.error) {
       console.log("Error")
        } else {
          console.log(data)
     }
      })
     
  }
  render() {
    return (
      <div className="container">
        <h2 className="mt-5 mb-5 ">Profile</h2>
        <h3 className="mt-3 "> Hello {isAuthenticated().user.name}</h3>
        <h3 className="mt-3 ">{isAuthenticated().user.email} </h3>
      </div>
    );
  }
}

export default Profile;
