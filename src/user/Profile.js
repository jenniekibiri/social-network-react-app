import React, { Component } from "react";

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      redirectToSignin:false,
    }
  }
  componentDidMount() {
    console.log("user id from route params",this.props.match.params.userId
    )
    
  }
  render() {
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Profile</h2>
      </div>
    );
  }
}

export default Profile;
