import React, { Component } from "react";

export class Users extends Component {
    constructor() {
        super();
        this.state = {
    users:[]
}
    }
  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      Method: "GET",
    })
      .then((response) => {
        console.log(response);
      }).then(data => {
          
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <div></div>;
  }
}

export default Users;
