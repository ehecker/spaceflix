import React from "react";
import NavContainer from "../nav_container";
import MovieRow from "./movie_row";
import Footer from "../footer";
import Feature from "./feature";
import FeatureContainer from "./feature_container";

class Browse extends React.Component {
    constructor(props) {
        super(props)
        this.setDefaultProfile = this.setDefaultProfile.bind(this);
    }

    componentDidMount() {
        this.props.getGenres();
        this.props.getUserProfiles(this.props.currentUserId)
            .then(this.setDefaultProfile);
    }

    setDefaultProfile() {
        let { activeProfile } = this.props;
        let userProfiles = Object.values(this.props.userProfiles);
        let firstProfile = userProfiles[0];

        if (!activeProfile) { // If there is no active profile, set one
            this.props.setActiveProfile(firstProfile);
        } else { // Make sure the active profile exists, if not set one
            let userProfileIds = Object.values(userProfiles).map(profile => profile.id);
            if (!userProfileIds.includes(activeProfile.id)) {
                this.props.setActiveProfile(firstProfile);
            } else {
                let activeProf = Object.values(userProfiles).filter(prof => prof.id === activeProfile.id)[0]
                this.props.setActiveProfile(activeProf)
            }
        }
    }

    render() {
        let { activeProfile, userProfiles } = this.props;
        if (!activeProfile) {
            return (<div></div>);
        } else {
            let userProfileIds = Object.values(userProfiles).map(profile => profile.id);
            if (!userProfileIds.includes(activeProfile.id)) {
                return (<div></div>);
            }
        }


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

            if (activeProfile.list.movies.length > 0) {
                let listMovies = activeProfile.list.movies;
                let formattedMovies = {};

                listMovies.forEach(movie => {
                    formattedMovies[movie.title] = movie
                })

                formattedMovies = Object.entries(formattedMovies);

                let listMovieRow = (
                    <MovieRow key={"myList"} name={"My List"} movies={formattedMovies} history={this.props.history} />
                )

                movieRows.unshift(listMovieRow);
            }

        } else {
            return;
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