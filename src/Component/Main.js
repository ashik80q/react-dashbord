import React from 'react';
import { Switch, Route, } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Contact from './Pages/Contact';
import Coustomers from './Pages/Coustomers'

const Main = () => {
    return (
    

       <Switch>
           <Route exact path='/' component={Homepage} />
           <Route exact path='/contact' component={Contact} />
           <Route exact path='/customers' component={Coustomers} />
       </Switch>
   
       
    );
};

export default Main;