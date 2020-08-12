import React, { Component } from "react";
import { list } from '../user/apiUser'
import {Link} from 'react-router-dom'
import Avatar from 'react-avatar'; 
import '../css/style.css'
 export class Users extends Component {
    constructor() {
        super();
        this.state = {
        users:[]
}
    }
  componentDidMount() {

    list().then((response) => {
  
        return response.json()
      }).then(data => {
        this.setState({
         users:data
       })
          
      })
      .catch((err) => {
        console.log(err);
      });
  }
   renderUser = users => (
    <div className="row ">
    {users.map((user,i) => (
            <div className="card col-md-3 m-4 text-center"  key={i}  style={{width: "18rem"}}>
        <div className="m-2">
        <Avatar  className="initials"  name={user.name} />
  </div>

     <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
          <Link to={`/user/${user._id}`} href="#" className="btn btn-raised btn-primary btn-sm">View Profile</Link>
     </div>
   </div>

    ))}
       </div>
   )
     

   render() {
     const{ users}= this.state
    return (
      <div className="container" >
        <h2 className="mb-4 mt-5 text-center">Users</h2>
{/* if you want to use the curly braces use user return else use bracets  */}
      
      {this.renderUser(users)}
        </div>
    
    )
  }
}

export default Users;
