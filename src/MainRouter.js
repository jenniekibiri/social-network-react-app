import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Profile from "./user/Profile";
import Menu from "./core/Menu";
import Users from "./user/Users";
import EditProfile from "./user/EditUser";
import SinglePost from "./posts/SinglePost"
import NewPost from "./posts/NewPost";
import Admin from "./Admin/Admin";
import PostsBy from "./posts/PostBy";
import { Footer } from "./core/Footer";
const MainRouter = () => (
  <div>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/user/:userId" component={Profile} />
      <Route exact path="/user/edit/:userId" component={EditProfile} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/post/:postId" component={SinglePost} />
     
      <Route exact path="/newpost" component={NewPost} />
      <Route exact path="/posts/by/:userId" component={PostsBy} />
      {/* <Route exact path="/admin" component={Admin} /> */}
    </Switch>



  </div>
);
export default MainRouter;
