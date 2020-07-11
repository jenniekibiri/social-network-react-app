import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
    fetch( `${process.env.REACT_APP_API_URL}/signin`, {
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
      <div className="container">
        <h2 className="mb-5 mt-5">Signup</h2>
        <form>
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>

          {loading ? (
            <div className="Jumbotron text-center">
              <h2>Loading ...</h2>
            </div>
          ) : (
            ""
          )}
          <div className="form-group">
            <label className="text-muted">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={this.handleChange("email")}
              value={email}
            ></input>
          </div>
          <div className="form-group">
            <label className="text-muted">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={this.handleChange("password")}
              value={password}
            ></input>
          </div>
          <button
            type="button"
            onClick={this.clickSubmit}
            className="btn btn-raised btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Signin;
