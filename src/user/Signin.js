import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SocialLogin from "./SocialLogin";
class Signin extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      error: "",
      redirectToHome: false,
      loading: false,
    };
  }
  //with the syntax as an array we dont an onclick func for each input
  //takes in a parameter and an event
  //set the value to have it as data to send to backend

  handleChange = (email) => (event) => {
    this.setState({ error: "" });
    this.setState({ [email]: event.target.value });
  };

  authenticate(jwt, next) {
    //wait for the window to load
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(jwt));
      next();
    }
  }

  clickSubmit = (event) => {
    this.setState({ loading: true });
    event.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };

    //get the route from backend
    fetch(`${process.env.REACT_APP_API_URL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json(user);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((data) => {
        if (data.message) {
          this.setState({ error: data.message, loading: false });
        } else {
          //authenticate the user and redirect  to home
          this.authenticate(data, () => {
            this.setState({ redirectToHome: true });
          });
        }
      });
  };
  render() {
    const { email, password, error, redirectToHome, loading } = this.state;
    if (redirectToHome) {
      return <Redirect to="/" />;
    }

    return (
      <div className="main">
        <section className="signup">
          <div className="formcontainer">
            <div className="signup-content">
              <div className="signup-image">
                <figure>
                  <img src="assets/img/signin-image.jpg" alt="sign up image" />
                </figure>
                <a href="/signup" className="signup-image-link">
                  Not a member? Sign up here
                </a>
              </div>
              <div className="signup-form">
                <h2 className="form-title">Sign in</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                  >
                    {error}
                  </div>

                  {loading ? (
                    <div className="Jumbotron text-center">
                      <h2 className="spinner">loading ...</h2>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="form-group">
                    <label for="email">
                      <i className="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      onChange={this.handleChange("email")}
                      value={email}
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      onChange={this.handleChange("password")}
                      value={password}
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      onClick={this.clickSubmit}
                      className="btn btn-primary btn-block btn-lg"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="social-login">
                  <span className="social-label">Or login with:</span>
                  <SocialLogin />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Signin;
