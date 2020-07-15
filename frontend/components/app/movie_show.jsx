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
            list_id: this.props.profileList.id,
            movie_id: Number(e.currentTarget.dataset.movieId)
        }

        this.props.addMovieToList(listMovieInfo)
    }

    removeMovieFromList(e) {
        const { hideGenre, hideTitle, close, removeMovieFromList } = this.props;
        const shouldClose = hideGenre || hideTitle;

        removeMovieFromList(e.currentTarget.dataset.movieAssociation)
            .then(() => { if (shouldClose) close()})
    }

    render() {
        const { genre, details } = this.props;
        const { muted } = this.state;
        const listMovies = this.props.profileList.movies;
        const listMovieAssociations = this.props.profileList.movieAssociations;
        const maturity_rating = this.props.details.maturity_rating ? this.props.details.maturity_rating : this.props.details.maturityRating;
        
        const trailer = this.props.details.trailer ? this.props.details.trailer : window.backupTrailerURL;


        const logo = this.props.details.logo ? <img src={this.props.details.logo} className="show-logo"/> 
            : <div className="logo-backup">{details.title.toUpperCase()}</div>

        const muteButton = muted ? <div className="show-mute-btn-off" onClick={this.toggleMute} ></div>
            : <div className="show-mute-btn-on" onClick={this.toggleMute}></div>

        let genreDiv;
        if (!this.props.hideGenre) genreDiv=(<div className="show-text"><span className="show-section">Genre: </span>{genre}</div>)
        
        let addButton;
        const inProfileList = listMovies.map(movie => movie.id).includes(details.id);
        
        if (inProfileList) {
            let movieAssociation = listMovieAssociations.filter(assoc => assoc.movie_id === details.id)[0];

            addButton=(
                <div onClick={this.removeMovieFromList} data-movie-association={movieAssociation.id} className="show-list-button" >
                    <div className="show-check-icon"></div>
                    <p className="show-btn-text">My List</p>
                </div>
            )
        } else {
            addButton=(
                <div onClick={this.addMovieToList} data-movie-id={details.id} className="show-list-button">
                    <div className="show-list-icon"></div>
                    <p className="show-btn-text">My List</p>
                </div>        
            )
        }


        return(
            <div className="movie-show-main">
                <section className="show-info-container">
                    <div className="show-info-box">
                        {logo}
                        <div className="show-details-container">
                            <p className="show-details-text">{details.year}</p>
                            <p className="show-details-text show-rating">{maturity_rating}</p>
                            <p className="show-details-text">{details.duration}</p>
                        </div>
                        <div className="show-description">{details.description}</div>
                        <div className="show-buttons-container">
                            <Link to={{ pathname: `/browse/${details.id}/watch`, movieDetails: this.props.details}} className="show-play-button">
                                <div className="show-play-icon"></div>
                                <p className="show-btn-text">Play</p>
                            </Link>
                            {addButton}
                        </div>
                        <div className="show-text"><span className="show-section">Director: </span>{details.director}</div>
                        <div className="show-text"><span className="show-section">Cast: </span>{details.cast}</div>
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
            </div>
        )
    }
}

export default MovieShow;