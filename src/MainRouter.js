import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
 const MainRouter =()=>(
     <Switch>
      <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup}/>

      </div>
     </Switch>
 ) 
 export default MainRouter;