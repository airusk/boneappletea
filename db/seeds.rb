# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Recipe.destroy_all
User.create(name: "Pizza Lover", email: "pizzalover@bat.com", password: "pepperoni")
User.create(name: "Stephen Gee Lee", email: "nonuts@painterest.com", password: "raveking")
User.create(name: "Maximus Li", email: "nomin@wowelp.com", password: "onlymax")
User.create(name: "Kim Pham" email: "Phamtastic@finalenix.com" password: "finalfantasy14")
Recipe.create(title: "The Perfect Napolitano Pizza", body: "This pie is a family heirloom, my family has been passing this down from great grandmother to grandmother to mother and finally to me. You get the idea, it's a rustic and home-y dish to be sure", user_id: 1)
Recipe.create(title: "totino's pizza rolls", body: "Set it and forget it!", user_id: 2)