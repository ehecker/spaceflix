import React from "react";
import Movie from "./movie";

class MovieRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        let { name, movies } = this.props;
        let movieItems = [];    

        for (let i = 0; i < 8; i++) {
            movies.push(["Fake Movie", {
                cast: "Fake Actor 1, Fake Actor 2, Fake Actor 3",
                description: "Fake Description",
                director: "Fake Director",
                duration: "2h 0m",
                genre_id: 1,
                maturity_rating: "R",
                title: "Fake Movie",
                year: 2020
            }])
        }

        for (let [title, details] of movies) {
            let movieItem = (
                <Movie key={details.id} title={title} details={details} />
            )
            movieItems.push(movieItem)
        }



        return (
            <main className="movie-row-main"> 
                <h2 className="genre-title" >{name}</h2>

                <div className="carousel-wrapper">
                    <div className="carousel-button">Prev</div>
                    <div className="movies-container">
                        {movieItems}
                    </div>
                    <div className="carousel-button">Next</div>
                </div>
            </main>
        )
    }

}

export default MovieRow;