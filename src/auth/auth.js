export const isAuthenticated = () => {
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
};
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