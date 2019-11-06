import React from 'react';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import HomepageContainer from './home/homepage_container';
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";
import { Route } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <Modal/>
    <header>
      <h1>boneappletéa</h1>
      <GreetingContainer />
    </header>
    <Route exact path="/" component={HomepageContainer} />
  </div>
);

export default App;