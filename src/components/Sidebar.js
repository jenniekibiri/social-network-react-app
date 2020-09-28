import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/style.css'
export class Sidebar extends Component {
    render() {
        return (
            
 
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fa fa-puzzle-piece"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Socioh Admin</div>
                    </Link>


                    <hr className="sidebar-divider my-0"></hr>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/admin">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></Link>
                    </li>
                    <hr className="sidebar-divider" />
      
                    <div className="sidebar-heading">
                        Interface
  </div>
      
<li className="nav-item">
    <Link to={"/roles"} className="text-white user nav-link ">
     <i className="fas fa-fw fa-lock"></i>
     <span>Roles</span>
                </Link>
 </li>

    <li className="nav-item">
   <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUsers" aria-expanded="true"
     aria-controls="collapseUsers">
     <i className="fas fa-fw fa-users"></i>
     <span>Users</span>
   </Link>
   
   <div id="collapseUsers" className="collapse" aria-labelledby="headingUsers" data-parent="#accordionSidebar">
                    <Link to={"/users"} className="text-white collapse-item user" >
                      <span className="text-white ml-3">users</span>
                </Link>
               
     
   </div>
 </li>

                    <hr className="sidebar-divider" />

                    <div className="sidebar-heading">
                        Addons
  </div>
<li className="nav-item">
   <Link className="nav-link collapsed"  data-toggle="collapse" data-target="#collapsePosts" aria-expanded="true"
     aria-controls="collapsePosts">
     <i className="fas fa-fw fa-file"></i>
     <span>Posts</span>
   </Link>
   <div id="collapsePosts" className="collapse" aria-labelledby="headingPosts" data-parent="#accordionSidebar">
       <Link to={"/posts"} className="text-white collapse-item user" >
                      <span className="text-white ml-3">posts</span>
                </Link>
   </div>
 </li>

      <li className="nav-item">
                        
                        <Link className="nav-link collapsed"  data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </Link>

                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div>  <Link to={"/signin"} className="text-white collapse-item user" >
                      <span className="text-white ml-3">signin</span>
                </Link></div>
              <div>   <Link to={"/signup"} className="text-white collapse-item user" >
                      <span className="text-white ml-3">signup</span>
                </Link></div>
                <div>
                   <Link to={"/createPosts"} className="text-white collapse-item user" >
                      <span className="text-white ml-3">create posts</span>
                </Link>
                </div>
                        </div>
                    </li>



                    <li className="nav-item">
                        <Link className="nav-link" to="charts">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Charts</span></Link>
                    </li>

 
 
                    <li className="nav-item">
                        <Link className="nav-link" to="tables">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Tables</span></Link>
                    </li>
                  <li className="nav-item">
                        <Link className="nav-link" to="settings">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Settings</span></Link>
                    </li>
                    <hr className="sidebar-divider d-none d-md-block" />


                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
                </ul>
           
        )
    }
}

export default Sidebar
