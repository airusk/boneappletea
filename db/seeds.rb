# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Recipe.destroy_all
Ingredient.destroy_all
Step.destroy_all

#USER SEEDS
User.create(name: "Pizza Lover", email: "pizzalover@bat.com", password: "pepperoni")
User.create(name: "Stephen Gee Lee", email: "nonuts@painterest.com", password: "raveking")
User.create(name: "Maximus Li", email: "nomin@wowelp.com", password: "onlymax")
User.create(name: "Kim Pham", email: "Phamtastic@finalenix.com", password: "finalfantasy14")

# RECIPE SEEDS
Recipe.create(
  title: "The Perfect Neapolitano Pizza", 
  body: "This pie is a family heirloom, my family has been passing this down from great grandmother to grandmother to mother and finally to me. You get the idea, it's a rustic and home-y dish to be sure",
  user_id: 1
)
Recipe.create(
  title: "totino's pizza rolls", 
  body: "Set it and forget it!", 
  user_id: 2
)

# INGREDIENT SEEDS
Ingredient.create(
  text: "1.34 mili-quarts of hot sopressata", 
  recipe_id: 1, 
  ord: 1
)
Ingredient.create(
  text: "12.5 shreds'o parmer john o-reggie arnold", 
  recipe_id: 1, 
  ord: 2
)
Ingredient.create(
  text: "3 cans of heinz catsup", 
  recipe_id: 1,
  ord: 3
)
Ingredient.create(
  text: "1 lub whole-wheat white barley rice flour", 
  recipe_id: 1, 
  ord: 4
)
Ingredient.create(
  text: "5 new-york wourder", 
  recipe_id: 1, 
  ord: 5
)
Ingredient.create(
  text: "1 baby-handfull of olives", 
  recipe_id: 1, 
  ord: 6
)
Ingredient.create(
  text: "8 crack open a cold one", 
  recipe_id: 2, 
  ord: 1
)

# STEP SEEDS
Step.create(
  body:"Mix sugar, yeast, and ¾ cup warm water in the bowl of a stand mixer (or in a large bowl if doing by hand) fitted with the dough hook. Stir in flour and 1½ Tbsp. oil. Mix on low speed, scraping down sides of bowl as needed, until dough comes together in a smooth mass and no longer sticks to the sides of bowl, 5–6 minutes. Cover dough and let rest 30 minutes at room temperature. Add salt and continue to knead until fully incorporated into dough.",
  recipe_id: 1,
  ord: 1
)
Step.create(
  body:"Turn out dough onto a work surface. Cut dough in half, then shape each half into a ball. Place each ball in separate medium bowls. Drizzle with just enough oil to coat. Cover bowls with plastic wrap. Chill at least 24 hours and up to 2 days.",
  recipe_id: 1,
  ord: 2
)
Step.create(
  body:"Let dough come to room temperature until nearly doubled in size and slowly springs back when poked, 2–2½ hours. Dough is now ready for shaping.",
  recipe_id: 1,
  ord: 3
)
Step.create(
  body:"Place a rack in top third of oven; preheat to 475° (if you have a pizza stone, use it!). Pulse cheese, garlic, lime juice, 1 cup basil, 1 cup carrot tops, ⅓ cup oil, and ¼ cup mint in a food processor until smooth; season with salt. (You can also make the carrot top pesto by chopping everything by hand.)",
  recipe_id: 1,
  ord: 4
)
Step.create(
  body:"Stretch dough, 1 ball at a time, on a lightly oiled large rimmed baking sheet until 12–14\" in diameter. Spread with half of the pesto, then top with half of carrots and chiles. Drizzle with more oil; season with salt.",
  recipe_id: 1,
  ord: 5
)
Step.create(
  body:"Bake on top rack until crust is golden brown and crisp, 10–12 minutes. Let pizza cool 1 minute, then top with carrot tops, basil, mint, pea shoots and/or blue basil. Serve immediately.",
  recipe_id: 1,
  ord: 6
)
Step.create(
  body:"A step that doesn't belong to recipeId 1.",
  recipe_id: 2,
  ord: 420
)