# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Genre.destroy_all
Movie.destroy_all

# USERS

demouser = User.create!({email: "demouser@gmail.com", password: "password321"})

user1 = User.create!({email: "user1@gmail.com", password: "password123"})
user2 = User.create!({email: "user2@gmail.com", password: "password123"})
user3 = User.create!({email: "user3@gmail.com", password: "password123"})

#GENRES

genre1 = Genre.create!({name: ""})
genre2 = Genre.create!({name: ""})
genre3 = Genre.create!({name: ""})


# MOVIES



