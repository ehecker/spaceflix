import React from "react";
import MovieRow from "./movie_row";

class Browse extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            genres: this.props.genres
        };
    }

    // componentDidMount() {
    //     // let genres = this.props.getGenres(); // Genres Index??

    //     // debugger

    //     this.setState({
    //         genres: this.props.genres
    //     })
    // }

    componentDidMount() {
        this.props.getGenres()
    }

    render() {


        // debugger

        let movieRows = this.state.genres.map(genre => {
            return (
                <MovieRow genre={genre} />
            )
        })

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
            </main>
        )
    }

}

export default Browse;