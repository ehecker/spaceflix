import React from "react";
import NavContainer from "../nav_container";
import MovieRow from "./movie_row";
import Footer from "../footer";
import Feature from "./feature";

class Browse extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getGenres()
    }

    render() {
        let { genres } = this.props
        let movieRows = [];

        if (genres) {
            for (let [name, movies] of genres) {
                movies = Object.entries(movies)
                let movieRow = (
                    <MovieRow key={name} name={name} movies={movies} history={this.props.history}/>
                )
                movieRows.push(movieRow);
            }
        } else {
            return;
        }

        let featuredMovie;
        if (genres[0]) featuredMovie = genres[0][1];

        return (
            <main className="browse-main">
                <NavContainer page="browse" />
                <section className="browse-hero-container">
                    <Feature movie={featuredMovie} />
                </section>

                <section className="browse-rows-container">
                    {movieRows}
                </section>
                <Footer />
            </main>
        )
    }

}

export default Browse;