import React from "react";

class Movie extends React.Component {
    constructor(props) {
        super(props)
        
        // this.state = {
        //     activeMovie: false,
        //     activeRow: false
        // }

        this.setActiveMovie = this.setActiveMovie.bind(this);
        this.togglePlayOn = this.togglePlayOn.bind(this);
        this.togglePlayOff = this.togglePlayOff.bind(this);
    }

    togglePlayOn(event) {
        console.log("Play On Fired")
        event.currentTarget.classList.add("playing")
    }

    togglePlayOff(event) {
        console.log("Play Off Fired")
        event.currentTarget.classList.remove("playing")
    }

    setActiveMovie() {
        console.log("Setting active movie")
        this.props.setActiveMovie(this.props.details);
    }

    render() {

        let { activeMovie, activeRow } = this.props;
        let moviePreview;

        if (!activeRow) {
            moviePreview = (
                <div className="movie-preview-default">
                    {this.props.title}
                </div>
            )
        } else if (activeRow && activeMovie) {
            moviePreview = (
                <div className="movie-preview-active playing" onMouseEnter={this.togglePlayOn} onMouseLeave={this.togglePlayOff}>
                    <img src="/assets/rogue_one_thumbnail.jpg" className="thumbnail-active"/>
                    <i className="fas fa-play-circle fa-6x preview-play-button hov-button"></i>
                </div>
            )

        } else if (activeRow && !activeMovie) {
            moviePreview = (
                <div className="movie-preview-inactive" onMouseEnter={this.togglePlayOn} onMouseLeave={this.togglePlayOff} >
                    <img src="/assets/rogue_one_thumbnail.jpg" className="thumbnail-inactive"/>
                    <div className="chev-down hov-button"></div>
                </div>
            )
        }

        return (
            <div className="movie-main" onClick={this.setActiveMovie}>
                {moviePreview}
            </div>
        )
    }

}

export default Movie;







/*

import React from "react";

class Movie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hovering: false
        }

        // this.showThumbnail = this.showThumbnail.bind(this);
        // this.hideThumbnail = this.hideThumbnail.bind(this);

        this.startHover = this.startHover.bind(this);
        this.endHover = this.endHover.bind(this);
        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
    }

    // showThumbnail(event) {
    //     event.preventDefault();
    //     event.currentTarget.classList.remove("playing")
    // }

    // hideThumbnail(event) {
    //     event.preventDefault();
    //     event.currentTarget.classList.add("playing")
    // }

    // fadeDetails(event) {
    //     event.currentTarget.classList.add("fade-out")
    //     event.currentTarget.children[1].play();
    // }

    // resetDetails(event) {
    //     event.currentTarget.classList.remove("fade-out")
    //     event.currentTarget.children[1].pause();
    // }

    playVideo(event) {
        debugger

        console.log("Play fired")
        event.currentTarget.children[0].play();
    }

    pauseVideo(event) {
        debugger

        console.log("Pause fired")
        event.currentTarget.children[0].pause();
    }

    startHover() {
        // debugger

        // event.preventDefault();
        // event.currentTarget.children[0].children[0].play();

        this.setState({
            hovering: true
        })
    }

    endHover() {
        // event.preventDefault();
        // event.currentTarget.children[0].children[0].pause();

        this.setState({
            hovering: false
        })
    }

    render() {
        let { title, details } = this.props;
        let { hovering } = this.state

        let trailerDetails;
        let thumbnail;

        if (hovering) {

            trailerDetails = (

                // <div className="trailer-box">


                //     <video 
                //         className="trailer-small"
                //         // src="https://spaceflix-seeds.s3-us-west-1.amazonaws.com/rogue_one_trailer.mp4"
                //         src="/assets/rogue_one_trailer"
                //         // src = {details.trailer}
                //         loop
                //         muted="muted"
                //     />
                // </div>

                <div className="details-basic">
                    <i className="fas fa-play-circle fa-3x"></i>
                    <h3 className="basics-movie-title">{title}</h3>
                    <div className="details-text-container">
                        <p className="rating">{details.maturity_rating}</p>
                        <p className="duration">{details.duration}</p>
                    </div>
                </div>
            )

        } else {

            thumbnail = (
                <img
                    className="thumbnail" 
                    src="/assets/rogue_one_thumbnail.jpg"
                />
            )
        }

        return (
            <main className="movie-main">

                <section className="movie-preview" onMouseEnter={this.startHover} onMouseLeave={this.endHover}>
                    {thumbnail}

                    <div className="trailer-box" >
                        
                        <video 
                            className="trailer-small"
                            src="/assets/rogue_one_trailer"
                            // src="https://spaceflix-seeds.s3-us-west-1.amazonaws.com/rogue_one_trailer.mp4"
                            // src = {details.trailer}
                            onMouseEnter={this.playVideo}
                            onMouseLeave={this.pauseVideo}

                            loop
                            muted="muted"
                        />
                        
                        {trailerDetails}
                    </div>
                </section>

                <section className="movie-show">
                   // {details.description}
                   // {details.year}
                    // {details.director}
                    // {details.cast}
                </section>

            </main>
        )
    }
}

export default Movie;

*/