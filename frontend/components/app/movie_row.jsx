import React from "react";
import Movie from "./movie";

class MovieRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        // let movies = this.props.genre.movies.map(movieInfo => {
        //     return(
        //         <Movie movie={movieInfo} />
        //     )
        // })
        // debugger

        let { name, movies } = this.props;

        let movieItems = [];

        for (let [title, details] of Object.entries(movies)) {
            let movieItem = (
                <Movie title={title} details={details} />
            )
            movieItems.push(movieItem)
        }

        return(
            <main className="movie-row-main">
                <h2>{name}</h2>
                {movieItems}
            </main>
        )
    }

}

export default MovieRow;