import React from "react";
import { Link } from "react-router-dom";

class Movie extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            muted: true
        }

        this.fadeTime = 0;
        this.fadeInterval;

        // Function Binds
        this.redirectToWatch = this.redirectToWatch.bind(this);
        this.setActiveMovie = this.setActiveMovie.bind(this);
        this.addMovieToList = this.addMovieToList.bind(this);
        this.removeMovieFromList = this.removeMovieFromList.bind(this);
        this.toggleSound = this.toggleSound.bind(this);
        this.togglePlayOn = this.togglePlayOn.bind(this);
        this.togglePlayOff = this.togglePlayOff.bind(this);
        this.updatePlayStatus = this.updatePlayStatus.bind(this);

        this.fadeInfo = this.fadeInfo.bind(this);
        this.incrementFade = this.incrementFade.bind(this);
        this.startFadeTimer = this.startFadeTimer.bind(this);
        this.resetFadeTimer = this.resetFadeTimer.bind(this);
        this.endFadeTimer = this.endFadeTimer.bind(this);
    }

    componentWillUnmount() {
        this.endFadeTimer();
    }

    addMovieToList(e) {
        e.stopPropagation();

        const listMovieInfo = {
            list_id: this.props.profileList.id,
            movie_id: Number(e.currentTarget.dataset.movieId)
        }

        this.props.addMovieToList(listMovieInfo)
    }

    removeMovieFromList(e) {
        e.stopPropagation();

        const associationId = e.currentTarget.dataset.movieAssociation;
        this.props.removeMovieFromList(associationId)
    }

    togglePlayOn(event) {
        event.currentTarget.classList.add("playing")

        if (!this.props.activeRow) {
            const videoId = this.props.inProfileListRow ? `mylist-${this.props.details.id}` : this.props.details.id;
            const video = document.getElementById(videoId);

            video.play()
        }
    }

    togglePlayOff(event) {
        event.currentTarget.classList.remove("playing")

        if (!this.props.activeRow) {
            let videoId;
            this.props.inProfileListRow ? videoId = `mylist-${this.props.details.id}` : videoId = this.props.details.id;

            const video = document.getElementById(videoId)
            video.pause();
        }
    }

    toggleSound(event) {
        event.stopPropagation()

        this.setState({
            muted: !this.state.muted
        })
    }

    setActiveMovie() {
        this.props.setActiveMovie(this.props.details);
    }

    redirectToWatch(e) {
        e.stopPropagation()
    }

    updatePlayStatus() {
        this.playStatus = true;
    }

    // Fade Timing Functions
    incrementFade() {
        if (!this.props.activeRow) {
            this.fadeTime++;
            
            if (this.fadeTime >= 3) {
                this.fadeInfo();
                this.fadeTime = 0;
                // need to also add clear interval here?
                // this.resetFadeTimer();
            }
        }
    }

    startFadeTimer() {
        this.fadeInterval = window.setInterval(this.incrementFade, 1000)

        const containerId = this.props.inProfileListRow ? `list-${this.props.title}-info-container` : `${this.props.title}-info-container`;
        const container = document.getElementById(containerId)
        container.classList.remove("trigger-fade")
    }

    resetFadeTimer() {
        const containerId = this.props.inProfileListRow ? `list-${this.props.title}-info-container` : `${this.props.title}-info-container`;
        const container = document.getElementById(containerId)
        container.classList.remove("trigger-fade")

        this.fadeTime = 0;
        clearInterval(this.fadeInterval);
        this.fadeInterval = window.setInterval(this.incrementFade, 1000)
    }

    endFadeTimer() {
        this.fadeTime = 0;
        clearInterval(this.fadeInterval);

        const containerId = this.props.inProfileListRow ? `list-${this.props.title}-info-container` : `${this.props.title}-info-container`;
        const container = document.getElementById(containerId);
        if (container) container.classList.remove("trigger-fade");
    }

    fadeInfo() {
        const containerId = this.props.inProfileListRow ? `list-${this.props.title}-info-container` : `${this.props.title}-info-container`;
        const container = document.getElementById(containerId)
        if (container) {
            container.classList.add("trigger-fade")
        } 
    }

    render() {
        const { activeRow, activeMovie, title, details } = this.props;
        const { muted } = this.state;
        let moviePreview;

        const trailer = details.trailer ? details.trailer : window.backupTrailerURL;
        const thumbnail = details.thumbnail;

        const maturity_rating = details.maturity_rating ? details.maturity_rating : details.maturityRating;

        const soundButton = muted ? (
            <div className="sound-btn-off" onClick={this.toggleSound}></div>
        ) 
        : (
            <div className="sound-btn-on" onClick={this.toggleSound}></div>
        );



        if (!activeRow) {
            const listMovies = this.props.profileList.movies;
            const listMovieAssociations = this.props.profileList.movieAssociations;

            let inProfileList;
            let addBtn;

            if (listMovies) inProfileList = listMovies.map(movie => movie.id).includes(details.id);

            if (inProfileList) {
                let movieAssociation = listMovieAssociations.filter(assoc => assoc.movie_id === details.id)[0];

                addBtn=(<div onClick={this.removeMovieFromList} data-movie-association={movieAssociation.id} className="remove-movie-btn"></div>)
            } else {
                addBtn=(<div onClick={this.addMovieToList} data-movie-id={details.id} className="add-btn"></div>)
            }

            const videoId = this.props.inProfileListRow ? `mylist-${details.id}` : details.id;
            const containerId = this.props.inProfileListRow ? `list-${title}-info-container` : `${title}-info-container`;

            moviePreview = (
                <div className="movie-preview-default" onClick={this.setActiveMovie} onMouseEnter={this.togglePlayOn} onMouseLeave={this.togglePlayOff} >
                    <img 
                        src={thumbnail} 
                        className="thumbnail" 
                        onMouseEnter={this.startFadeTimer} 
                    />

                    <div id={containerId}
                    className="trailer-container" 
                    onMouseMove={this.resetFadeTimer} 
                    onMouseLeave={this.endFadeTimer}
                    >
                        <video 
                            className="trailer"
                            id={videoId}
                            src={trailer}
                            loop
                            muted={muted}
                            preload="none"
                        />

                        <div className="trailer-info">
                            <div className="preview-details-container">
                                <div className="preview-details">
                                    <Link onClick={this.redirectToWatch} to={{pathname: `/browse/${details.id}/watch`, movieDetails: details}} className="preview-play-small" />
                                    <div className="preview-title">{title}</div>
                                    <div className="preview-details-box">
                                        <div className="preview-rating">{maturity_rating}</div>
                                        <div className="preview-duration">{details.duration}</div>
                                    </div>
                                </div>
                                <div className="preview-buttons">
                                    {soundButton}
                                    <div className="gap"></div>
                                    {addBtn}
                                </div>
                            </div>
                            <div className="preview-show-link">
                                <div className="preview-chev-down"></div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        } else if (activeRow && activeMovie) {
            moviePreview = (
                <Link className="movie-preview-active playing" to={{pathname: `/browse/${details.id}/watch`, movieDetails: details}} onMouseEnter={this.togglePlayOn} onMouseLeave={this.togglePlayOff}>
                    <img src={thumbnail} className="thumbnail-active"/>
                    <div className="play-container">
                        <div className="preview-play-button hov-button"></div>
                    </div>
                </Link>
            )

        } else if (activeRow && !activeMovie) {
            moviePreview = (
                <div className="movie-preview-inactive" onClick={this.setActiveMovie} onMouseEnter={this.togglePlayOn} onMouseLeave={this.togglePlayOff} >
                    <img src={thumbnail} className="thumbnail-inactive"/>
                    <div className="chev-down hov-button"></div>
                </div>
            )
        }


        return (
            <main className="movie-main">
                {moviePreview}
            </main>
        )
    }

}

export default Movie;