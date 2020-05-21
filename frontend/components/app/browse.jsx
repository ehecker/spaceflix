import React from "react";
import MovieRow from "./movie_row";
import Footer from "../footer";

class Browse extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
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

        return (
            <main className="browse-main">
                <section className="browse-hero-container">
                    <div className="hero-info-container">
                        
                    </div>
                    <div className="hero-video"></div>
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