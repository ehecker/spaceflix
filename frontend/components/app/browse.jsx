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
            .then(this.setDefaultProfile)
    }

    setDefaultProfile() {
        let { activeProfile } = this.props;
        let userProfiles = Object.values(this.props.userProfiles);
        let firstProfile = userProfiles[0];

        if (!activeProfile) {
            this.props.setActiveProfile(firstProfile);
            return;
        } else {
            let userProfileIds = Object.values(userProfiles).map(profile => profile.id);
            if (!userProfileIds.includes(activeProfile.id)) {
                this.props.setActiveProfile(firstProfile);
                return;
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
        } else {
            return;
        }

        let featuredMovie;
        if (genres[0]) featuredMovie = genres[0][1];

        return (
            <main className="browse-main">
                <NavContainer page="browse" />
                <section className="browse-hero-container">
                    <FeatureContainer movie={featuredMovie} />
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