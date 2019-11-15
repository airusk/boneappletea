# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Recipe.destroy_all
Ingredient.destroy_all
Step.destroy_all

#USER SEEDS
User.create(name: "Pizza Lover", email: "pizzalover@bat.com", password: "pepperoni")
User.create(name: "Stephen Gee Lee", email: "nonuts@painterest.com", password: "raveking")
User.create(name: "Maximus Li", email: "nomin@wowelp.com", password: "onlymax")
User.create(name: "Kim Pham", email: "Phamtastic@finalenix.com", password: "finalfantasy14")

###
#
#
#
# RECIPE SEEDS
#
#
#
###
#1
Recipe.create(
  title: "Slow-Roast Gochujang Chicken", 
  body: "This isn’t the crisp-skinned, high-heat roast chicken you’re probably familiar with. Instead, it’s a melt-in-your-mouth tender, schmaltzy, slow-roast version that’s more similar to rotisserie chicken—except (bonus!) it gets slathered in the funky-spicy-sweet gochujang. And while the meat might be the star of the show, don't discount those buttery-soft, nearly-confited potatoes, which cook gently in the chicken fat. Makes you wonder why you haven't always been roasting long-cooking vegetables—carrots, cauliflower, turnips (?!), winter squash, fennel—under the bird for a built-in side, huh?",
  user_id: 1
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/1/Basically-Gojuchang-Chicken-Recipe-Wide.jpg')
Recipe.last.image.attach(io: file, filename: 'Basically-Gojuchang-Chicken-Recipe-Wide.jpg')
#2
Recipe.create(
  title: "Soba Soup With Shrimp and Greens", 
  body: "Dashi is the sort of super-powered broth that every cook should know how to make. One of the building blocks of Japanese cuisine, the most popular dashi is made from just two ingredients (kombu and katsuobushi a.k.a. bonito flakes) and comes together in fewer than 15 minutes. That makes it the fastest route to a slurp-able, umami-rich broth (with no loooong simmers or bags of chicken bones necessary). Here, it's the base of a super savory soup packed with poached shrimp, nutty soba, and tons o' greens—the perfect antidote to that cold you kinda sorta feel coming on. ", 
  user_id: 1
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/2/Basically-Dashi-Soba-Shrimp-Beauty.jpg')
Recipe.last.image.attach(io: file, filename: 'Basically-Dashi-Soba-Shrimp-Beauty.jpg')
#3
Recipe.create(
  title: "Suspiciously Cheesy Apple Crumb Bars", 
  body: "When we were brainstorming our ideal apple dessert, two classic supporting ingredients came to mind. No, not cinnamon and caramel! Sharp cheddar cheese and buttery Ritz crackers. But after trying (and failing) to achieve a cheesy taste that came through even after baking, we had a thought: Why not harness the super-powered cheesiness of cheese crackers instead? Incorporating Cheez-Its into the dough results in a toasty, buttery flavor that your friends will be able to identify as deliciousness, but not necessarily as cheesiness. (Trust us, we did a blind taste-test!) The crisp crust, which also turns into the crumb topping, comes together in the food processor, and a finished slice is as beautiful as a slice of pie—but way easier.", 
  user_id: 1
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/Basically-Apple-Crumble-Bar-Macro.jpg')
Recipe.last.image.attach(io: file, filename: 'Basically-Apple-Crumble-Bar-Macro.jpg')
#4
Recipe.create(
  title: "Family-Style Fish Tacos", 
  body: "No grill, no deep-fryer, no problemo. Our summery tacos rely on our go-to fish-cooking method—slow-roast, baby!—for tender, flaky fish every time. Because white fish (think cod or tilapia) is so mild, we took a cue from Contramar’s Red and Green Grilled Snapper and covered it in a garlicky cilantro-chile sauce before cooking. You’re not going to get the same char or crunch as you would in grilled or fried fish tacos, but a cabbage slaw (and the fact that you don’t have to deal with grilling or frying) more than makes up for it. Use any mild white fish you like, remembering that cook time varies based on the thickness of the piece. So keep an eye on the fish as it cooks and cook to the visual indicator, not the timer.", 
  user_id: 1
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Basically-Tacos-Platter.jpg')
Recipe.last.image.attach(io: file, filename: 'Basically-Tacos-Platter.jpg')
#5
Recipe.create(
  title: "Steak and Eggs with Salsa Verde", 
  body: "So much to love on one plate! Skirt steak is one of our all-time favorite cuts—it's nice and thin, so all you have to do is sear it hard for a couple of minutes on each side and the interior will be a perfect medium-rare, no thermometer required. And salsa verde? Just our go-to, all-purpose condiment, ideal for waking up everything from grilled veggies to steamed fish to roasted meat. And crispy-edged, olive oil-fried eggs? Well, those need no introduction. Breakfast for dinner never looked so good.", 
  user_id: 1
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/5/Basically-Steak-Eggs-Platter.jpg')
Recipe.last.image.attach(io: file, filename: 'Basically-Steak-Eggs-Platter.jpg')
#6
Recipe.create(
  title: "Blackberry Icebox Cake", 
  body: "This creamy, dreamy icebox cake—built in a bowl for maximum ease—is the no-bake dessert you'll be making all summer.", 
  user_id: 1
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake.jpg')
Recipe.last.image.attach(io: file, filename: 'blackberry-icebox-cake.jpg')

# Recipe.create(
#   title: "totino's pizza rolls", 
#   body: "Set it and forget it!", 
#   user_id: 1
# )
# file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Totino_Pizza_Rolls_large.jpg')
# Recipe.last.image.attach(io: file, filename: 'Totino_Pizza_Rolls_large.jpg')

###
#
#
#
# INGREDIENT SEEDS
#
#
#
###
Ingredient.create(
  text: "1 3½–4-lb. whole chicken", 
  recipe_id: 1, 
  ord: 1
)
Ingredient.create(
  text: "1 Tbsp. Diamond Crystal or 1¾ tsp. Morton kosher salt, plus more", 
  recipe_id: 1, 
  ord: 2
)
Ingredient.create(
  text: "Freshly ground black pepper", 
  recipe_id: 1,
  ord: 3
)
Ingredient.create(
  text: "5 Tbsp. gochujang (Korean hot pepper paste)", 
  recipe_id: 1, 
  ord: 4
)
Ingredient.create(
  text: "¼ cup plus 2 Tbsp. extra-virgin olive oil", 
  recipe_id: 1, 
  ord: 5
)
Ingredient.create(
  text: "2 heads of garlic", 
  recipe_id: 1, 
  ord: 6
)
Ingredient.create(
  text: "1 ½\" piece fresh ginger", 
  recipe_id: 1, 
  ord: 7
)
Ingredient.create(
  text: "1½ lb. baby Yukon Gold potatoes (about 1½\" in diameter)", 
  recipe_id: 1, 
  ord: 8
)
Ingredient.create(
  text: "5 scallions", 
  recipe_id: 1, 
  ord: 9
)
Ingredient.create(
  text: "2 limes", 
  recipe_id: 1, 
  ord: 10
)
Ingredient.create(
  text: "2 tsp. honey", 
  recipe_id: 1, 
  ord: 11
)
# recipe 2
Ingredient.create(
  text: "1 lb. large peeled, deveined shrimp, fresh or frozen", 
  recipe_id: 2, 
  ord: 1
)
Ingredient.create(
  text: "1 sheet kombu (about 1 oz.)", 
  recipe_id: 2, 
  ord: 2
)
Ingredient.create(
  text: "½ large bunch or 1 small bunch mustard greens, kale, mature spinach, or Swiss chard (about 8 oz.)", 
  recipe_id: 2,
  ord: 3
)
Ingredient.create(
  text: "10 scallions", 
  recipe_id: 2, 
  ord: 4
)
Ingredient.create(
  text: "1 1\" piece fresh ginger", 
  recipe_id: 2, 
  ord: 5
)
Ingredient.create(
  text: "Kosher salt", 
  recipe_id: 2, 
  ord: 6
)
Ingredient.create(
  text: "1 1-oz. package bonito flakes", 
  recipe_id: 2, 
  ord: 7
)
Ingredient.create(
  text: "¼ cup mirin", 
  recipe_id: 2, 
  ord: 8
)
Ingredient.create(
  text: "5 Tbsp. soy sauce, plus more for drizzling", 
  recipe_id: 2,
  ord: 9
)
Ingredient.create(
  text: "1 Tbsp. toasted sesame oil, plus more for drizzling", 
  recipe_id: 2, 
  ord: 10
)
Ingredient.create(
  text: "4 large eggs", 
  recipe_id: 2, 
  ord:11
)
Ingredient.create(
  text: "8 oz. soba noodles", 
  recipe_id: 2, 
  ord: 12
)
Ingredient.create(
  text: "1 Tbsp. toasted sesame seeds", 
  recipe_id: 2, 
  ord: 13
)
# recipe 3
Ingredient.create(
  text: "¾ cup (1½ sticks) cold unsalted butter, divided, plus more for pan", 
  recipe_id: 3, 
  ord: 1
)
Ingredient.create(
  text: "1½ cups (105 g) Cheez-Its", 
  recipe_id: 3, 
  ord: 2
)
Ingredient.create(
  text: "1½ cups (190 g) all-purpose flour, plus more for dusting", 
  recipe_id: 3,
  ord: 3
)
Ingredient.create(
  text: "¾ cup plus 3 Tbsp. sugar, divided", 
  recipe_id: 3, 
  ord: 4
)
Ingredient.create(
  text: "¾ tsp. kosher salt, divided", 
  recipe_id: 3, 
  ord: 5
)
Ingredient.create(
  text: "2 large eggs", 
  recipe_id: 3, 
  ord: 6
)
Ingredient.create(
  text: "2 lb. (about 4 medium) Pink Lady or a mix of Pink Lady and Granny Smith apples", 
  recipe_id: 3, 
  ord: 7
)
Ingredient.create(
  text: "1 lemon", 
  recipe_id: 3, 
  ord: 8
)
Ingredient.create(
  text: "½ cup apple cider", 
  recipe_id: 3,
  ord: 9
)
# recipe 4
Ingredient.create(
  text: "1 1½-lb. piece white fish", 
  recipe_id: 4, 
  ord: 1
)
Ingredient.create(
  text: "3 tsp. kosher salt, divided, plus more", 
  recipe_id: 4, 
  ord: 2
)
Ingredient.create(
  text: "2 jalapeños", 
  recipe_id: 4,
  ord: 3
)
Ingredient.create(
  text: "⅓ cup vegetable oil", 
  recipe_id: 4, 
  ord: 4
)
Ingredient.create(
  text: "2 garlic cloves", 
  recipe_id: 4, 
  ord: 5
)
Ingredient.create(
  text: "1 large bunch of cilantro, divided", 
  recipe_id: 4, 
  ord: 6
)
Ingredient.create(
  text: "1 pint cherry tomatoes", 
  recipe_id: 4, 
  ord: 7
)
Ingredient.create(
  text: "¼ white onion", 
  recipe_id: 4, 
  ord: 8
)
Ingredient.create(
  text: "4 limes, divided", 
  recipe_id: 4,
  ord: 9
)
Ingredient.create(
  text: "¼ head of green cabbage", 
  recipe_id: 4, 
  ord: 10
)
Ingredient.create(
  text: "1 avocado", 
  recipe_id: 4, 
  ord:11
)
Ingredient.create(
  text: "24 corn tortillas or 12 flour tortillas", 
  recipe_id: 4, 
  ord: 12
)
Ingredient.create(
  text: "Hot sauce (for serving)", 
  recipe_id: 4, 
  ord: 13
)
# recipe 5
Ingredient.create(
  text: "1 lb. skirt steak", 
  recipe_id: 5, 
  ord: 1
)
Ingredient.create(
  text: "Kosher salt", 
  recipe_id: 5, 
  ord: 2
)
Ingredient.create(
  text: "Freshly ground black pepper", 
  recipe_id: 4,
  ord: 3
)
Ingredient.create(
  text: "Small bunch of parsley", 
  recipe_id: 5, 
  ord: 4
)
Ingredient.create(
  text: "1 garlic clove", 
  recipe_id: 5, 
  ord: 5
)
Ingredient.create(
  text: "1 lemon", 
  recipe_id: 5, 
  ord: 6
)
Ingredient.create(
  text: "1 Tbsp. capers", 
  recipe_id: 5, 
  ord: 7
)
Ingredient.create(
  text: "½ tsp. crushed red pepper flakes", 
  recipe_id: 5, 
  ord: 8
)
Ingredient.create(
  text: "½ tsp. sugar", 
  recipe_id: 5,
  ord: 9
)
Ingredient.create(
  text: "½ cup extra-virgin olive oil, plus more for pan", 
  recipe_id: 5, 
  ord: 10
)
Ingredient.create(
  text: "4 large eggs", 
  recipe_id: 5, 
  ord:11
)
# recipe 6
Ingredient.create(
  text: "2 pints blackberries, divided", 
  recipe_id: 6, 
  ord: 1
)
Ingredient.create(
  text: "½ cup blackberry jam", 
  recipe_id: 6, 
  ord: 2
)
Ingredient.create(
  text: "1 lemon", 
  recipe_id: 4,
  ord: 3
)
Ingredient.create(
  text: "2 cups chilled heavy cream", 
  recipe_id: 6, 
  ord: 4
)
Ingredient.create(
  text: "¼ cup powdered sugar", 
  recipe_id: 6, 
  ord: 5
)
Ingredient.create(
  text: "Pinch of kosher salt", 
  recipe_id: 6, 
  ord: 6
)
Ingredient.create(
  text: "8 oz. vanilla wafers, divided", 
  recipe_id: 6, 
  ord: 7
)
###
#
#
#
# STEP SEEDS
#
#
#
###
#recipe 1 steps
Step.create(
  body:"Place a rack in middle of oven; preheat to 300°. This is an important temperature for this recipe, so if you don’t have an oven thermometer already, now is the time to get one! Pat chicken dry with paper towels. Place on a small rimmed baking sheet. Season 1 3½–4-lb. whole chicken all over with 1 Tbsp. Diamond Crystal or 1¾ tsp. Morton kosher salt and lots of freshly ground black pepper, making sure to season the inside cavity.",
  recipe_id: 1,
  ord: 1
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/1/Basically-Gojuchang-Chicken-1.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically-Gojuchang-Chicken-1.mp4.webm')


Step.create(
  body:"Whisk 5 Tbsp. gochujang and ¼ cup extra-virgin olive oil in a medium bowl until combined. Finely grate 3 garlic cloves (from one of the heads of garlic) into gochujang oil. Peel 1 ½\" piece fresh ginger (a spoon can get the job done), then grate into gochujang oil; whisk to combine.",
  recipe_id: 1,
  ord: 2
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/1/Basically-Gojuchang-Chicken-2.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically-Gojuchang-Chicken-2.mp4.webm')

Step.create(
  body:"Cut what’s left of the head of garlic in half crosswise. Repeat with second head of garlic. Stuff 2 garlic halves inside cavity of chicken. Tie legs together with kitchen twine.",
  recipe_id: 1,
  ord: 3
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/1/Basically-Gojuchang-Chicken-3.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically-Gojuchang-Chicken-3.mp4.webm')

Step.create(
  body:"Using a pastry brush, brush half of gochujang oil over chicken.",
  recipe_id: 1,
  ord: 4
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/1/Basically-Gojuchang-Chicken-4.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically-Gojuchang-Chicken-4.mp4.webm')

Step.create(
  body:"Toss 1½ lb. baby Yukon Gold potatoes and remaining 2 garlic halves and 2 Tbsp. extra-virgin olive oil in remaining gochujang oil until well coated. Season lightly with salt and pepper and toss again to combine.",
  recipe_id: 1,
  ord: 5
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/1/Basically-Gojuchang-Chicken-5.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically-Gojuchang-Chicken-5.mp4.webm')

Step.create(
  body:"Arrange potatoes in a 12\" cast-iron skillet, scooting them toward edges of pan to make space for chicken. Nestle garlic halves (cut sides down) in center of skillet. Place chicken over garlic—as it roasts, it will infuse the fat (and thus, the potatoes) with flavor. If any potatoes have shimmied their way under the chicken, use tongs to arrange them around it (they won’t cook at the same rate if they’re under the chicken).",
  recipe_id: 1,
  ord: 6
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/1/Basically-Gojuchang-Chicken-6.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically-Gojuchang-Chicken-6.mp4.webm')

Step.create(
  body:"Roast chicken and potatoes, turning potatoes once or twice to coat in juices and oil that accumulate in pan, until potatoes are very tender when pressed with the back of a spoon, and chicken skin is deep reddish-golden brown in color, 2½–3 hours. When you wiggle the legs of the chicken, they should feel loose in the joints, meaning the meat is fall-apart tender. Transfer chicken to a cutting board and let rest 10–15 minutes. Don't skip this step: Letting the bird rests helps the juices in the meat to settle (in other words, it makes the meat juicier).",
  recipe_id: 1,
  ord: 7
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/1/Basically-Gojuchang-Chicken-7.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically-Gojuchang-Chicken-7.mp4.webm')

Step.create(
  body:"Meanwhile, use the back of a large spoon or a potato masher to gently smash potatoes in skillet, exposing some of their flesh to juices underneath so they can soak them up.",
  recipe_id: 1,
  ord: 8
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/1/Basically-Gojuchang-Chicken-8.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically-Gojuchang-Chicken-8.mp4.webm')

Step.create(
  body:"Finish the potatoes: Thinly slice 5 scallions on a long diagonal. Cut 2 limes in half. Cut 1 half into wedges and set aside. Stir 2 tsp. honey and juice of remaining lime half into potatoes. Taste potatoes and season with more salt if needed. Scatter sliced scallions over potatoes.",
  recipe_id: 1,
  ord: 9
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/1/Basically-Gojuchang-Chicken-9.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically-Gojuchang-Chicken-9.mp4.webm')

Step.create(
  body:"Carve chicken, then arrange pieces over potatoes and scallions. Serve right out of skillet with remaining lime wedges alongside for squeezing, and squeeze out the sweet, slow-roasted garlic cloves as you wish.",
  recipe_id: 1,
  ord: 10
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/1/Basically-Gojuchang-Chicken-10.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically-Gojuchang-Chicken-10.mp4.webm')

Step.create(
  body:"Do Ahead: Chicken can be seasoned 12 hours ahead. Chill chicken if you’re not going to cook within 2 hours of seasoning.",
  recipe_id: 1,
  ord: 11
)
# file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/1/Basically-Gojuchang-Chicken-11.mp4.webm')
# Step.last.image.attach(io: file, filename: 'Basically-Gojuchang-Chicken-11.mp4.webm')

#recipe 2 steps
Step.create(
  body:"If your 1 lb. large peeled, deveined shrimp is frozen, defrost it—here’s how. Meanwhile, soak 1 sheet kombu in 8 cups water in a large Dutch oven until soft and flexible, 15–20 minutes. (You'll probably notice a white layer of film on your kombu—don't rinse that off. It's a source of sweetness.)",
  recipe_id: 2,
  ord: 1
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/2/soba-soup-with-shrimp-and-greens-1.mp4.webm')
Step.last.image.attach(io: file, filename: 'soba-soup-with-shrimp-and-greens-1.mp4.webm')


Step.create(
  body:"While kombu soaks, remove leaves from ½ large bunch or 1 small bunch mustard greens, kale, mature spinach, or Swiss chard (discard or save the stems), wash, and coarsely chop. Thinly slice 10 scallions; set aside about one-third for serving. Peel 1 1\" piece ginger. Bring a large pot of salted water to a boil.",
  recipe_id: 2,
  ord: 2
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/2/soba-soup-with-shrimp-and-greens-2.mp4.webm')
Step.last.image.attach(io: file, filename: 'soba-soup-with-shrimp-and-greens-2.mp4.webm')

Step.create(
  body:"Make the dashi: After kombu has soaked, turn heat to medium. Once you see small bubbles around the edges, use tongs to remove kombu. Avoid bringing the water to a boil—it might make your dashi bitter. (As for the kombu, you can save it in the fridge to make another batch of dashi later in the week.)",
  recipe_id: 2,
  ord: 3
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/2/soba-soup-with-shrimp-and-greens-3.mp4.webm')
Step.last.image.attach(io: file, filename: 'soba-soup-with-shrimp-and-greens-3.mp4.webm')

Step.create(
  body:"Add 1 1-oz. package bonito flakes, bring to a boil, and turn off heat. Gently push bonito flakes to submerge, then let stand 2 minutes without stirring. Carefully pour through a fine-mesh sieve into a medium bowl or large measuring cup, being sure to strain out any lingering fish flakes. (You can also save the bonito for your next round of dashi.) That’s it: You’ve made dashi.",
  recipe_id: 2,
  ord: 4
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/2/soba-soup-with-shrimp-and-greens-4.mp4.webm')
Step.last.image.attach(io: file, filename: 'soba-soup-with-shrimp-and-greens-4.mp4.webm')

Step.create(
  body:"Wipe out Dutch oven and return to medium heat. Add chopped greens, remaining two-thirds of scallions, and ½ tsp. salt. Using a Microplane, grate in ginger. Pour in ¼ cup water and stir to combine. Cover and cook until greens are wilted, 4–5 minutes.",
  recipe_id: 2,
  ord: 5
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/2/soba-soup-with-shrimp-and-greens-5.mp4.webm')
Step.last.image.attach(io: file, filename: 'soba-soup-with-shrimp-and-greens-5.mp4.webm')

Step.create(
  body:"Add dashi, ¼ cup mirin, 5 Tbsp. soy sauce, and 1 Tbsp. toasted sesame oil and bring to a gentle simmer.",
  recipe_id: 2,
  ord: 6
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/2/soba-soup-with-shrimp-and-greens-6.mp4.webm')
Step.last.image.attach(io: file, filename: 'soba-soup-with-shrimp-and-greens-6.mp4.webm')

Step.create(
  body:"Carefully lower 4 large eggs into boiling salted water and set a timer for 6½ minutes. Fill up a small bowl with ice water. Immediately plunge eggs into ice bath when your timer goes off. This halts their cooking, keeping them in that gooey yolk state you're looking for. Let cool, then peel.",
  recipe_id: 2,
  ord: 7
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/2/soba-soup-with-shrimp-and-greens-7.mp4.webm')
Step.last.image.attach(io: file, filename: 'soba-soup-with-shrimp-and-greens-7.mp4.webm')


Step.create(
  body:"Return salted water to a boil and add 8 oz. soba. Cook 4 minutes, then drain and rinse with cold water. Divide noodles among shallow bowls.",
  recipe_id: 2,
  ord: 8
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/2/soba-soup-with-shrimp-and-greens-8.mp4.webm')
Step.last.image.attach(io: file, filename: 'soba-soup-with-shrimp-and-greens-8.mp4.webm')

Step.create(
  body:"Finish up: Pinch tails off shrimp; season with salt. Add to pot and remove from heat. The shrimp will turn bright pink in the residual heat of the broth, a sign that they’re cooked through. Taste and add more salt, if needed.",
  recipe_id: 2,
  ord: 9
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/2/soba-soup-with-shrimp-and-greens-9.mp4.webm')
Step.last.image.attach(io: file, filename: 'soba-soup-with-shrimp-and-greens-9.mp4.webm')

Step.create(
  body:"Divide broth among bowls with noodles. Slice eggs in half as you add to bowls. (If you're planning on having leftovers, store the broth, noodles, and uncut eggs separately.) Drizzle yolks with sesame oil and soy sauce. Sprinkle with reserved scallions and 1 Tbsp. toasted sesame seeds.",
  recipe_id: 2,
  ord: 10
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/2/soba-soup-with-shrimp-and-greens-10.mp4.webm')
Step.last.image.attach(io: file, filename: 'soba-soup-with-shrimp-and-greens-10.mp4.webm')

#recipe 3 steps
Step.create(
  body:"Place a rack in middle of oven; preheat to 375°. Line a 9\" round pan with foil, pressing it so that it hugs the sides. Leave about 2\" overhang—you’ll use that to lift the bars out later. Grease foil with unsalted butter. (Lining with foil makes it a cinch to lift out your bars for easy slicing. But if you prefer not to use it, butter generously and then cut out wedges straight from the baking pan.)",
  recipe_id: 3,
  ord: 1
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/apple-crumble-bars-1.mp4.webm')
Step.last.image.attach(io: file, filename: 'apple-crumble-bars-1.mp4.webm')


Step.create(
  body:"Make the streusel: Pulse 1½ cups Cheez-Its, 1½ cups all-purpose flour, ¾ cup sugar, and ½ tsp. kosher salt in a food processor until a fine, light orange mixture forms and no visible Cheez-Its remain.",
  recipe_id: 3,
  ord: 2
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/apple-crumble-bars-2.mp4.webm')
Step.last.image.attach(io: file, filename: 'apple-crumble-bars-2.mp4.webm')

Step.create(
  body:"Cut ¾ cup (1½ sticks) cold unsalted butter into small pieces. The easiest way to do this is to slice once lengthwise, then turn butter block on its side and slice lengthwise again. Now that you have 4 long butter columns, keep them stacked and cut crosswise. Cute butter cubes! Add butter to food processor and pulse until pea-size pieces of butter remain. Scoop out 1¼ cups Cheez-Its mixture and set aside—you’ll use this for the crumb topping.",
  recipe_id: 3,
  ord: 3
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/apple-crumble-bars-3.mp4.webm')
Step.last.image.attach(io: file, filename: 'apple-crumble-bars-3.mp4.webm')

Step.create(
  body:"Time to make the shortbread crust: Separate 2 large eggs, placing yolks in a small bowl; reserve whites for another use. (Those yolks are going to give this portion of the dough the moisture and fattiness it needs to come together into a crisp, sturdy base.) Mix with a fork just to break up yolks. Add egg yolks to remaining Cheez-Its mixture in food processor and pulse to incorporate. Continue to pulse in 10-second increments until dough starts to hold together in big clumps (this will take 5–6 increments, and the machine will start to make a different noise when you reach the stopping point).",
  recipe_id: 3,
  ord: 4
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/apple-crumble-bars-4.mp4.webm')
Step.last.image.attach(io: file, filename: 'apple-crumble-bars-4.mp4.webm')

Step.create(
  body:"Scatter dough clumps in prepared pan, using lightly floured hands to gently press it into an even later. Poke all over with the tines of a fork.",
  recipe_id: 3,
  ord: 5
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/apple-crumble-bars-5.mp4.webm')
Step.last.image.attach(io: file, filename: 'apple-crumble-bars-5.mp4.webm')

Step.create(
  body:"Bake crust until dry to the touch and edges are starting to brown, 18–22 minutes.",
  recipe_id: 3,
  ord: 6
)
# file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/apple-crumble-bars-6.mp4.webm')
# Step.last.image.attach(io: file, filename: 'apple-crumble-bars-6.mp4.webm')

Step.create(
  body:"Meanwhile, make the filling. Cut 2 lb. (about 4 medium) Pink Lady or a mix of Pink Lady and Granny Smith apples around the core into 4 sections each. Lay apple chunk on its flat side and thinly slice (you’re aiming for ⅛\"—but really, the slices should be thin but not paper-thin). You should have 8 cups total.",
  recipe_id: 3,
  ord: 7
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/apple-crumble-bars-7.mp4.webm')
Step.last.image.attach(io: file, filename: 'apple-crumble-bars-7.mp4.webm')


Step.create(
  body:"Juice 1 lemon (you should have 2 Tbsp.) into a measuring cup. Add ½ cup apple cider and remaining ½ tsp. kosher salt and stir to combine.",
  recipe_id: 3,
  ord: 8
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/apple-crumble-bars-8.mp4.webm')
Step.last.image.attach(io: file, filename: 'apple-crumble-bars-8.mp4.webm')

Step.create(
  body:"Transfer apple slices to a large skillet and heat over medium-high (no need to add butter or oil, as the apples are going to release their juices). Sprinkle remaining 3 Tbsp. sugar over and cook, tossing frequently, until sugar melts, about 1 minute. Pour in apple cider mixture and bring to a simmer. Reduce heat to medium and cook, stirring occasionally and gently, until apples are very tender (if you’re using half Granny Smith, those pieces will start to break down) and almost all of the liquid has boiled off (you’ll want 1 Tbsp. or so remaining in the pan), 8–10 minutes. Let cool slightly.",
  recipe_id: 3,
  ord: 9
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/apple-crumble-bars-9.mp4.webm')
Step.last.image.attach(io: file, filename: 'apple-crumble-bars-9.mp4.webm')

Step.create(
  body:"When both the crust and apples are cool enough to handle, transfer fruit and any leftover goop to pan. Spread evenly, then press gently to compact apples (this will make the bars easier to slice and eat). Sprinkle reserved streusel over (for bigger clumps, squeeze the streusel in your hands as you crumble).",
  recipe_id: 3,
  ord: 10
)
# file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/apple-crumble-bars-10.mp4.webm')
# Step.last.image.attach(io: file, filename: 'apple-crumble-bars-10.mp4.webm')

Step.create(
  body:"Bake bar until topping is firm, toasty-smelling, and darker in color, 35–40 minutes.",
  recipe_id: 3,
  ord: 11
)
# file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/apple-crumble-bars-11.mp4.webm')
# Step.last.image.attach(io: file, filename: 'apple-crumble-bars-11.mp4.webm')

Step.create(
  body:"Let cool in pan, then use foil overhang to carefully transfer to a cutting board. Using a sharp chef knife or a long serrated knife, cut into 12 triangles. Cover and store in the fridge for up to 4 days.",
  recipe_id: 3,
  ord: 12
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/3/apple-crumble-bars-12.mp4.webm')
Step.last.image.attach(io: file, filename: 'apple-crumble-bars-12.mp4.webm')

#recipe 4 steps
Step.create(
  body:"Place a rack in center of oven; preheat to 300°. Place 1 1½-lb. piece white fish in a 13x9\" baking dish. Season all over with 1½ tsp. salt.",
  recipe_id: 4,
  ord: 1
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Basically_FishTacos_1.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_FishTacos_1.mp4.webm')


Step.create(
  body:"Trim and discard stems of 2 jalapeños, cut in half lengthwise, then coarsely chop. Coarsely chop three-quarters of 1 bunch of cilantro leaves with tender stems.",
  recipe_id: 4,
  ord: 2
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Basically_FishTacos_2.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_FishTacos_2.mp4.webm')

Step.create(
  body:"Transfer jalapeños and chopped cilantro to a blender or food processor. Add ⅓ cup vegetable oil and 2 garlic cloves. Blend on high speed until a coarse purée forms. Scoop out and transfer 2 Tbsp. sauce to a medium bowl (you’ll be building your pico de gallo in this.) Pour remaining sauce evenly over fish, spreading with the back of a spoon.",
  recipe_id: 4,
  ord: 3
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Basically_FishTacos_3.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_FishTacos_3.mp4.webm')

Step.create(
  body:"Bake fish until it flakes away with light pressure from the tines of a fork in the thickest part, 18–25 minutes, depending on the thickness of fillet and what type of fish you’re using. Start checking on the early end of things so it doesn’t overcook!",
  recipe_id: 4,
  ord: 4
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Basically_FishTacos_4.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_FishTacos_4.mp4.webm')

Step.create(
  body:"While fish bakes, work on the rest of your toppings. Quarter 1 pint cherry tomatoes and transfer to bowl with reserved cilantro sauce. Peel ¼ white onion, then finely chop. Add to sauce and toss to combine. Cut 1 lime in half and squeeze juice of both halves into bowl. Season with 1 tsp. salt and toss to combine.",
  recipe_id: 4,
  ord: 5
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Basically_FishTacos_5.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_FishTacos_5.mp4.webm')

Step.create(
  body:"Shave off core of ¼ head of cabbage. Thinly slice crosswise into shreds and transfer to a medium bowl. Cut another lime in half and squeeze juice into bowl; season with salt. Toss with your hands to combine.",
  recipe_id: 4,
  ord: 6
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Basically_FishTacos_6.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_FishTacos_6.mp4.webm')

Step.create(
  body:"Cut remaining 2 limes into wedges for serving.",
  recipe_id: 4,
  ord: 7
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Basically_FishTacos_7.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_FishTacos_7.mp4.webm')


Step.create(
  body:"Run knife around pit of 1 avocado lengthwise to split in half. Open avocado. Using bottom half of knife, remove pit by securing the blade in the pit, then turning it sideways to release. Using a large spoon, scoop out flesh, then cut into thin lengthwise wedges. Transfer to a large platter or board. Season avocado with salt.",
  recipe_id: 4,
  ord: 8
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Basically_FishTacos_8.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_FishTacos_8.mp4.webm')

Step.create(
  body:"Arrange cabbage, pico de gallo, and remaining cilantro and lime wedges on platter as well.",
  recipe_id: 4,
  ord: 9
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Basically_FishTacos_9.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_FishTacos_9.mp4.webm')

Step.create(
  body:"Warm 24 corn tortillas or 12 flour tortillas one at a time over a burner set to medium heat until blackened around the edges in some spots, about 30 seconds per side. Keep tortillas wrapped in a stack in a clean kitchen towel to keep warm until serving.",
  recipe_id: 4,
  ord: 10
)
# file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Basically_FishTacos_10.mp4.webm')
# Step.last.image.attach(io: file, filename: 'Basically_FishTacos_10.mp4.webm')

Step.create(
  body:"Using a large spoon, gently flake apart fish into tortilla-sized irregular pieces and transfer to a plate. Serve fish along with all the accoutrements and your fave hot sauce for a DIY taco party.",
  recipe_id: 4,
  ord: 11
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/4/Basically_FishTacos_11.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_FishTacos_11.mp4.webm')

#recipe 5 steps
Step.create(
  body:"If 1 lb. skirt steak isn’t already cut, cut it into pieces about 5\" long. Pat steak dry with paper towels and place on a plate. Season generously all over with kosher salt and freshly ground pepper. Let rest at room temperature while you make the salsa verde. Usually you want steak to sit out at least 1 hour to cook more evenly, but with skirt steak, it’s okay to cut down on that time because it cooks so quickly.",
  recipe_id: 5,
  ord: 1
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/5/Basically_SteakAndEggs_1.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_SteakAndEggs_1.mp4.webm')


Step.create(
  body:"Pick leaves and tender stems from 1 small bunch of parsley and finely chop to make ¾ cup. Transfer to a medium bowl. While we love a parsley-based salsa verde, you can mix it up with any tender, flavorful leafy things you have on hand—cilantro, dill, watercress, and/or arugula make for a tasty sauce, too.",
  recipe_id: 5,
  ord: 2
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/5/Basically_SteakAndEggs_2.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_SteakAndEggs_2.mp4.webm')

Step.create(
  body:"Using a Microplane, finely grate 1 garlic clove and 1 tsp. lemon zest into bowl with parsley.",
  recipe_id: 5,
  ord: 3
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/5/Basically_SteakAndEggs_3.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_SteakAndEggs_3.mp4.webm')

Step.create(
  body:"Squeeze 1 lemon half into bowl (make sure no seeds get in there) to yield about 4 tsp.",
  recipe_id: 5,
  ord: 4
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/5/Basically_SteakAndEggs_4.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_SteakAndEggs_4.mp4.webm')

Step.create(
  body:"Coarsely chop 1 Tbsp. capers and add to bowl. Mix in ½ tsp. red pepper flakes, ½ tsp. sugar, and ½ cup extra-virgin olive oil. Season with salt. Set salsa verde aside until ready to serve. If you like a looser sauce, add a bit more oil to thin it out.",
  recipe_id: 5,
  ord: 5
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/5/Basically_SteakAndEggs_5.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_SteakAndEggs_5.mp4.webm')

Step.create(
  body:"Heat a large cast-iron skillet over high. Pat steaks dry again with paper towels. You really want it to be as dry as possible; this will help you get the nice brown crust you're after. Rub a bit of extra-virgin olive oil all over steak, just to lightly coat.",
  recipe_id: 5,
  ord: 6
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/5/Basically_SteakAndEggs_6.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_SteakAndEggs_6.mp4.webm')

Step.create(
  body:"Once pan is nice and hot, using tongs, gently lay steak in pan. Working in 2 batches, cook, undisturbed, until a golden brown crust forms, 2–3 minutes. Turn steak and cook until second side forms a golden brown crust, about 2 minutes longer. You don’t need to use a meat thermometer here because the steak is so thin; a general rule is that once it has a nice sear, it’s already perfectly cooked. If you have a very hot pan, this will happen quickly.",
  recipe_id: 5,
  ord: 7
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/5/Basically_SteakAndEggs_7.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_SteakAndEggs_7.mp4.webm')


Step.create(
  body:"Transfer steaks to a cutting board as you go. Wipe out skillet. Let steak rest 10 minutes.",
  recipe_id: 5,
  ord: 8
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/5/Basically_SteakAndEggs_8.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_SteakAndEggs_8.mp4.webm')

Step.create(
  body:"While steak rests, pour enough oil into skillet to coat bottom of pan and heat over medium. (Don't have a well-seasoned cast-iron pan? You might want to consider switching to a non-stick for this part.) Immediately crack 4 large eggs into pan. (You don’t need to wait for the oil to heat up because there’s already a lot of residual heat in the pan from when you cooked the steak.)",
  recipe_id: 5,
  ord: 9
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/5/Basically_SteakAndEggs_9.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_SteakAndEggs_9.mp4.webm')

Step.create(
  body:"Cook eggs, undisturbed, until edges are crispy, whites are set, and yolks are still runny, 4–6 minutes. Using a spatula, transfer to a paper towel-lined plate; season with salt.",
  recipe_id: 5,
  ord: 10
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/5/Basically_SteakAndEggs_10.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_SteakAndEggs_10.mp4.webm')

Step.create(
  body:"Slice steak against the grain, then transfer to a platter. Arrange eggs alongside steak. Drizzle salsa verde over steak and eggs. Serve remaining salsa verde alongside.",
  recipe_id: 5,
  ord: 11
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/5/Basically_SteakAndEggs_11.mp4.webm')
Step.last.image.attach(io: file, filename: 'Basically_SteakAndEggs_11.mp4.webm')

#recipe 6 steps
Step.create(
  body:"Measure out 2 cups blackberries from 2 pints. Slice berries in half lengthwise and transfer to a medium bowl. (Save remaining berries for decorating later.)",
  recipe_id: 6,
  ord: 1
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake-1.mp4.webm')
Step.last.image.attach(io: file, filename: 'blackberry-icebox-cake-1.mp4.webm')


Step.create(
  body:"Add ½ cup blackberry jam to bowl with berries. Using a citrus juicer, juice 1 lemon over berry mixture. Let sit 10 minutes.",
  recipe_id: 6,
  ord: 2
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake-2.mp4.webm')
Step.last.image.attach(io: file, filename: 'blackberry-icebox-cake-2.mp4.webm')

Step.create(
  body:"Using an electric mixer, beat 2 cups heavy cream in a large bowl, starting on low speed and increasing to high, until soft peaks form.",
  recipe_id: 6,
  ord: 3
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake-3.mp4.webm')
Step.last.image.attach(io: file, filename: 'blackberry-icebox-cake-3.mp4.webm')

Step.create(
  body:"Beat in ¼ cup powdered sugar and a pinch of salt just to combine.",
  recipe_id: 6,
  ord: 4
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake-4.mp4.webm')
Step.last.image.attach(io: file, filename: 'blackberry-icebox-cake-4.mp4.webm')

Step.create(
  body:"Line a medium bowl (6-cup capacity) with plastic wrap, pressing into bottom and up sides and leaving plenty of overhang. Line the bottom of bowl with a layer of vanilla wafers.",
  recipe_id: 6,
  ord: 5
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake-5.mp4.webm')
Step.last.image.attach(io: file, filename: 'blackberry-icebox-cake-5.mp4.webm')

Step.create(
  body:"Spoon about ¼ cup berry mixture over wafers. Scoop 1½ cups whipped cream into a small bowl; cover and save in fridge for later. Spread ½ cup of the remaining whipped cream evenly over wafer and berry layers. Repeat layers with wafers (breaking to fit as needed—no one will know), blackberry mixture, and whipped cream, using more for each layer as the bowl gets wider, until you run out of all the components.",
  recipe_id: 6,
  ord: 6
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake-6.mp4.webm')
Step.last.image.attach(io: file, filename: 'blackberry-icebox-cake-6.mp4.webm')

Step.create(
  body:"Bring up plastic overhang to cover and chill at least 24 hours.",
  recipe_id: 6,
  ord: 7
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake-7.mp4.webm')
Step.last.image.attach(io: file, filename: 'blackberry-icebox-cake-7.mp4.webm')


Step.create(
  body:"Unwrap plastic from top of cake and place a large cake stand or platter firmly over it. Flip over and lift bowl away; peel away plastic wrap. (Ta-da!)",
  recipe_id: 6,
  ord: 8
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake-8.mp4.webm')
Step.last.image.attach(io: file, filename: 'blackberry-icebox-cake-8.mp4.webm')

Step.create(
  body:"Using a whisk, beat reserved whipped cream back to soft peaks, then use a spoon to dollop cream all over cake and spread around evenly.",
  recipe_id: 6,
  ord: 9
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake-9.mp4.webm')
Step.last.image.attach(io: file, filename: 'blackberry-icebox-cake-9.mp4.webm')

Step.create(
  body:"Cut reserved berries in half lengthwise and arrange them on top.",
  recipe_id: 6,
  ord: 10
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake-10.mp4.webm')
Step.last.image.attach(io: file, filename: 'blackberry-icebox-cake-10.mp4.webm')

Step.create(
  body:"Slice cake into 8 pieces to serve.",
  recipe_id: 6,
  ord: 11
)
file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake-11.mp4.webm')
Step.last.image.attach(io: file, filename: 'blackberry-icebox-cake-11.mp4.webm')

Step.create(
  body:"Do Ahead: Cake can be assembled 2 days ahead and can also be unmolded and covered in cream 1 hour ahead; either way, keep in the fridge until the last minute.",
  recipe_id: 6,
  ord: 12
)
# file = open('https://boneappletea-seed.s3-us-west-1.amazonaws.com/recipes/6/blackberry-icebox-cake-12.mp4.webm')
# Step.last.image.attach(io: file, filename: 'blackberry-icebox-cake-12.mp4.webm')
