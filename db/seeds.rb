# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Genre.destroy_all
Movie.destroy_all
Profile.destroy_all
List.destroy_all
ListMovie.destroy_all

# USERS

demouser = User.create!({email: "demouser@gmail.com", password: "password321"})

user1 = User.create!({email: "user1@gmail.com", password: "password123"})
user2 = User.create!({email: "user2@gmail.com", password: "password123"})
user3 = User.create!({email: "user3@gmail.com", password: "password123"})

#GENRES

genre1 = Genre.create!({name: "Adventure"})
genre2 = Genre.create!({name: "Documentary"})
genre3 = Genre.create!({name: "Star Wars"})
genre4 = Genre.create!({name: "Comedy"})



# MOVIES

# movie1.trailer.attach(io: open(""), filename: "")
# movie1.thumbnail.attach(io: open(""), filename: "")
# movie1.logo.attach(io: open(""), filename: "")

# Adventure

movie0 = Movie.create!({
        title: "Life Beyond",
        description: "The biggest question of our time. Are we alone? New research and technologies have brought us closer than ever to an answer - only a few decades in the eyes of some NASA scientists.",
        year: 2019,
        duration: "0h 30m",
        maturity_rating: "TV-G",
        director: "melodysheep",
        cast: "David Christian, Dan Werthimer, Andrew Siemion, Orson Welles, Avi Loeb, Michelle Thaller, Lawrence Krauss",
        genre_id: genre2.id
    })

movie0.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/life_beyond_trailer.mp4"), filename: "life_beyond_trailer.mp4")
movie0.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/life_beyond_thumbnail.jpg"), filename: "life_beyond_thumbnail.jpg")

movie1 = Movie.create!({
    title: "Interstellar",
    description: "A team of astronauts travels through a wormhole near Saturn to find humanity a new home.",
    year: 2014,
    duration: "2h 49m",
    maturity_rating: "PG-13",
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hatheway, Jessica Chastain, Mackenzie Foy, John Lithgow, Timothée Chalamet, Michael Caine",
    genre_id: genre1.id
})

movie1.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/interstellar_trailer.mp4"), filename: "interstellar_trailer.mp4")
movie1.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/interstellar_thumbnail.jpg"), filename: "interstellar_thumbnail.jpg")
movie1.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/interstellar_logo.png"), filename: "interstellar_logo.png")

movie2 = Movie.create!({
    title: "The Martian",
    description: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
    year: 2015,
    duration: "2h 24m",
    maturity_rating: "PG-13",
    director: "Ridley Scott",
    cast: "Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels",
    genre_id: genre1.id
})

movie2.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/the_martian_trailer.mp4"), filename: "the_martian_trailer.mp4")
movie2.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/the_martian_thumbnail.jpg"), filename: "the_martian_thumbnail.jpg")
movie2.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/the_martian_logo.png"), filename: "the_martian_logo.png")

# Documentary
movie3 = Movie.create!({
    title: "Apollo 11",
    description: "A documentary on the first manned mission to the moon, led by Neil Armstrong, Buzz Aldrin and Michael Collins.",
    year: 2019,
    duration: "1h 33m",
    maturity_rating: "G",
    director: "Todd Douglas Miller",
    cast: "Neil Armstrong, Michael Collins, Buzz Aldrin",
    genre_id: genre2.id
})

movie3.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/apollo_11_trailer.mp4"), filename: "apollo_11_trailer.mp4")
movie3.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/apollo_11_thumbnail.jpg"), filename: "apollo_11_thumbnail.jpg")
movie3.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/apollo_11_logo.png"), filename: "apollo_11_logo.png")

movie4 = Movie.create!({
    title: "The Last Man on the Moon",
    description: "Apollo astronaut Gene Cernan shares his epic story of fulfillment, love, and loss as the last astronaut to set foot on the moon.",
    year: 2014,
    duration: "1h 35m",
    maturity_rating: "TV-MA",
    director: "Mark Craig",
    cast: "Alan Bean, Eugene Cernan, Jonathan Cohen",
    genre_id: genre2.id
})

movie4.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/last_man_on_moon_trailer.mp4"), filename: "last_man_on_moon_trailer.mp4")
movie4.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/last_man_on_moon_thumbnail.jpg"), filename: "last_man_on_moon_thumbnail.jpg")

