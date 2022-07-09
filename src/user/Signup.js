import React, { Component } from "react";
import { Link } from "react-router-dom";
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
      open: false,
    };
  }
  //with the syntax as an array we dont an onclick func for each input
  //takes in a parameter and an event
  //set the value to have it as data to send to backend

  handleChange = (email) => (event) => {
    this.setState({ error: "" });
    this.setState({ [email]: event.target.value });
  };
  clickSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const user = {
      email,
      name,
      password,
    };
    fetch(`${process.env.REACT_APP_API_URL}/signup`, {
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
        if (data.error) {
          this.setState({ error: data.error });
        } else {
          this.setState({
            error: "",
            name: "",
            email: "",
            password: "",
            open: true,
          });
        }
      });
  };
  render() {
    const { name, email, password, error, open } = this.state;

    return (
      <div className="main">
        <section className="signup">
          <div className="formcontainer">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
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
                  <div
                    className="alert alert-info"
                    style={{ display: open ? "" : "none" }}
                  >
                    New account has been successfully created.{" "}
                    <Link to="/signin">Signin</Link>!
                  </div>
                  <div className="form-group">
                  <label for="name">
                      <i className="zmdi zmdi-name"></i>
                    </label>
                    <input
                      type="text"
                      
                      onChange={this.handleChange("name")}
                      value={name}
                      name="name"
                      placeholder="Name"
                    ></input>
                  </div>
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
                    <label for="pass">
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
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src="assets/img/signup-image.jpg" alt="sign up image" />
                </figure>
                <a href="/signin" className="signup-image-link">
                  Already a member? Sign in here
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;
