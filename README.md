# [<img src="https://github.com/airusk/boneappletea/blob/master/app/assets/images/src/logo2.png" align ="left" height="45">](http://boneappletea.herokuapp.com/#/)<br>
## [Live Demo!](http://boneappletea.herokuapp.com/#/)

Welcome to the boneappletea repo. boneappletea is a [bonappétit](https://www.bonappetit.com/) clone which allows users to browse, search, and review recipes.<br>

<img src="https://github.com/airusk/boneappletea/blob/master/readme_src/splash_page.png" align ="center"><br>

## Technologies

* Ruby on Rails
* React & Redux
* Javascript
* JQuery
* PostgreSQL
* HTML5
* CSS3
* Heroku
* AWS

## Features

### Searching for Recipes

All users can peruse recipes via featured ones on the splash page or through the index. From here we can search for recipes via recipe ingredients or the names of these dishes.

<img src="https://github.com/airusk/boneappletea/blob/master/readme_src/search_query.gif" align="center"><br>

<img src="https://github.com/airusk/boneappletea/blob/master/readme_src/search_controller_action.png" width="750" align="center"><br>
*API controller action to fetch recipes which pertain to *```:tag```*.*

Recipes have ratings which are accessed via their association to comments which may/may not have a rating attached to them.

<img src="https://github.com/airusk/boneappletea/blob/master/readme_src/rating.gif" align ="center">

### Recipes, Ingredients, and Steps

Upon clicking a recipe, a payload organized by appropriate keys in our jbuilder files. This helps to reduces complexity and requires less logic in the frontend.

<img src="https://github.com/airusk/boneappletea/blob/master/readme_src/state_shape.png" width="750" align="center"><br>
*recipe state shape in 'show.json.jbuilder'*

<img src="https://github.com/airusk/boneappletea/blob/master/readme_src/recipe_show.gif" align="center"><br>
*The result of the payload being handed to our react components in the frontend*

### Reviews

At the bottom of recipes is a review box where registered users can leave reviews on as well as other users' reviews.

<img src="https://github.com/airusk/boneappletea/blob/master/readme_src/leave_review.gif" align ="center"><br>


### User Authentication

Users can sign up by clicking the SIGNUP button on the right of the navigation bar, or sign in using the demo user function.

<img src="https://github.com/airusk/boneappletea/blob/master/readme_src/user_login.gif" align ="center">


## How to Run

Within the project directory in a command prompt run the following commands:
* ```bundle install```
* ```npm install```
* ```rails db:setup```

(To launch the app from local server: )
* ```rails s```
* ```npm start```