# Star Wars
movie5 = Movie.create!({
    title: "Rogue One: A Star Wars Story",
    description: "The Rebel Alliance conspires to steal plans to defeat the Death Star.",
    year: 2016,
    duration: "2h 13m",
    maturity_rating: "PG-13",
    director: "Gareth Edwards",
    cast: "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen, Wen Jiang",
    genre_id: genre3.id
})

movie5.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/rogue_one_trailer.mp4"), filename: "rogue_one_trailer.mp4")
movie5.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/rogue_one_thumbnail.jpg"), filename: "rogue_one_thumbnail.jpg")
movie5.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/rogue_one_logo.png"), filename: "rogue_one_logo.png")

movie6 = Movie.create!({
    title: "Star Wars: Episode IV - A New Hope",
    description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, and a Wookie to save the galaxy from the Empire.",
    year: 1977,
    duration: "2h 1m",
    maturity_rating: "PG",
    director: "George Lucas",
    cast: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing, Alec Guinness",
    genre_id: genre3.id
})

movie6.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/a_new_hope_trailer.mp4"), filename: "a_new_hope_trailer.mp4")
movie6.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/a_new_hope_thumbnail.jpg"), filename: "a_new_hope_thumbnail.jpg")
movie6.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/a_new_hope_logo.png"), filename: "a_new_hope_logo.png")

movie7 = Movie.create!({
    title: "Hidden Figures",
    description: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.",
    year: 2016,
    duration: "2h 7m",
    maturity_rating: "PG",
    director: "Theodore Melfi",
    cast: "Taraji P. Henson, Octavia Spencer, Janelle Monae, Kevin Costner, Kirsten Dunst",
    genre_id: genre4.id
})

movie7.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/hidden_figures_trailer.mp4"), filename: "hidden_figures_trailer.mp4")
movie7.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/hidden_figures_thumbnail.jpg"), filename: "hidden_figures_thumbnail.jpg")

movie8 = Movie.create!({
        title: "Ad Astra",
        description: "Astronaut Roy McBride undertakes a mission across an unforgiving solar system to uncover the truth about his missing father and his doomed expedition that now, 30 years later, threatens the universe.",
        year: 2019,
        duration: "2h 3m",
        maturity_rating: "PG-13",
        director: "James Gray",
        cast: "Brad Pitt, Tommy Lee Jones, Ruth Negga, Donald Sutherland, Kimberly Elise",
        genre_id: (adventure.id)
    })

movie8.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/ad_astra_trailer.mp4"), filename: "ad_astra_trailer.mp4")
movie8.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/ad_astra_thumbnail.jpg"), filename: "ad_astra_thumbnail.jpg")
movie8.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/ad_astra_logo.png"), filename: "ad_astra_logo.png")

movie9 = Movie.create!({
    title:  "Arrival",
    description:  "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    year:  2016,
    duration: "1h 56m",
    maturity_rating: "PG-13",
    director:  "Denis Villeneuve",
    cast:  "Amy Adams, Jeremy Renner, Forest Whitaker, Michael Stuhlbarg",
    genre_id: genre1.id
})

movie9.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/arrival_trailer.mp4"), filename: "arrival_trailer.mp4")
movie9.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/arrival_thumbnail.jpg"), filename: "arrival_thumbnail.jpg")
movie9.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/arrival_logo.png"), filename: "arrival_logo.png")

movie10 = Movie.create!({
    title: "Gravity",
    description: "Two astronauts work together to survive after an accident leaves them stranded in space.",
    year: 2013,
    duration: "1h 31m",
    maturity_rating: "PG-13",
    director: "Alfonso Cuaron",
    cast: "Sandra Bullock, George Clooney, Ed Harris",
    genre_id: genre1.id
})

 movie10.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/gravity_trailer.mp4"), filename: "gravity_trailer.mp4")
 movie10.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/gravity_thumbnail.png"), filename: "gravity_thumbnail.png")
 movie10.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/gravity_logo.png"), filename: "gravity_logo.png")

 movie11 = Movie.create!({
     title: "2001: A Space Odyssey",
     description: "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
     year: 1968,
     duration: "2h 29m",
     maturity_rating: "G",
     director: "Stanley Kubrick",
     cast: "Keir Dullea, Gary Lockwood, William Sylvester, Daniel Richter",
     genre_id: genre1.id
 })

movie11.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/space_odyssey_trailer.mp4"), filename: "space_odyssey_trailer.mp4")
movie11.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/space_odyssey_thumbnail.jpg"), filename: "space_odyssey_thumbnail.jpg")
movie11.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/space_odyssey_logo.png"), filename: "space_odyssey_logo.png")

