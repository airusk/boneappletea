import React from 'react';

import Modal from './modal/modal';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import HomepageContainer from './home/homepage_container';
import RecipeShowContainer from './recipe/recipe_show_container';
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";
import { Route, Switch, Redirect } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';


const App = () => (
  <div>
    <Modal/>
    <header>
      <NavigationBarContainer/>
    </header>
    <Switch>
      {/* change /recipes/ to /recipes/ for show page */}
      <Route exact path="/recipes/"/> 
      <Route exact path="/recipes/:recipeId" component={RecipeShowContainer}/> 
      <Route exact path="/" component={HomepageContainer} />
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;