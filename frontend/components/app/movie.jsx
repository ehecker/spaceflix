import React from "react";

class Movie extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        let { title, details } = this.props;

        return (
            <main className="movie-main">
                

                <div className="movie-trailer-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-basics">
                        <h3 className="basics-movie-title">{title}</h3>
                        {details.maturity_rating}
                        {details.duration}
                    </div>
                    <div className="trailer"></div>
                </div>

                

                {/* {details.description}
                {details.year}
                {details.director}
                {details.cast} */}
            </main>
        )
    }
}

export default Movie;