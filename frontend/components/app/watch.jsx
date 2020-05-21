import React from "react"

class Watch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playing: true,
            muted: true
        }

        this.togglePlay = this.togglePlay.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    togglePlay() {
        let { playing } = this.state
        let video = document.getElementsByTagName("video")[0];

        if (playing) video.pause();
        if (!playing) video.play();

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
                    <div className="back-button"></div>
                    <video src="/assets/rogue_one_trailer" autoPlay muted={muted} loop className="watch-movie"></video>
                </section>

                <section className="watch-info-container">
                    <div className="watch-controls-container">
                        <div className="controls-top">
                            <progress className="progress-bar" min='0' max='100' value='0'></progress>
                            <p className="time-remaining"></p>
                        </div>
                        <div className="controls-bottom">
                            <div className="control-btns-left">
                                {playButton}
                                {muteButton}
                                <p className="watch-title unselectable-text">{title}</p>
                            </div>
                            <div className="control-btns-right">
                                <div className="subtitles-btn"></div>
                                <div className="fullscreen-btn"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }

}

export default Watch;