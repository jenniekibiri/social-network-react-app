import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import Users from '../components/Users'
import Posts from '../components/Posts'
import Roles from '../components/Roles'



export class Admin extends Component {
  render() {
    return ( 
      <BrowserRouter>
      <div>
      <div id="page-top">  
        <div id="wrapper">
       <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">
             <Navbar />

                  <Switch>
                <Route exact path="/admin" component={MainContent} />
              
                <Route exact path="/users" component={Users} />
                  <Route exact path="/posts" component={Posts} />
                  <Route exact path="/roles" component={Roles} />
              </Switch>
            
             
              
            </div>
            </div>
  
      </div>
      </div>
      
              </div>
     </BrowserRouter>
    )
  }
}

export default Admin
