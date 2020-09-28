import React, { Component } from 'react'
import {allUsers} from './apis/postApi'
export class Users extends Component {
  constructor(){
    super();
    this.state={
      users:[]
    }
  }
  componentDidMount(){
  allUsers()
    .then(response=>{
    
        return response.json();
    }).then(data=>{
      this.setState({
        users:data
      })
    }).catch(err=>{
      console.log(err)
    })

  }
  showUsers(users){
    return(
      <div>
 <table className="table m-3  ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">name</th>
   <th scope="col">email</th>
      <th scope="col">created</th>
      <th scope="col">email verified</th>
       <th scope="col">Admin</th>
       <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
   { users.map((user,i)=>{
 
return(
     <tr key={i}>
       
       <td>{user.name}</td>
       <td>{user.email}</td>

      <td>{new Date(user.created).toDateString()}</td>
                 
       <td>true</td>
       <td>false</td>

       <td>  <button className="btn  " type="button" >
                  <i type="button" className="fas btn fa-trash fa-sm text-danger"></i>
                </button>   </td>
     </tr>
)

    })}
      </tbody>
      </table>
        
    
      </div>
    )
  }
  render() {

 const { users } = this.state;
    return (

     <div>
       {this.showUsers(users)}

     </div>
    )
  }
}

export default Users
