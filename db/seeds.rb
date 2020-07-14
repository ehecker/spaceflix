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

adventure = Genre.create!({name: "Adventure"})
reallife = Genre.create!({name: "Based on Real Life"})
classics = Genre.create!({name: "Classics"})
starwars = Genre.create!({name: "Star Wars"})
comedy = Genre.create!({name: "Comedy"})
scifi = Genre.create!({name: "Sci-Fi"})

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
    genre_id: adventure.id
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
    genre_id: adventure.id
})

movie2.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/the_martian_trailer.mp4"), filename: "the_martian_trailer.mp4")
movie2.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/the_martian_thumbnail.jpg"), filename: "the_martian_thumbnail.jpg")
movie2.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/the_martian_logo.png"), filename: "the_martian_logo.png")


movie3 = Movie.create!({
    title: "Gravity",
    description: "Two astronauts work together to survive after an accident leaves them stranded in space.",
    year: 2013,
    duration: "1h 31m",
    maturity_rating: "PG-13",
    director: "Alfonso Cuaron",
    cast: "Sandra Bullock, George Clooney, Ed Harris",
    genre_id: adventure.id
})

 movie3.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/gravity_trailer.mp4"), filename: "gravity_trailer.mp4")
 movie3.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/gravity_thumbnail.png"), filename: "gravity_thumbnail.png")
 movie3.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/gravity_logo.png"), filename: "gravity_logo.png")


 movie4 = Movie.create!({
    title:  "Arrival",
    description:  "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    year:  2016,
    duration: "1h 56m",
    maturity_rating: "PG-13",
    director:  "Denis Villeneuve",
    cast:  "Amy Adams, Jeremy Renner, Forest Whitaker, Michael Stuhlbarg",
    genre_id: adventure.id
})

movie4.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/arrival_trailer.mp4"), filename: "arrival_trailer.mp4")
movie4.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/arrival_thumbnail.jpg"), filename: "arrival_thumbnail.jpg")
movie4.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/arrival_logo.png"), filename: "arrival_logo.png")


movie5 = Movie.create!({
    title: "Ad Astra",
    description: "Astronaut Roy McBride undertakes a mission across an unforgiving solar system to uncover the truth about his missing father and his doomed expedition that now, 30 years later, threatens the universe.",
    year: 2019,
    duration: "2h 3m",
    maturity_rating: "PG-13",
    director: "James Gray",
    cast: "Brad Pitt, Tommy Lee Jones, Ruth Negga, Donald Sutherland, Kimberly Elise",
    genre_id: adventure.id
})

movie5.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/ad_astra_trailer.mp4"), filename: "ad_astra_trailer.mp4")
movie5.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/ad_astra_thumbnail.jpg"), filename: "ad_astra_thumbnail.jpg")
movie5.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/ad_astra_logo.png"), filename: "ad_astra_logo.png")


movie6 = Movie.create!({
    title: "Passengers",
    description: "A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.",
    year: 2016,
    duration: "1h 56m",
    maturity_rating: "PG-13",
    director: "Morten Tyldum",
    cast: "Jennifer Lawrence, Chris Pratt, Michael Sheen, Laurence Fishburne",
    genre_id: adventure.id
})

movie6.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/passengers_thumbnail.jpg"), filename: "passengers_thumbnail.jpg")
movie6.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/passengers_logo.png"), filename: "passengers_logo.png")


movie7 = Movie.create!({
    title: "Moon",
    description: "Astronaut Sam Bell experiences a personal crisis as he nears the end of a three-year solitary stint mining helium-3 on the far side of the Moon.",
    year: 2009,
    duration: "1h 37m",
    maturity_rating: "R",
    director: "Duncan Jones",
    cast: "Sam Rockwell, Kevin Spacey, Dominique McElligott",
    genre_id: adventure.id
})

movie7.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/moon_thumbnail.jpg"), filename: "moon_thumbnail.jpg")


