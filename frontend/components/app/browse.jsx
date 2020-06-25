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
        this.props.getGenres();
        this.props.getUserProfiles(this.props.currentUserId)
            .then(this.setDefaultProfile);
    }

    setDefaultProfile() {
        const { activeProfile, getProfileList } = this.props;
        let userProfiles = Object.values(this.props.userProfiles);
        let firstProfile = userProfiles[0];

        if (!activeProfile) { // If there is no active profile, set one
            this.props.setActiveProfile(firstProfile)
            this.props.getProfileList(firstProfile.listId)

                // .then(nextActive => {
                //     getProfileList(nextActive.list_id)
                // })
        } else { // Make sure the active profile exists, if not set one
            let userProfileIds = Object.values(userProfiles).map(profile => profile.id);
            if (!userProfileIds.includes(activeProfile.id)) {
                this.props.setActiveProfile(firstProfile)
                this.props.getProfileList(firstProfile.listId)
                    // .then(nextActive => {
                    //     getProfileList(nextActive.list_id)
                    // })
            } else {
                let activeProf = Object.values(userProfiles).filter(prof => prof.id === activeProfile.id)[0]
                this.props.setActiveProfile(activeProf)
                this.props.getProfileList(activeProf.listId)

                    // .then(nextActive => {
                    //     getProfileList(nextActive.list_id)
                    // })
            }
        }
    }

    render() {
        let { activeProfile, userProfiles, profileList } = this.props;
        if (!activeProfile) {
            return (<div></div>);
        } else {
            let userProfileIds = Object.values(userProfiles).map(profile => profile.id);
            if (!userProfileIds.includes(activeProfile.id)) {
                return (<div></div>);
            }
        }

        // debugger

        let { genres } = this.props
        let movieRows = [];

        if (genres) {
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