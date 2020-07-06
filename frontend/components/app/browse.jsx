import React from "react";
import NavContainer from "../nav_container";
import MovieRow from "./movie_row";
import Footer from "../footer";
import FeatureContainer from "./feature_container";

class Browse extends React.Component {
    constructor(props) {
        super(props)

        this.setDefaultProfile = this.setDefaultProfile.bind(this);
    }

    componentDidMount() {
        const { getGenres, getUserProfiles, currentUserId, activeProfile } = this.props;
        const setDefaultProfile = this.setDefaultProfile;

        getGenres();

        if (!activeProfile) {
            getUserProfiles(currentUserId)
                .then(() => setDefaultProfile())
        }
    }

    setDefaultProfile() {
        const { activeProfile, userProfiles, setActiveProfile, getProfileList } = this.props;
        const firstProfile = Object.values(userProfiles)[0];
        
        if (!activeProfile) {
            setActiveProfile(firstProfile)
            getProfileList(firstProfile.listId)
        } 
    }

    render() {
        const { activeProfile, profileList, genres } = this.props;
        if (!activeProfile || !genres) return (<div></div>);

        let movieRows = [];

        for (let [name, movies] of genres) {
            movies = Object.entries(movies)
            let movieRow = (
                <MovieRow key={name} name={name} movies={movies} history={this.props.history} />
            )
            movieRows.push(movieRow);
        }

        if (profileList.movies && profileList.movies.length > 0) {
            let listMovies = profileList.movies;
            let formattedMovies = {};

            listMovies.forEach(movie => {
                formattedMovies[movie.title] = movie
            })

            formattedMovies = Object.entries(formattedMovies);

            let listMovieRow = (
                <MovieRow key={"myList"} name={"My List"} movies={formattedMovies} history={this.props.history} hideTitle={false} hideGenre={true} />
            )

            movieRows.unshift(listMovieRow);
        }


        return (
            <main className="browse-main">
                <NavContainer page="browse" />
                <section className="browse-hero-container">
                    <FeatureContainer />
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