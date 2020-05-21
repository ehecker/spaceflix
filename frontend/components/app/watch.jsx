import React from "react"
import ProgressBar from "./progress_bar";
import { Link } from "react-router-dom";

class Watch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playing: true,
            muted: true
        }

        this.video;

        this.startBackHover = this.startBackHover.bind(this);
        this.endBackHover = this.endBackHover.bind(this);
        this.handleFullscreen = this.handleFullscreen.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    componentDidMount() {
        this.video = document.getElementsByTagName("video")[0];
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

    render() {
        
        // let title = this.props.details.title;
        let title = "Rogue One: A Star Wars Story";

        let { playing, muted } = this.state; 
        let infoOverlay;
        let playButton;
        let muteButton;

        if (playing) {
            playButton=(
                <div className="watch-pause-btn" onClick={this.togglePlay}></div>
            )
        } else {
            playButton=(
                <div className="watch-play-btn" onClick={this.togglePlay}></div>
            )
        }

        if (muted) {
            muteButton=(
                <div className="watch-sound-off" onClick={this.toggleMute}></div>
            )
        } else {
            muteButton=(
                <div className="watch-sound-on" onClick={this.toggleMute}></div>
            )
        }

        return(
            <main className="watch-main">
                <section className="watch-movie-container">
                    <video src="/assets/rogue_one_trailer" autoPlay muted={muted} loop className="watch-movie"></video>
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
            </main>
        )
    }

}

export default Watch;