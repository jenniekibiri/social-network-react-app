import React, { Fragment } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/auth";
import "../css/style.css";
function Menu() {
  const history = useHistory();
  return (
    <div>
      <ul className="nav nav-tabs shadow  rounded">
        <li className="nav-item">
          <Link className="nav-link  text-white" to="/">
            Home
          </Link>
        </li>
        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/signin">
                Signin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/signup">
                Signup
              </Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <li className="nav-item">
                <Link to={`/post/create`} className="nav-link text-white">
                  Create Post
                </Link>
              </li>
            </li>
            <li className="nav-item">
              <Link to="/Users" className="nav-link" style={{ color: "#fff" }}>
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/user/${isAuthenticated().user._id}`}
                className="nav-link"
                style={{ color: "#fff" }}
              >
                {`${isAuthenticated().user.name}'s Profile`}
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => signout(() => history.push("/"))}
              >
                Sign out
              </a>
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  );
}
export default withRouter(Menu);
