import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { socialLogin, authenticate } from "../auth/auth";
import { Redirect } from "react-router-dom";
class SocialLogin extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
    };
  }

  responseGoogle = (response) => {
    const { googleId, name, email, imageUrl } = response.profileObj;
    const user = {
      password: googleId,
      name: name,
      email: email,
      imageUrl: imageUrl,
    };

    socialLogin(user).then((data) => {
      if (data.error) {
        console.log("Error Login. Please try again..");
      } else {
        authenticate(data, () => {
          this.setState({ redirectToReferrer: true });
        });
      }
    });
  };

  render() {
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to="/" />;
    }
    return (
      <GoogleLogin
        clientId="51203616981-ldm8946dv68h2ffv65d7v29qshba2pjm.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      />
    );
  }
}

export default SocialLogin;
