import React from "react";
import { Link } from "react-router-dom";

class MovieShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            muted: true,
            reRender: false
        }

        this.toggleMute = this.toggleMute.bind(this);
        this.addMovieToList = this.addMovieToList.bind(this);
        this.removeMovieFromList = this.removeMovieFromList.bind(this);
        this.triggerRender = this.triggerRender.bind(this);
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

        this.props.addMovieToList(listMovieInfo)
            .then(this.triggerRender)
    }

    removeMovieFromList(e) {
        this.props.removeMovieFromList(e.currentTarget.dataset.movieAssociation)
            .then(this.triggerRender)
    }

    triggerRender() {
        this.setState({
            reRender: !this.state.reRender
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

     
        return(
                <main className="movie-show-main">
                    <section className="show-info-container">
                        <div className="show-info-box">
                            <img src="/assets/movies/rogue-one-title.png" className="show-title"/>
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
                            <div className="show-text"><span className="show-section">Genre: </span>{genre}</div>
                        </div>
                    </section>

                    <section className="show-trailer-container">
                        <div className="show-trailer-btns">
                            <div className="show-close-btn" onClick={this.props.close}></div>
                            {muteButton}
                        </div>                        
                        <video 
                            className="show-trailer"
                            src="/assets/rogue_one_trailer.mp4" 
                            autoPlay
                            muted={muted}
                            loop 
                        />
                    </section>
                </main>
        )
    }
}

export default MovieShow