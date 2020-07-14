import React from "react";
import ProgressBar from "./progress_bar";
import { Redirect, Link } from "react-router-dom";

class Watch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playing: true,
            muted: false
        }

        this.video;
        this.fadeTime;
        this.fadeInterval;

        // Controls Binds
        this.startBackHover = this.startBackHover.bind(this);
        this.endBackHover = this.endBackHover.bind(this);
        this.handleFullscreen = this.handleFullscreen.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.toggleMute = this.toggleMute.bind(this);

        // Fading Binds
        this.fadeControls = this.fadeControls.bind(this);
        this.incrementFade = this.incrementFade.bind(this);
        this.startFadeTimer = this.startFadeTimer.bind(this);
        this.resetFadeTimer = this.resetFadeTimer.bind(this);
        this.endFadeTimer = this.endFadeTimer.bind(this);
    }

    componentDidMount() {
        this.video = document.getElementsByTagName("video")[0];
    }

    componentWillUnmount() {
        this.endFadeTimer();
    }

    startBackHover(e) {
        e.currentTarget.classList.add("back-hover");
    }

    endBackHover(e) {
        e.currentTarget.classList.remove("back-hover");
    }

    handleFullscreen() {
        this.video.requestFullscreen();
    }

    togglePlay() {
        let { playing } = this.state

        if (playing) this.video.pause();
        if (!playing) this.video.play();

        this.setState({
            playing: !playing
        })
    }

    toggleMute() {
        this.setState({
            muted: !this.state.muted
        })
    }

    // Timer Functions
    incrementFade() {
        this.fadeTime++;

        if (this.fadeTime >= 3) {
            this.fadeControls();
            this.fadeTime = 0;
        }        
    }

    startFadeTimer(event) {
        this.fadeInterval = window.setInterval(this.incrementFade, 1000)
        event.currentTarget.classList.remove("fade-controls")
    }

    resetFadeTimer(event) {
        event.currentTarget.classList.remove("fade-controls")

        this.fadeTime = 0;
        clearInterval(this.fadeInterval);
        this.fadeInterval = window.setInterval(this.incrementFade, 1000)
    }

    endFadeTimer(event) {
        this.fadeTime = 0;
        clearInterval(this.fadeInterval)

        const watchMain = document.getElementsByClassName("watch-main")[0];
        if (watchMain) watchMain.classList.remove("fade-controls");
    }

    fadeControls() {
        const watchMain = document.getElementsByClassName("watch-main")[0];
        watchMain.classList.add("fade-controls");
    }

    render() {
        if (!this.props.location.movieDetails) return (<Redirect to="/browse"/>);
        
        const { title } = this.props.location.movieDetails
        const trailer = this.props.location.movieDetails.trailer ? this.props.location.movieDetails.trailer : window.backupTrailerURL;
        
        const { playing, muted } = this.state; 
        
        let playButton;
        playing ? playButton=(<div className="watch-pause-btn" onClick={this.togglePlay}></div>)
            : playButton=(<div className="watch-play-btn" onClick={this.togglePlay}></div>)
        
        let muteButton;
        muted ? muteButton=(<div className="watch-sound-off" onClick={this.toggleMute}></div>)
            : muteButton=(<div className="watch-sound-on" onClick={this.toggleMute}></div>)

        return(
            <div className="watch-main" onMouseEnter={this.startFadeTimer} onMouseMove={this.resetFadeTimer} onMouseLeave={this.endFadeTimer} >
                <section className="watch-movie-container">
                    <video src={trailer} autoPlay muted={muted} loop className="watch-movie"></video>
                </section>

                <section className="watch-info-container">
                    <div className="back-container">
                        <Link className="back-small-container" to={"/browse"} onMouseEnter={this.startBackHover} onMouseLeave={this.endBackHover}>
                            <div className="back-button"></div>
                            <p className="back-text">Back to Browse</p>
                        </Link>
                    </div>

                    <div className="watch-controls-container">
                        <div className="controls-top">
                            <ProgressBar />
                        </div>
                        <div className="controls-bottom">
                            <div className="control-btns-left">
                                {playButton}
                                {muteButton}
                                <p className="watch-title unselectable-text">{title}</p>
                            </div>
                            <div className="control-btns-right">
                                <div className="subtitles-btn"></div>
                                <div className="fullscreen-btn" onClick={this.handleFullscreen}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default Watch;