movie8 = Movie.create!({
    title: "Life",
    description: "A team of scientists aboard the International Space Station discover a rapidly evolving life form that caused extinction on Mars and now threatens all life on Earth.",
    year: 2017,
    duration: "1h 44m",
    maturity_rating: "R",
    director: "Daniel Espinosa",
    cast: "Hiroyuki Sanada, Ryan Reynolds, Rebecca Ferguson, Jake Gyllenhaal",
    genre_id: adventure.id
})
 
movie8.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/life_thumbnail.jpg"), filename: "life_thumbnail.jpg")



# Based on Real Life
movie9 = Movie.create!({
    title: "Life Beyond",
    description: "The biggest question of our time. Are we alone? New research and technologies have brought us closer than ever to an answer - only a few decades in the eyes of some NASA scientists.",
    year: 2019,
    duration: "0h 30m",
    maturity_rating: "TV-G",
    director: "melodysheep",
    cast: "David Christian, Dan Werthimer, Andrew Siemion, Orson Welles, Avi Loeb, Michelle Thaller, Lawrence Krauss",
    genre_id: reallife.id
})

movie9.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/life_beyond_trailer.mp4"), filename: "life_beyond_trailer.mp4")
movie9.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/life_beyond_thumbnail.jpg"), filename: "life_beyond_thumbnail.jpg")


movie10 = Movie.create!({
    title: "The Last Man on the Moon",
    description: "Apollo astronaut Gene Cernan shares his epic story of fulfillment, love, and loss as the last astronaut to set foot on the moon.",
    year: 2014,
    duration: "1h 35m",
    maturity_rating: "TV-MA",
    director: "Mark Craig",
    cast: "Alan Bean, Eugene Cernan, Jonathan Cohen",
    genre_id: reallife.id
})

movie10.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/last_man_on_moon_trailer.mp4"), filename: "last_man_on_moon_trailer.mp4")
movie10.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/last_man_on_moon_thumbnail.jpg"), filename: "last_man_on_moon_thumbnail.jpg")


movie11 = Movie.create!({
    title: "Apollo 11",
    description: "A documentary on the first manned mission to the moon, led by Neil Armstrong, Buzz Aldrin and Michael Collins.",
    year: 2019,
    duration: "1h 33m",
    maturity_rating: "G",
    director: "Todd Douglas Miller",
    cast: "Neil Armstrong, Michael Collins, Buzz Aldrin",
    genre_id: reallife.id
})

movie11.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/apollo_11_trailer.mp4"), filename: "apollo_11_trailer.mp4")
movie11.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/apollo_11_thumbnail.jpg"), filename: "apollo_11_thumbnail.jpg")
movie11.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/apollo_11_logo.png"), filename: "apollo_11_logo.png")


movie12 = Movie.create!({
    title: "Hidden Figures",
    description: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.",
    year: 2016,
    duration: "2h 7m",
    maturity_rating: "PG",
    director: "Theodore Melfi",
    cast: "Taraji P. Henson, Octavia Spencer, Janelle Monae, Kevin Costner, Kirsten Dunst",
    genre_id: reallife.id
})

movie12.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/hidden_figures_trailer.mp4"), filename: "hidden_figures_trailer.mp4")
movie12.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/hidden_figures_thumbnail.jpg"), filename: "hidden_figures_thumbnail.jpg")


movie13 = Movie.create!({
    title: "First Man",
    description: "A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.",
    year: 2018,
    duration: "2h 21m",
    maturity_rating: "PG-13",
    director: "Damien Chazelle",
    cast: "Ryan Gosling, Claire Foy, Jason Clarke, Kyle Chandler",
    genre_id: reallife.id
})

movie13.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/first_man_trailer.mp4"), filename: "first_man_trailer.mp4")
movie13.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/first_man_thumbnail.jpg"), filename: "first_man_thumbnail.jpg")
movie13.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/first_man_logo.png"), filename: "first_man_logo.png")


movie14 = Movie.create!({
    title: "Apollo 13",
    description: "NASA must devise a strategy to return Apollo 13 to Earth safely after the spacecraft undergoes massive internal damage putting the lives of the three astronauts on board in jeopardy.",
    year: 1995,
    duration: "2h 20m",
    maturity_rating: "PG",
    director: "Ron Howard",
    cast: "Tom Hanks, Bill Paxton, Kevin Bacon, Gary Sinise",
    genre_id: reallife.id
})

