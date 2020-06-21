import React from "react";
import { Link } from "react-router-dom";

class MovieShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            muted: true
        }

        this.toggleMute = this.toggleMute.bind(this);
        this.addMovieToList = this.addMovieToList.bind(this);
        this.removeMovieFromList = this.removeMovieFromList.bind(this);
    }

    toggleMute() {
        this.setState({
            muted: !this.state.muted
        })
    }

    addMovieToList(e) {
        const listMovieInfo = {
            list_id: this.props.activeProfileList.listId,
            movie_id: Number(e.currentTarget.dataset.movieId)
        }

        let refresh = this.props.refreshUserProfiles;
        let userId = this.props.currentUserId;
        let profileId = this.props.activeProfileId;
        let setActive = this.props.setActiveProfile;

        this.props.addMovieToList(listMovieInfo)
            .then(() => refresh(userId))
            .then(() => {
                let newActiveProfile = Object.values(this.props.userProfiles).filter(prof => prof.id === profileId)[0];
                setActive(newActiveProfile)
            })
    }

    removeMovieFromList(e) {
        let refresh = this.props.refreshUserProfiles;
        let userId = this.props.currentUserId;
        let profileId = this.props.activeProfileId;
        let setActive = this.props.setActiveProfile;

        let shouldClose = this.props.hideGenre || this.props.hideTitle;
        let closeShow = this.props.close;

        this.props.removeMovieFromList(e.currentTarget.dataset.movieAssociation)
            .then(() => refresh(userId))
            .then(() => {
                let newActiveProfile = Object.values(this.props.userProfiles).filter(prof => prof.id === profileId)[0];
                setActive(newActiveProfile)
            })
            .then(() => {
                if (shouldClose) closeShow();
            })
    }

    render() {

        let { id, cast, description, director, duration, maturity_rating, title, year } = this.props.details;
        let { genre } = this.props;
        let { muted } = this.state;
        let listMovies = this.props.activeProfileList.movies; // Array of movie objects
        let listMovieAssociations = this.props.activeProfileList.movieAssociations;
        
        let muteButton;
        let addButton;

        // FOR TESTING
        let trailer = "/assets/the_martian_trailer";
        let movTitle = "/assets/movies/the_martian_title";

        if (muted) {
            muteButton=(
                <div className="show-mute-btn-off" onClick={this.toggleMute} ></div>
            )
        } else {
            muteButton=(
                <div className="show-mute-btn-on" onClick={this.toggleMute}></div>
            )
        }

        let inProfileList = listMovies.map(movie => movie.id).includes(id);

        if (inProfileList) {
            let movieAssociation = listMovieAssociations.filter(assoc => assoc.movie_id === id)[0];

            addButton=(
                <div onClick={this.removeMovieFromList} data-movie-association={movieAssociation.id} className="show-list-button" >
                    <div className="show-check-icon"></div>
                    <p className="show-btn-text">My List</p>
                </div>
            )
        } else {
            addButton=(
                <div onClick={this.addMovieToList} data-movie-id={id} className="show-list-button">
                    <div className="show-list-icon"></div>
                    <p className="show-btn-text">My List</p>
                </div>        
            )
        }

        let genreDiv;

        if (this.props.hideGenre) {
            genreDiv=(<div></div>)
        } else {
            genreDiv=(
                <div className="show-text"><span className="show-section">Genre: </span>{genre}</div>
            )
        }

     
        return(
                <main className="movie-show-main">
                    <section className="show-info-container">
                        <div className="show-info-box">
                            <img src={movTitle} className="show-title"/>
                            <div className="show-details-container">
                                <p className="show-details-text">{year}</p>
                                <p className="show-details-text show-rating">{maturity_rating}</p>
                                <p className="show-details-text">{duration}</p>
                            </div>
                            <div className="show-description">{description}</div>
                            <div className="show-buttons-container">
                                <Link to={`/browse/${id}/watch`} className="show-play-button">
                                    <div className="show-play-icon"></div>
                                    <p className="show-btn-text">Play</p>
                                </Link>
                                {addButton}
                            </div>
                            <div className="show-text"><span className="show-section">Director: </span>{director}</div>
                            <div className="show-text"><span className="show-section">Cast: </span>{cast}</div>
                            {genreDiv}
                        </div>
                    </section>

                    <section className="show-trailer-container">
                        <div className="show-trailer-btns">
                            <div className="show-close-btn" onClick={this.props.close}></div>
                            {muteButton}
                        </div>                        
                        <video 
                            className="show-trailer"
                            src={trailer}
                            autoPlay
                            muted={muted}
                            loop 
                        />
                    </section>
                </main>
        )
    }
}

export default MovieShow;