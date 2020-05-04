import React from "react";

class Movie extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        let { title, details } = this.props;

        return (
            <main className="movie-main">
                {title}
                {details.maturity_rating}
                {details.duration}

                {/* {details.description}
                {details.year}
                {details.director}
                {details.cast} */}
            </main>
        )
    }
}

export default Movie;