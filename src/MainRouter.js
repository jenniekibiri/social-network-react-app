import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'

 const MainRouter =()=>(
     <Switch>
      <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={Signin}/>

      </div>
     </Switch>
 ) 
 export default MainRouter;