movie14.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/apollo_13_thumbnail.jpg"), filename: "apollo_13_thumbnail.jpg")
movie14.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/apollo_13_logo.png"), filename: "apollo_13_logo.png")



# Classics
movie15 = Movie.create!({
    title: "2001: A Space Odyssey",
    description: "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
    year: 1968,
    duration: "2h 29m",
    maturity_rating: "G",
    director: "Stanley Kubrick",
    cast: "Keir Dullea, Gary Lockwood, William Sylvester, Daniel Richter",
    genre_id: classics.id
})

movie15.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/space_odyssey_trailer.mp4"), filename: "space_odyssey_trailer.mp4")
movie15.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/space_odyssey_thumbnail.jpg"), filename: "space_odyssey_thumbnail.jpg")


movie16 = Movie.create!({
    title: "E.T.",
    description: "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
    year: 1982,
    duration: "1h 55m",
    maturity_rating: "PG",
    director: "Steven Spielberg",
    cast: "Dee Wallace, Henry Thomas, Peter Coyote, Robert MacNaughton, Drew Barrymore",
    genre_id: classics.id
})

movie16.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/et_trailer.mp4"), filename: "et_trailer.mp4")
movie16.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/et_thumbnail.jpg"), filename: "et_thumbnail.jpg")
movie16.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/et_logo.png"), filename: "et_logo.png")


movie17 = Movie.create!({
    title: "Alien",
    description: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.",
    year: 1979,
    duration: "1h 57m",
    maturity_rating: "R",
    director: "Ridley Scott",
    cast: "Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton",
    genre_id: classics.id
})

movie17.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/alien_thumbnail.jpg"), filename: "alien_thumbnail.jpg")
movie17.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/alien_logo.png"), filename: "alien_logo.png")


movie18 = Movie.create!({
    title: "Contact",
    description: "Dr. Ellie Arroway, after years of searching, finds conclusive radio proof of extraterrestrial intelligence, sending plans for a mysterious machine.",
    year: 1997,
    duration: "2h 30m",
    maturity_rating: "PG",
    director: "Robert Zemeckis",
    cast: "Jena Malone, David Morse, Jodie Foster, Geoffrey Blake",
    genre_id: classics.id
})

movie18.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/contact_thumbnail.jpg"), filename: "contact_thumbnail.jpg")


movie19 = Movie.create!({
    title: "The Day the Earth Stood Still",
    description: "An alien lands and tells the people of Earth that they must live peacefully or be destroyed as a danger to other planets.",
    year: 1951,
    duration: "1h 32m",
    maturity_rating: "G",
    director: "Robert Wise",
    cast: "Michael Rennie, Patricia Neal, Hugh Marlowe, Sam Jaffe",
    genre_id: classics.id
})

movie19.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/stoodstill_thumbnail.jpg"), filename: "stoodstill_thumbnail.jpg")


movie20 = Movie.create!({
    title: "Blade Runner",
    description: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
    year: 1982,
    duration: "1h 57m",
    maturity_rating: "R",
    director: "Ridley Scott",
    cast: "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
    genre_id: classics.id
})

movie20.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/bladerunner_thumbnail.jpg"), filename: "bladerunner_thumbnail.jpg")


movie21 = Movie.create!({
    title: "The Right Stuff",
    description: "The story of the original Mercury 7 astronauts and their macho, seat-of-the-pants approach to the space program.",
    year: 1983,
    duration: "3h 13m",
    maturity_rating: "PG",
    director: "Philip Kaufman",
    cast: "Sam Shepard, Scott Glenn, Ed Harris, Dennis Quade",
    genre_id: classics.id
})

movie21.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/rightstuff_thumbnail.jpg"), filename: "rightstuff_thumbnail.jpg")



