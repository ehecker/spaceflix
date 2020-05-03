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

genre1 = Genre.create!({name: "Adventure"})
genre2 = Genre.create!({name: "Documentary"})
genre3 = Genre.create!({name: "Star Wars"})


# MOVIES

# Adventure
movie1 = Movie.create!({
    title: "Interstellar",
    description: "A team of astronauts travels through a wormhole near Saturn to find humanity a new home.",
    year: 2014,
    duration: "2h 49m",
    maturity_rating: "PG-13",
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hatheway, Jessica Chastain, Mackenzie Foy, John Lithgow, Timothée Chalamet, Michael Caine",
    genre_id: 1
})

movie2 = Movie.create!({
    title: "The Martian",
    description: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
    year: 2015,
    duration: "2h 24m",
    maturity_rating: "PG-13",
    director: "Ridley Scott",
    cast: "Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels",
    genre_id: 1
})


# Documentary
movie3 = Movie.create!({
    title: "Apollo 11",
    description: "A documentary on the first manned mission to the moon, led by Neil Armstrong, Buzz Aldrin and Michael Collins.",
    year: 2019,
    duration: "1h 33m",
    maturity_rating: "G",
    director: "Todd Douglas Miller",
    cast: "Neil Armstrong, Michael Collins, Buzz Aldrin",
    genre_id: 2
})

movie4 = Movie.create!({
    title: "The Last Man on the Moon",
    description: "Apollo astronaut Gene Cernan shares his epic story of fulfillment, love, and loss as the last astronaut to set foor on the moon.",
    year: 2014,
    duration: "1h 35m",
    maturity_rating: "TV-MA",
    director: "Mark Craig",
    cast: "Alan Bean, Eugene Cernan, Jonathan Cohen",
    genre_id: 2
})


# Star Wars
movie5 = Movie.create!({
    title: "Rogue One: A Star Wars Story",
    description: "The Rebel Alliance conspires to steal plans to defeat the Death Star.",
    year: 2016,
    duration: "2h 13m",
    maturity_rating: "PG-13",
    director: "Gareth Edwards",
    cast: "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen, Wen Jiang",
    genre_id: 3
})

movie6 = Movie.create!({
    title: "Star Wars: Episode IV - A New Hope",
    description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, and a Wookie to save the galaxy from the Empire.",
    year: 1977,
    duration: "2h 1m",
    maturity_rating: "PG",
    director: "George Lucas",
    cast: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing, Alec Guinness",
    genre_id: 3
})