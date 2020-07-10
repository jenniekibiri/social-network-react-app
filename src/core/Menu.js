import React, { Fragment } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
//next is the onclick link
export const signout = (next) => {
  if (window !== "undefined") localStorage.removeItem("jwt");
  next();
  return fetch("https://letsnetwork.herokuapp.com/signout", {
    method: "POST",
  })
    .then((response) => {
      console.log("signout", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const isAuthenticated = () => {
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
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
          <div>
            <li className="nav-item">
              <a
                className="nav-link "
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => signout(() => history.push("/"))}
              >
                Sign out
              </a>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}

export default withRouter(Menu);