# Star Wars
movie22 = Movie.create!({
    title: "Rogue One: A Star Wars Story",
    description: "The Rebel Alliance conspires to steal plans to defeat the Death Star.",
    year: 2016,
    duration: "2h 13m",
    maturity_rating: "PG-13",
    director: "Gareth Edwards",
    cast: "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen, Wen Jiang",
    genre_id: starwars.id
})

movie22.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/rogue_one_trailer.mp4"), filename: "rogue_one_trailer.mp4")
movie22.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/rogue_one_thumbnail.jpg"), filename: "rogue_one_thumbnail.jpg")
movie22.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/rogue_one_logo.png"), filename: "rogue_one_logo.png")


movie23 = Movie.create!({
    title: "Solo: A Star Wars Story",
    description: "During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.",
    year: 2018,
    duration: "2h 15m",
    maturity_rating: "PG-13",
    director: "Ron Howard",
    cast: "Alden Ehrenreich, Joonas Suotamo, Woody Harrelson, Emilia Clarke, Donald Glover, Thandie Newton",
    genre_id: starwars.id
})

movie23.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/solo_thumbnail.jpg"), filename: "solo_thumbnail.jpg")
movie23.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/solo_logo.png"), filename: "solo_logo.png")


movie24 = Movie.create!({
    title: "Star Wars: Episode IV - A New Hope",
    description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, and a Wookie to save the galaxy from the Empire.",
    year: 1977,
    duration: "2h 1m",
    maturity_rating: "PG",
    director: "George Lucas",
    cast: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing, Alec Guinness",
    genre_id: starwars.id
})

movie24.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/a_new_hope_trailer.mp4"), filename: "a_new_hope_trailer.mp4")
movie24.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/a_new_hope_thumbnail.jpg"), filename: "a_new_hope_thumbnail.jpg")
movie24.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/a_new_hope_logo.png"), filename: "a_new_hope_logo.png")


movie25 = Movie.create!({
    title: "Star Wars: Episode V - The Empire Strikes Back",
    description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
    year: 1980,
    duration: "2h 4m",
    maturity_rating: "PG",
    director: "Irvin Kershner",
    cast: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels",
    genre_id: starwars.id
})

movie25.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/empire_thumbnail.jpg"), filename: "empire_thumbnail.jpg")
movie25.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/empire_logo.png"), filename: "empire_logo.png")


movie26 = Movie.create!({
    title: "Star Wars: Episode VI - Return of the Jedi",
    description: "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
    year: 1983,
    duration: "2h 11m",
    maturity_rating: "PG",
    director: "Richard Marquand",
    cast: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels",
    genre_id: starwars.id
})

movie26.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/return_jedi_thumbnail.jpg"), filename: "return_jedi_thumbnail.jpg")
movie26.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/return_jedi_logo.png"), filename: "return_jedi_logo.png")


movie27 = Movie.create!({
    title: "Star Wars: Episode VII - The Force Awakens",
    description: "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
    year: 2015,
    duration: "2h 18m",
    maturity_rating: "Pg-13",
    director: "J.J. Abrams",
    cast: "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega",
    genre_id: starwars.id
})

movie27.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/force_awakens_trailer.mp4"), filename: "force_awakens_trailer.mp4")
movie27.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/force_awakens_thumbnail.jpg"), filename: "force_awakens_thumbnail.jpg")
movie27.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/force_awakens_logo.png"), filename: "force_awakens_logo.png")


movie28 = Movie.create!({
    title: "Star Wars: Episode VIII - The Last Jedi",
    description: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
    year: 2017,
    duration: "2h 32m",
    maturity_rating: "PG-13",
    director: "Rian Johnson",
    cast: "Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega",
    genre_id: starwars.id
})

movie28.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/last_jedi_thumbnail.jpg"), filename: "last_jedi_thumbnail.jpg")
movie28.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/last_jedi_logo.png"), filename: "last_jedi_logo.png")


movie29 = Movie.create!({
    title: "Star Wars: Episode IX - The Rise of Skywalker",
    description: "The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.",
    year: 2019,
    duration: "2h 22m",
    maturity_rating: "PG-13",
    director: "J.J. Abrams",
    cast: "Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley, John Boyega",
    genre_id: starwars.id
})

