import React from "react";

class Movie extends React.Component {
    constructor(props) {
        super(props)

        this.playVideo = this.playVideo.bind(this);
        this.stopVideo = this.stopVideo.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
        this.hideThumbnail = this.hideThumbnail.bind(this);
    }

    playVideo(event) {
        event.currentTarget.play()
    }

    stopVideo(event) {
        event.currentTarget.pause()
    }

    showThumbnail(event) {
        event.preventDefault();
        event.currentTarget.classList.remove("playing")
    }

    hideThumbnail(event) {
        event.preventDefault();
        event.currentTarget.classList.add("playing")
    }

    fadeDetails(event) {
        console.log("Fade function fired")
        event.currentTarget.classList.add("fade-out")

    }

    resetDetails(event) {
        console.log("Reset function fired")
        event.currentTarget.classList.remove("fade-out")
    }

    render() {
        let { title, details } = this.props;

        return (
            <main className="movie-main">

                <div className="movie-trailer-box" onMouseEnter={this.hideThumbnail} onMouseLeave={this.showThumbnail} >

                    <img className="thumbnail" src="/assets/rogue_one_thumbnail.jpg" />

                    <div className="details-box" onMouseEnter={this.fadeDetails} onMouseLeave={this.resetDetails} >
                        <div className="details-basic">
                            <i className="fas fa-play-circle fa-3x"></i>
                            <h3 className="basics-movie-title">{title}</h3>
                            <div className="details-text-container">
                                <p className="rating">{details.maturity_rating}</p>
                                <p className="duration">{details.duration}</p>
                            </div>
                        </div>

                        <video 
                            className="trailer-small" 
                            src="/assets/rogue_one_trailer" 
                            loop
                            onMouseEnter={this.playVideo}
                            onMouseLeave={this.stopVideo} 
                        />
                    </div>
                </div>

                <div className="details-full">

                </div>

                {/* {details.description}
                {details.year}
                {details.director}
                {details.cast} */}
            </main>
        )
    }
}

export default Movie;