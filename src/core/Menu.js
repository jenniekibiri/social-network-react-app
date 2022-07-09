import React, { Fragment } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/auth";
import "../css/style.css";

function Menu() {
  const history = useHistory();
  return (
    <div>
      <header id="header" className="header fixed-top bg-white">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span>Socioh </span>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              {!isAuthenticated() && (
                <Fragment>
                  <li>
                    <Link className="nav-link " to="/signin">
                      Signin
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link getstarted" to="/signup">
                      Signup
                    </Link>
                  </li>
                </Fragment>
              )}

              {isAuthenticated() && (
                <Fragment>
                  <li>
                    <Link to={`/newpost`} className="nav-link text-darl">
                      Create Post
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Users"
                      className="nav-link"
                      style={{ color: "#000" }}
                    >
                      Users
                    </Link>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Profile</span>{" "}
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li>
                        <Link
                          to={`/user/${isAuthenticated().user._id}`}
                          className="nav-link"
                          style={{ color: "#000" }}
                        >
                          {`${isAuthenticated().user.name}'s Profile`}
                        </Link>
                      </li>
                      <li>
                        <a
                          className="nav-link  "
                          style={{ color: "", cursor: "pointer" }}
                          onClick={() => signout(() => history.push("/"))}
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </li>
                </Fragment>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default withRouter(Menu);
{
  /* <li className="nav-item">
          <Link className="nav-link  text-white" to="/admin">
            Admin
          </Link>
        </li>   */
}
