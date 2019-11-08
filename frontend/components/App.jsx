import React from 'react';

import Modal from './modal/modal';
import NavigationContainer from './navigation_bar/navigation_container';
import HomepageContainer from './home/homepage_container';
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";
import { Route, Switch } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';


const App = () => (
  <div>
    <Modal/>
    <header>
      <NavigationContainer/>
    </header>
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
    </Switch>
  </div>
);

export default App;