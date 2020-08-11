import React, { Fragment } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/auth";

function Menu() {
  const history = useHistory();
  return (
    <div>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link className="nav-link " to="/">
            Home
          </Link>
        </li>
        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link className="nav-link " to="/signin">
                Signin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/signup">
                Signup
              </Link>
            </li>
          </Fragment>
        )}
    

        {isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <a
                className="nav-link "
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => signout(() => history.push("/"))}
              >
                Sign out
              </a>
            </li>
            <li className="nav-item">
              <Link
                to='/Users'
                className="nav-link"
                style={{ color: "#fff" }}
              >
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
           
          </Fragment>
        )}
      </ul>
    </div>
  );
}
export default withRouter(Menu);
