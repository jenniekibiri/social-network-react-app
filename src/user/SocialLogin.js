
import React, { Component } from "react";
import GoogleLogin from "react-google-login";

class SocialLogin extends Component {
    responseGoogle = response => {
        console.log(response);
    };

    render() {
        return (
            <div className="container ">
                <GoogleLogin
                    clientId="51203616981-2s6o9pvrjsfihbsttj1b9qkhq51b9tah.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
            </div>
        );
    }
}

export default SocialLogin;
