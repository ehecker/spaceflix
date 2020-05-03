import React from "react";

class MovieRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }



    render() {

        let movies = this.props.genre.movies.map(movieInfo => {
            return(
                <Movie movie={movieInfo} />
            )
        })

        return(
            <main className="movie-row-main">
                <h2>{this.props.genre.name}</h2>
                {movies}
            </main>
        )
    }

}

export default MovieRow;