movie29.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/rise_skywalker_thumbnail.jpg"), filename: "rise_skywalker_thumbnail.jpg")
movie29.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/rise_skywalker_logo.png"), filename: "rise_skywalker_logo.png")



# Comedy
movie30 = Movie.create!({
    title: "WALL-E",
    description: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    year: 2008,
    duration: "1h 38m",
    maturity_rating: "G",
    director: "Andrew Stanton",
    cast: "Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard",
    genre_id: comedy.id
})

movie30.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/walle_trailer.mp4"), filename: "walle_trailer.mp4")
movie30.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/walle_thumbnail.jpg"), filename: "walle_thumbnail.jpg")
movie30.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/walle_logo.png"), filename: "walle_logo.png")


movie31 = Movie.create!({
    title: "Guardians of the Galaxy",
    description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    year: 2014,
    duration: "2h 1m",
    maturity_rating: "PG-13",
    director: "James Gunn",
    cast: "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, Bradley Cooper",
    genre_id: comedy.id
})

movie31.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/guardians_trailer.mp4"), filename: "guardians_trailer.mp4")
movie31.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/guardians_thumbnail.jpg"), filename: "guardians_thumbnail.jpg")
movie31.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/guardians_logo.png"), filename: "guardians_logo.png")


movie32 = Movie.create!({
    title: "Space Force",
    description: "The people tasked with creating a sixth branch of the armed services: The Space Force.",
    year: 2020,
    duration: "0h 30m",
    maturity_rating: "TV-MA",
    director: "Steve Carell",
    cast: "Steve Carell, John Malkovich, Ben Schwartz, Diana Silvers",
    genre_id: comedy.id
})

movie32.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/space_force_trailer.mp4"), filename: "space_force_trailer.mp4")
movie32.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/space_force_thumbnail.jpg"), filename: "space_force_thumbnail.jpg")
movie32.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/space_force_logo.png"), filename: "space_force_logo.png")


movie33 = Movie.create!({
    title: "Spaceballs",
    description: "A star pilot and his sidekick must come to the rescue of a Princess and save the galaxy from a ruthless race of beings known as Spaceballs.",
    year: 1987,
    duration: "1h 36m",
    maturity_rating: "PG",
    director: "Mel Brooks",
    cast: "Mel Brooks, John Candy, Rick Moranis, Bill Pullman",
    genre_id: comedy.id
})

movie33.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/spaceballs_thumbnail.jpg"), filename: "spaceballs_thumbnail.jpg")
movie33.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/spaceballs_logo.png"), filename: "spaceballs_logo.png")


movie34 = Movie.create!({
    title: "The Hitchhiker's Guide to the Galaxy",
    description: "Mere seconds before the Earth is to be demolished by an alien construction crew, journeyman Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of 'The Hitchhiker's Guide to the Galaxy.'",
    year: 2005,
    duration: "1h 49m",
    maturity_rating: "PG",
    director: "Garth Jennings",
    cast: "Bill Bailey, Anna Chancellor, Warwick Davis, Yasiin Bey, Zooey Deschanel",
    genre_id: comedy.id
})

movie34.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/hitchhikers_thumbnail.jpg"), filename: "hitchhikers_thumbnail.jpg")
movie34.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/hitchhikers_logo.png"), filename: "hitchhikers_logo.png")


movie35 = Movie.create!({
    title: "Galaxy Quest",
    description: "The alumni cast of a space opera television series have to play their roles as the real thing when an alien race needs their help. However, they also have to defend both Earth and the alien race from a reptilian warlord.",
    year: 1999,
    duration: "1h 42m",
    maturity_rating: "PG",
    director: "Dean Parisot",
    cast: "Tim Allen, Sigourney Weaver, Alan Rickman, Tony Shalhoub, Sam Rockwell",
    genre_id: comedy.id
})

movie35.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/galaxy_quest_thumbnail.jpg"), filename: "galaxy_quest_thumbnail.jpg")
movie35.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/galaxy_quest_logo.png"), filename: "galaxy_quest_logo.png")



