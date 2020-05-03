import React from "react";

class Browse extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            genres: []
        };
    }

    componentDidMount() {
        let genres = getGenres(); // Genres Index??

        this.setState({
            genres
        })
    }

    render() {

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