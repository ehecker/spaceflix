import React from "react";

class Movie extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        let movie = this.props.movie;

        return(
            <main className="movie-main">
                {movie.title}
                {movie.description}
                {movie.year}
                {movie.maturity_rating}
                {movie.duration}
                {movie.director}
                {movie.cast}
            </main>
        )
    }
}

export default Movie;