#Sci-fi
movie36 = Movie.create!({
    title: "Gattaca",
    description: "A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel.",
    year: 1997,
    duration: "1h 46m",
    maturity_rating: "PG-13",
    director: "Andrew Niccol",
    cast: "Ethan Hawke, Uma Thurman, Gore Vidal, Xander Berkeley, Jayne Brook",
    genre_id: scifi.id
})

movie36.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/gattaca_trailer.mp4"), filename: "gattaca_trailer.mp4")
movie36.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/gattaca_thumbnail.jpg"), filename: "gattaca_thumbnail.jpg")
movie36.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/gattaca_logo.png"), filename: "gattaca_logo.png")


movie37 = Movie.create!({
    title: "Blade Runner 2049",
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    year: 2017,
    duration: "2h 44m",
    maturity_rating: "R",
    director: "Denis Villeneuve",
    cast: "Ryan Gosling, Dave Bautista, Robin Wright, Mark Arnold",
    genre_id: scifi.id
})

movie37.trailer.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/runner_2049_trailer.mp4"), filename: "runner_2049_trailer.mp4")
movie37.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/runner_2049_thumbnail.jpg"), filename: "runner_2049_thumbnail.jpg")
movie37.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/runner_2049_logo.png"), filename: "runner_2049_logo.png")


movie38 = Movie.create!({
    title: "Jupiter Ascending",
    description: "A young woman discovers her destiny as an heiress of intergalactic nobility and must fight to protect the inhabitants of Earth from an ancient and destructive industry.",
    year: 2015,
    duration: "2h 7m",
    maturity_rating: "PG-13",
    director: "Lana Wachowski",
    cast: "Mila Kunis, Channing Tatum, Sean Bean, Eddie Redmayne, Douglas Booth",
    genre_id: scifi.id
})

movie38.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/jupiter_thumbnail.jpg"), filename: "jupiter_thumbnail.jpg")
movie38.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/jupiter_logo.png"), filename: "jupiter_logo.png")


movie39 = Movie.create!({
    title: "Star Trek",
    description: "The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.",
    year: 2009,
    duration: "2h 7m",
    maturity_rating: "PG-13",
    director: "J.J. Abrams",
    cast: "Chris Pine, Zachary Quinto, Leonard Nimoy, Eric Bana, Bruce Greenwood",
    genre_id: scifi.id
})

movie39.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/startrek_thumbnail.jpg"), filename: "startrek_thumbnail.jpg")
movie39.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/startrek_logo.png"), filename: "startrek_logo.png")


movie40 = Movie.create!({
    title: "High Life",
    description: "A father and his daughter struggle to survive in deep space where they live in isolation.",
    year: 2018,
    duration: "1h 53m",
    maturity_rating: "R",
    director: "Claire Denis",
    cast: "Robert Pattinson, Juliette Binoche, Andre Benjamin, Mia Goth",
    genre_id: scifi.id
})

movie40.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/highlife_thumbnail.jpg"), filename: "highlife_thumbnail.jpg")


movie41 = Movie.create!({
    title: "Avatar",
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    year: 2009,
    duration: "2h 42m",
    maturity_rating: "PG-13",
    director: "James Cameron",
    cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez",
    genre_id: scifi.id
})

movie41.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/avatar_thumbnail.jpg"), filename: "avatar_thumbnail.jpg")
movie41.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/avatar_logo.png"), filename: "avatar_logo.png")


movie42 = Movie.create!({
    title: "Europa Report",
    description: "An international crew of astronauts undertakes a privately funded mission to search for life on Jupiter's fourth largest moon.",
    year: 2013,
    duration: "1h 30m",
    maturity_rating: "PG-13",
    director: "Sebastian Cordero",
    cast: "Daniel Wu, Sharlto Copley, Christian Camargo, Karolina Wydra",
    genre_id: scifi.id
})

movie42.thumbnail.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/europa_thumbnail.jpg"), filename: "europa_thumbnail.jpg")
movie42.logo.attach(io: open("https://spaceflix-seeds.s3-us-west-1.amazonaws.com/europa_logo.png"), filename: "europa_logo.png")