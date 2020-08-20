export const isAuthenticated = () => {
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
export const authenticate = (jwt, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    next();
  }
};
//next is the onclick link
export const signout = (next) => {
  if (window !== "undefined") localStorage.removeItem("jwt");
  next();

  return fetch(`${process.env.REACT_APP_API_URL}/signout`, {
    method: "POST",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
//social login

export const socialLogin = (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/sociallogin/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // credentials: "include", // works only in the same origin
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
