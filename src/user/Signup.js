import React, { Component } from 'react'

 class Signup extends Component {
     constructor(){
         super();
     this.state={
             name:"",
             email:"",
             password:"",
             error:""

         }
     }
     //with the syntax as an array we dont an onclick func for each input
     //takes in a parameter and an event 
     //set the value to have it as data to send to backend


     handleChange =(email)=>(event)=>{
         this.setState({[email]:event.target.value})
     }
     clickSubmit = event=>{
         event.preventDefault();
         const {name,email,password}=this.state;
const user ={
    email,
    name,
    password
}
fetch('http://localhost:8080/signup',{
    method:"POST",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
}).then(response=>{
    return response.json(user)
}).catch(error=>{
    console.log(error)
})

     }
    render() {
        const {name,email,password} = this.state
        return (
            <div className="container">
                <h2 className="mb-5 mt-5">Signup</h2>
           <form >
               <div className="form-group">
                             <label className="text-muted">Name</label>
               <input type="text" className="form-control" onChange={this.handleChange("name")} value={name}></input>
               </div>
               <div className="form-group">
                             <label className="text-muted">Email</label>
               <input type="email" className="form-control" onChange={this.handleChange("email")}  value={email}></input>
               </div>
               <div className="form-group">
                             <label className="text-muted">Password</label>
               <input type="password" className="form-control" onChange={this.handleChange("password")}  value={password}></input>
               </div>
               <button type="button" onClick={this.clickSubmit} className="btn btn-raised btn-primary">Submit</button>
               </form>     
            </div>
        )
    }
}

export default Signup
